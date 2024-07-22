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
        let image_filename = `${req.file.filename}`

        const greeting = new greetingModel({
            name: req.body.name,
            font: req.body.font,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await greeting.save();
        res.json({ success: true, message: "Card Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete food
const removeGreeting = async (req, res) => {
    try {

        const greeting = await greetingModel.findById(req.body.id);
        fs.unlink(`uploads/${greeting.image}`, () => { })

        await greetingModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Card Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listGreeting, addGreeting, removeGreeting }