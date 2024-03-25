import { useEffect, useRef, useState } from "react";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import { useParams } from "react-router-dom";

import setCanvasPreview from "./setCanvasPreview";
import { deleteRecruiterPicAction, updateRecProfilePicAction, getRecProfilePicAction, getRecProfileAction } from "../../../redux/actions/recProfile";
import { Button } from "@chakra-ui/react";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ImageCropper = ({ closeModal, updateAvatar, oldImageURL, dummyImage, id }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [cloudinaryImg, setCloudinaryImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");
  const [delLoading, setDelLoading] = useState(false);
  const [checkDummyImage, setCheckDummyImage] = useState(true);
  const [fileSelectedForLoading, setFileSelectedForLoading] = useState(true);

  const dispatch = useDispatch();
  console.log(oldImageURL);
  console.log("this is dummy IMage \n", dummyImage);
  console.log(dummyImage);

  useEffect(() => {
    const waitforImgUpload = async () => {
      if (cloudinaryImg) {
        const profilePicData = {
          pic: cloudinaryImg
        }
        console.log("This is profile pic data");
        console.log(profilePicData);
        const response2 = await dispatch(updateRecProfilePicAction(id, profilePicData));
        if (response2.success) {
          // toast.success(response2.message);
          setLoading(false);
        } else {
          toast.error('Error updating profile picture');
          setLoading(false);
        }
      }
    }
    waitforImgUpload();
  }, [cloudinaryImg]);

  const handleConfirmDeleteImage = async () => {
    setDelLoading(true);
    const profilePicData = {
      pic: 'https://res.cloudinary.com/dwahql1jy/image/upload/v1711122304/dummy_image_kji5nv.jpg'
    }
    const response = await dispatch(deleteRecruiterPicAction(id, profilePicData));
    if (response.success) {
      // toast.success('Image deleted successfully');
      const response2 = await dispatch(getRecProfilePicAction(id));
      if (response2?.success) {
        updateAvatar(response2?.data?.result?.company_logo);
        const response3 = await dispatch(getRecProfilePicAction(id));
        const response4 = await dispatch(getRecProfileAction(id))
        if (response4.success) {
          updateAvatar(response3?.data?.result?.company_logo);
          console.log("This is response2", response2);
          setTimeout(async () => {
            setDelLoading(false);
            closeModal();
          }, 3000)
        }
      }
    } else {
      toast.error('Error deleting profile picture');
      setDelLoading(false);
      closeModal();
    }
  }

  const handleDeleteImage = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleConfirmDeleteImage();
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }

  const handleCropImage = async () => {
    setLoading(true)
    setCanvasPreview(
      imgRef.current, // HTMLImageElement
      previewCanvasRef.current, // HTMLCanvasElement
      convertToPixelCrop(
        crop,
        imgRef.current.width,
        imgRef.current.height
      )
    );
    const dataUrl = previewCanvasRef.current.toDataURL();
    const response = await fetch(dataUrl);
    const blob = await response.blob();

    // cloudinary image upload starts here
    try {
      const data = new FormData();
      data.append('file', blob);
      data.append('upload_preset', 'Hotel_Journals_app');
      data.append('cloud_name', 'dwahql1jy');
      const responseCloudinary = await fetch('https://api.cloudinary.com/v1_1/dwahql1jy/image/upload', {
        method: 'post',
        body: data
      });

      const imageData = await responseCloudinary.json();
      if (!imageData.url) {
        setLoading(true);
      } else {
        setCloudinaryImg(imageData.url.toString());
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    // Cloudinary image upload ends here
    updateAvatar(dataUrl);
    setTimeout(async () => {
      setLoading(false);
      closeModal();
    }, 3000)
  }

  const onSelectFile = (e) => {
    setFileSelectedForLoading(false);
    setCheckDummyImage(false);
    const file = e.target.files?.[0];
    setLoading(true);
    if (!file) {
      setLoading(false);
      return toast.error('No file selected');
    }
    else if (file.size > 2000000) {
      setLoading(false);
      return toast.error('File size must be less than 2MB');
    }
    else if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      setLoading(false);
      return toast.error('File type must be jpeg or png');
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be at least 150 x 150 pixels.");
          return setImgSrc("");
        }
      });
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
    setLoading(false);
    // setFileSelectedForLoading(true);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };


  useEffect(() => {
    if (oldImageURL === 'https://res.cloudinary.com/dwahql1jy/image/upload/v1711122304/dummy_image_kji5nv.jpg') {
      setCheckDummyImage(false);
    }
  }, [handleDeleteImage, handleCropImage])

  return (
    <>
      <ToastContainer />
      <label style={{ display: 'block', marginBottom: '0.75rem' }}>
        <span className="sr-only">Choose profile photo</span>
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          style={{
            display: 'block',
            width: '20%',
            fontSize: '0.875rem',
            color: '#718096',
            marginRight: '1rem',
            paddingTop: '0.25rem',
            paddingBottom: '0.25rem',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderRadius: '100px',
            border: '0',
            fontSize: '0.75rem',
            backgroundColor: '#4A5568',
            color: '#81E6D9',
          }}
        />
      </label>
      <p className="text-white">Supported file format: png, jpg, jpeg, gif - up to 2MB</p>
      {checkDummyImage && (
        <Button
          onClick={handleDeleteImage}
          isLoading={delLoading}
        >
          Delete Current Image
        </Button>
      )}
      {error && <p style={{ color: '#FC8181', fontSize: '0.75rem' }}>{error}</p>}
      {imgSrc && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReactCrop
            crop={crop}
            onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
            circularCrop
            keepSelection
            aspect={ASPECT_RATIO}
            minWidth={MIN_DIMENSION}
          >
            <img
              ref={imgRef}
              src={imgSrc}
              alt="Upload"
              style={{ maxHeight: "70vh" }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
          {
            <Button
              style={{
                color: '#FFFFFF',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                borderRadius: '9999px',
                marginTop: '1rem',
                backgroundColor: '#4299E1',
              }}
              isLoading={loading}
              onClick={handleCropImage}
            >
              Crop Image
            </Button>
          }
        </div>
      )}
      {crop && (
        <canvas
          ref={previewCanvasRef}
          style={{
            marginTop: '1rem',
            display: "none",
            border: "1px solid black",
            objectFit: "contain",
            width: 150,
            height: 150,
          }}
        />
      )}
      {fileSelectedForLoading && (
        <img
          ref={imgRef}
          alt="OldImage"
          src={oldImageURL}
          style={{ maxHeight: "20vh", borderRadius: '50%', marginTop: '1rem' }}
        />
      )}
    </>
  );
};
export default ImageCropper;
