import homeModel from "../models/homeModel.js";
import fs from 'fs'

// all card list
const listImage = async (req, res) => {
    try {
        const homes = await homeModel.find({})
        res.json({ success: true, data: homes })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add food
const addImage = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const home= new homeModel({
            name: req.body.name,
            category:req.body.category,
            image: image_filename,
        })

        await home.save();
        res.json({ success: true, message: "Card Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete food
const removeImage = async (req, res) => {
    try {

        const home = await homeModel.findById(req.body.id);
        fs.unlink(`uploads/${home.image}`, () => { })

        await homeModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Card Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listImage, addImage, removeImage }