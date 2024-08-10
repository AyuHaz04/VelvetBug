import React, { useState } from 'react'
import './Add.css'
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {


    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Anniversary"
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Image not selected');
            return null;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("discount",Number(data.discount));
        formData.append("image", image);
        const response = await axios.post(`${url}/api/greeting/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                font: "",
                price: "",
                discount: "",
                category: data.category
            })
            setImage(false);
        }
        else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload image</p>
                    <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write Description here' required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Card category</p>
                        <select name='category' onChange={onChangeHandler} >
                            <option value="Anniversary">Anniversary</option>
                            <option value="BabyName">BabyName</option>
                            <option value="BabyShower">BabyShower</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Dhoti">Dhoti</option>
                            <option value="HalfSaree">HalfSaree</option>
                            <option value="Home">Home</option>
                            <option value="Housewarming">Housewarming</option>
                            <option value="Lovestory">Lovestory</option>
                            <option value="Roka">Roka</option>
                            <option value="SaveTheDate">SaveTheDate</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Anniversary_c">Anniversary_c</option>
                            <option value="BabyName_c">BabyName_c</option>
                            <option value="BabyShower_c">BabyShower_c</option>
                            <option value="Birthday_c">Birthday_c</option>
                            <option value="Dhoti_c">Dhoti_c</option>
                            <option value="HalfSaree_c">HalfSaree_c</option>
                            <option value="Housewarming_c">Housewarming_c</option>
                            <option value="Lovestory_c">Lovestory_c</option>
                            <option value="Roka_c">Roka_c</option>
                            <option value="SaveTheDate_c">SaveTheDate_c</option>
                            <option value="Wedding_c">Wedding_c</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' />
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Discount</p>
                        <input type="Number" name='discount' onChange={onChangeHandler} value={data.discount} placeholder='25' />
                    </div>
                </div>
                <button type='submit' className='add-btn' >ADD</button>
            </form>
        </div>
    )
}

export default Add
