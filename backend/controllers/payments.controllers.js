import { createRazorpayInstance } from '../config/razorpay.configs.js';
import crypto from 'crypto';
import 'dotenv/config';

const razorpayInstance = createRazorpayInstance();

const createOrder = async (req, res) => {

    const {id , amount} = req.body;

    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: `receipt_order_1`,
    };

    try{
        razorpayInstance.orders.create(options, (err, order) => {
            if(err){
                return res.status(500).json({
                    success: false,
                    message: "Something went wrong",
                });
            }
            return res.status(200).json(order);
        });

    } catch (error){
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong",
        });
    }
};

const verifyPayment = async (req , res) => {
    const { orderId, paymentId , signature } = req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET;

    // create hmac object
    const hmac = crypto.createHmac("sha256" , secret);

    hmac.update(orderId + "|" + paymentId);

    const generatedSignature = hmac.digest("hex");

    if(generatedSignature === signature){
        return res.status(200).json({
            success: true,
            message: "Payment verified",
        });
    } else {
        return res.status(400).json({
            success: false,
            message: "Payment not Verified",
        });
    }
};

export { createOrder, verifyPayment }