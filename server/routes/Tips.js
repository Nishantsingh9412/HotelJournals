import express from "express";
import multer from "multer";

import { TipsAdmin, TipsData , SingleTipData , DeleteTip } from "../controllers/tips.js";

const router = express.Router();

// For image upload
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null, new Date().toISOString().replace(/[:.]/g, '_') + file.originalname)
        // cb(null,file.originalname)
    }
});

                // for selecting file type discarding all other files except jpeg and png
const fileFilter = (req,file,cb) => {
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
        cb(null,true);
    }else{
        cb(null,false);
    }
}
                        // for file size limit
const upload = multer({
    storage:storage,
    fileFilter:fileFilter
});

                    // This is for size of the image

// const upload = multer({storage:storage,limits:{
//     fileSize:1024 * 1024 * 5
// },
// })

// End of image upload



router.post('/tips',upload.single('image'),TipsAdmin)
router.get('/tips',TipsData)
router.get('/tips/:id',SingleTipData)
router.delete('/tips/:id',DeleteTip);

// router.post('/tips',TipsAdmin)

export default router;