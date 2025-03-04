//task import axios/useState/useParams/useNavigate
import axios from "axios"
import { useState, useEffect } from "react"

//? import da react-router-dom useParams e useNavigate
import { useParams } from "react-router-dom"
import BackBtn from "../components/BackBtn"

// import { useNavigate } from "react-router-dom"
//*bonus useNavigate e conseguente navigate(importati dal componente BackBtn)

export default function SinglePost() {
    //task import navigate
    // const navigate = useNavigate()

    //task destructuring
    const { id } = useParams()

    //task import da .env
    // const url = import.meta.env.VITE_ENDPOINT_URL //* to => ApiProvider


    //task setup useState dell'obj in show con {id} di useParams
    // const [singlePost, setSinglePost] = useState({
    //     id: "",
    //     titolo: "",
    //     contenuto: "",
    //     immagine: "",
    //     tags: []
    // }) //* to => ApiProvider
    //task destructuring
    const { immagine, titolo, contenuto, tags } = singlePost


    useEffect(() => {
        // axios.get(`${url}/${id}`)
        //     .then(res => setSinglePost(res.data))
        //     .catch(err => console.error(err)) //* to => ApiProvider

        //? fetch method
        // fetch(`${url}/${id}`, { method: 'GET' })
        //     .then(res => res.json())
        //     .then(data => setSinglePost(data))
        //     .catch(err => console.error(err))
    }, [id])

    return (
        <>
            <div key={id} className="card col-6 mx-auto p-3">
                {/* <img className="card-img-top" src={immagine} alt={titolo} /> */}
                <div className="card-body text-center ">
                    <h3 className="card-title">{titolo}</h3>
                    <p className="card-text">{contenuto}</p>
                    <ul >
                        <li> #TAGS </li>
                        {
                            tags.map((p, id) => {
                                return (
                                    <li key={id} > {p} </li>
                                )
                            })
                        }
                    </ul>
                    <BackBtn />

                </div>

            </div>
        </>

    )
}
