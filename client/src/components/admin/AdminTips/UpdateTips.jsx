import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import JoditEditor from 'jodit-react';
import { useParams } from 'react-router-dom';

import { GetSingleTips, UpdateATip } from '../../../redux/actions/tipsAdmin';


const UpdateTips = () => {

  const {id} = useParams();
  console.log(id);

  const editor = useRef(null);
  const dispatch = useDispatch();
  const [title , setTitle] = useState('');
  // const [description , setDescription] = useState('');
  const [shortDescription , setShortDescription] = useState('');
  const [content,setContent] = useState('');
  const [image , setImage] = useState('');
//   console.log(title, image ,shortDescription, content);

  useEffect(() => {
    dispatch(GetSingleTips(id))
  },[dispatch])

  // const {singleTips} = useSelector(state => state.tipsAdmin);
  const singleTip = useSelector((state) => state.singleTipReducer);
  console.log(singleTip);
    // console.log("This is result ",singleTip.data.result.title);

  



  const handleSubmit = async (e) => {
      e.preventDefault();
      if(!title || !content || !image){
          return toast.error('Please fill all fields');
      }
      if(shortDescription.length < 150){
          return toast.error('Short Description must be more than 150 characters');
      }
      if((image.type !== 'image/jpeg') && (image.type !== 'image/png')){
          return toast.error('Invalid image format'); 
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('shortDescription', shortDescription);
      formData.append('description', content);
      formData.append('image', image);


      const response = dispatch(UpdateATip(id,formData));
      console.log("This is response.path " + response.path);   
      toast.success('Tips Posted Successfully');
  }

  useEffect(() => {
        if(singleTip?.data?.result){
            setTitle(singleTip?.data?.result?.title);           // Locally dispatched data
            setShortDescription(singleTip?.data?.result?.shortDescription);
            setContent(singleTip?.data?.result?.description);
            setImage(singleTip?.data?.result?.image);
        }
  },[singleTip])

  return (
      <div className='container mt-5'>
          <form  encType='multipart/form-data'  onSubmit={handleSubmit}>
              <div className="form-group">
                  <label for="formGroupExampleInput">Title</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  className="form-control" id="formGroupExampleInput" placeholder="Enter Title" />
              </div>

              <div className="form-group">
                  <label for="shortDesc">ShortDesc</label>
                  <textarea class="form-control" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} name="postBody" rows="5" cols="30" placeholder='Enter Short Description in 150 words' ></textarea>
              </div>
              <div className="form-group">
                  <label for="formGroupExampleInput2" value={content}> Description</label>
                  {/* <textarea class="form-control" onChange={(e) => setDescription(e.target.value)} name="postBody" rows="5" cols="30" placeholder='Enter Post Description' ></textarea> */}
                  <JoditEditor 
                      ref={editor}
                      value={content}
                      // config={config}
                      onChange={newContent => setContent(newContent)}
                  />
              </div>
              <div className="form-group w-25">
                  <label for="formGroupExampleInput">Image</label>
                    <input type="file"  name='image'   onChange={(e) => setImage(e.target.files[0])}  className="form-control" id="formGroupExampleInput" />
                </div>
              <button className='btn btn-dark w-100' > Post  </button>
              <Toaster />
          </form>
      </div>
  )
}

export default UpdateTips
