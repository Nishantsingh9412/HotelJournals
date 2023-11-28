import multer from "multer";
import Tips from '../models/TipsAdmin.js';  // TipsAdmin.js is the model for tips


export const TipsAdmin = async (req, res) => {
    try {
        const {title,description,shortDescription} = req.body;
        const {path} = req.file;            // image upload path to access it in get request
        console.log(path);
        const newTips = await Tips.create({title,description,shortDescription,image:path})
        console.log("Tips Admin controller : " + title + " " + description + " " + shortDescription + " " + path);
        res.status(201).json({success:true,message:'Tips Added Successfully',result:newTips,path:req.file.path});
    } catch (error) {
        console.log("Error from TipsAdmin controller: ", error.message);
        res.status(500).json({ success:false, message: `Something went wrong from server: ${error.message}` });
    }
};

export const TipsData = async(req,res) => {
    try{    
        const allTips = await Tips.find();
        const AllTips = [];
        allTips.forEach(singleTip => {
            AllTips.push({_id:singleTip._id,title:singleTip.title,shortDescription:singleTip.shortDescription,description:singleTip.description,image:singleTip.image});
        });
        console.log("Tips Data controller For fetching Data : " + AllTips);   
        res.status(200).json({success:true,message:'Tips Data Fetched Successfully',result:AllTips});
    }catch(error){
        console.log("Error from TipsData controller: ", error.message);
        res.status(500).json({ success:false, message: `Something went wrong from server: ${error.message}` });
    }
}

export const SingleTipData = async(req,res) => {
    try{
        const {id} = req.params;
        const singleTip = await Tips.findById(id);
        res.status(200).json({message:'single tip mil giyo',result:singleTip})
    }catch(error){
        res.status(401).json({message:error.message});
    }
}