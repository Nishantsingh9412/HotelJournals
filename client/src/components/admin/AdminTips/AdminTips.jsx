import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import JoditEditor from 'jodit-react';


import { SetTips } from '../../../redux/actions/tipsAdmin';

const AdminTips = () => {
        

    const editor = useRef(null);
    // const config = "Please Hello !!!!!!"
    
    const dispatch = useDispatch();
    
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
        }

        
    


        const formData = new FormData();
        formData.append('title', title);
        formData.append('shortDescription', shortDescription);
        formData.append('description', content);
        formData.append('image', image);


        const response = dispatch(SetTips(formData));
        console.log("This is response.path " + response.path);   
        toast.success('Tips Posted Successfully');
    }

    return (
        <div className='container mt-5'>
            <form  encType='multipart/form-data'  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}  className="form-control" id="formGroupExampleInput" placeholder="Enter Title" />
                </div>

                <div className="form-group">
                    <label for="shortDesc">ShortDesc</label>
                    <textarea className="form-control" onChange={(e) => setShortDescription(e.target.value)} name="postBody" rows="5" cols="30" placeholder='Enter Short Description in 150 words' ></textarea>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Description</label>
                    {/* <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} name="postBody" rows="5" cols="30" placeholder='Enter Post Description' ></textarea> */}
                    <JoditEditor 
                        ref={editor}
                        value={content}
                        // config={config}
                        onChange={newContent => setContent(newContent)}
                    />
                </div>
                <div className="form-group w-25">
                    <label for="formGroupExampleInput">Image</label>
                    <input type="file"  name='image'  onChange={(e) => setImage(e.target.files[0])}  className="form-control" id="formGroupExampleInput" />
                </div>
                <button className='btn btn-dark w-100' > Post  </button>
                <Toaster />
            </form>
        </div>


    )
}

export default AdminTips
