import {createContext , useEffect , useState} from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [greeting_list, setGreetingList] = useState([]);
    const [home_list, setHomeList] = useState([]);
    const [img, setImg] = useState("");
    const [img1,setImg1] = useState("");
    const [desc,setDesc] = useState("");

    const fetchGreetingList = async () => {
        const response = await axios.get(url + "/api/greeting/list");
        const response_home = await axios.get(url + "/api/home/list");
        setGreetingList(response.data.data);
        setHomeList(response_home.data.data);
    }

    const setImage = (image) => {
        setImg(image);
    }

    const setImage1 = (image1) => {
        setImg1(image1);
        console.log(image1);
    }

    const setDescription = (description) => {
        setDesc(description);
    }

    useEffect(() => {
        async function loadData() {
            await fetchGreetingList();
        }
        loadData();
    }, [])

    console.log(greeting_list);

    const contextValue = {
        url,
        greeting_list,
        home_list,
        setImage,
        setImage1,
        setDescription,
        desc,
        img,
        img1    
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;