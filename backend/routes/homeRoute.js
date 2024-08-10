import express from 'express';
import { addImage, listImage, removeImage } from '../controllers/homeController.js';
import multer from 'multer';
const homeRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

homeRouter.get("/list",listImage);
homeRouter.post("/add",upload.single('image'),addImage);
homeRouter.post("/remove",removeImage);

export default homeRouter;