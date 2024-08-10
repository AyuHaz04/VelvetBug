import React, { useEffect, useState } from 'react'
import './List_Home.css'
import { url, currency } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const List_Home = () => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/home/list`)
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async (greetingId) => {
    const response = await axios.post(`${url}/api/home/remove`, {
      id: greetingId
    })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Cards List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {if(item.category === "Top" || item.category === "Bottom"){
            return (
                <div key={index} className='list-table-format'>
                  <img src={`${url}/images/` + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p className='cursor' onClick={() => removeFood(item._id)}>x</p>
                </div>
              )
        }
          
        })}
      </div>
    </div>
  )
}

export default List_Home
