import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import JoditEditor from 'jodit-react';
import DOMPurify from 'dompurify';


import { SetTips } from '../../../redux/actions/tipsAdmin';
import { useNavigate } from 'react-router-dom';

const AdminTips = () => {
        

    const editor = useRef(null);
    // const config = "Please Hello !!!!!!"
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [title , setTitle] = useState('');
    // const [description , setDescription] = useState('');
    const [shortDescription , setShortDescription] = useState('');
    const [content,setContent] = useState('');
    const [image , setImage] = useState('');
    console.log(title, image ,shortDescription, content);


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // const formData =new FormData();
    //     // formData.append('title',title);
    //     // formData.append('description',description);
    //     // formData.append('image',image);

    //     dispatch(SetTips({title,description,image}));
    //     console.log(title,description,image);   
    //     toast.success('Tips Posted Successfully');
    // }

    



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
        }if(image.size > 1000000){
            return toast.error('Image size must be less than 1MB');
        }
        
        const sanitizedContent = DOMPurify.sanitize(content);


        const formData = new FormData();
        formData.append('title', title);
        formData.append('shortDescription', shortDescription);
        formData.append('description', sanitizedContent);
        formData.append('image', image);


        const response = await dispatch(SetTips(formData));
        if(response.success){
            // console.log("This is response.path " + response.path);   
            toast.success(response.message);
            navigate('/superadmin/tips');
        }else{
            toast.error('Failed to post Tip');
        }
    }

    return (
        <div className='container mt-5'>
            <form  encType='multipart/form-data'  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Title  <small className='text-danger'> * </small> </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}  className="form-control" id="formGroupExampleInput" placeholder="Enter Title" />
                </div>

                <div className="form-group">
                    <label for="shortDesc">ShortDesc  <small className='text-danger'> * </small> </label>
                    <textarea class="form-control" onChange={(e) => setShortDescription(e.target.value)} name="postBody" rows="5" cols="30" placeholder='Enter Short Description in 150 words' ></textarea>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Description  <small className='text-danger'> * </small> </label>
                    {/* <textarea class="form-control" onChange={(e) => setDescription(e.target.value)} name="postBody" rows="5" cols="30" placeholder='Enter Post Description' ></textarea> */}
                    <JoditEditor 
                        ref={editor}
                        value={content}
                        // config={config}
                        onChange={newContent => setContent(newContent)}
                    />
                </div>
                <div className="form-group w-50">
                    <label for="formGroupExampleInput">Image <small className='text-danger'>*</small> (Image size must be less than 1 MB)</label>
                    <input type="file" accept='image/*' name='image'  onChange={(e) => setImage(e.target.files[0])}  className="form-control" id="formGroupExampleInput" />
                </div>
                <button className='btn btn-success w-100' > Add Tip  </button>
                <Toaster />
            </form>
        </div>


    )
}

export default AdminTips
