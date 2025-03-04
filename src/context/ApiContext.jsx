import { useContext, useState, createContext } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {

    //task array reattivo di Posts.jsx
    const [posts, setPosts] = useState([]);

    //task oggetto reattivo di SinglePost.jsx
    const [singlePost, setSinglePost] = useState({
        id: "",
        titolo: "",
        contenuto: "",
        immagine: "",
        tags: []
    })

    //task import url da dotEnv togliendolo sia da Posts che da SinglePost
    const url = import.meta.env.VITE_ENDPOINT_URL;


    //* chiamte API
    //todo funzione custom call in Posts da aggiungere come callBackFunction
    const getAxiosData = () => {
        axios.get(url)
            .then(res => setPosts(res.data))
            .catch(err => console.error(err))
    }

    //todo funzione custom call in SinglePost da aggiungere come callBackFunction
    const showAxiosData = (id) => {
        axios.get(`${url}/${id}`)
            .then(res => setSinglePost(res.data))
            .catch(err => console.error(err))
    }

    const attributes = { posts, getAxiosData, singlePost, showAxiosData }

    //task ritorno il come viene ereditato il value destrutturato
    return (

        <ApiContext.Provider value={attributes}>
            {children}
        </ApiContext.Provider>

    )

};

//task custom hook 
const useApiContext = () => useContext(ApiContext);

export { ApiProvider, useApiContext }