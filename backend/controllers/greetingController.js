import greetingModel from "../models/greetingModel.js";
import fs from 'fs'

// all food list
const listGreeting = async (req, res) => {
    try {
        const greetings = await greetingModel.find({})
        res.json({ success: true, data: greetings })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add food
const addGreeting = async (req, res) => {
    try {
        let image_filename = req.files['image'][0].filename;
        let image1_filename = req.files['image1'][0].filename;

        const greeting = new greetingModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            image: image_filename,
            image1: image1_filename,
        });

        await greeting.save();
        res.json({ success: true, message: "Card Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// delete food
const removeGreeting = async (req, res) => {
    try {
        const greeting = await greetingModel.findById(req.body.id);
        fs.unlink(`uploads/${greeting.image}`, () => { });
        fs.unlink(`uploads/${greeting.image1}`, () => { });

        await greetingModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Card Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { listGreeting, addGreeting, removeGreeting }