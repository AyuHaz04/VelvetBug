import {createContext , useEffect , useState} from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [greeting_list, setGreetingList] = useState([]);

    const fetchGreetingList = async () => {
        const response = await axios.get(url + "/api/greeting/list");
        setGreetingList(response.data.data);
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
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;