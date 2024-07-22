import express from 'express';
import { addGreeting, listGreeting, removeGreeting } from '../controllers/greetingController.js';
import multer from 'multer';
const greetingRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

greetingRouter.get("/list",listGreeting);
greetingRouter.post("/add",upload.single('image'),addGreeting);
greetingRouter.post("/remove",removeGreeting);

export default greetingRouter;