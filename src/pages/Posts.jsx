//task import axios/ NavLink/ useState&useEffect
import axios from "axios"
//todo "npm i axios" da terminale

import { NavLink } from "react-router-dom"
//todo "npm i react-router-dom" da terminale

import { useState, useEffect } from "react"

//task import url dotEnv
// const apiUrl = import.meta.env.VITE_ENDPOINT_URL; //* to => ApiProvider


export default function Posts() {


    //task imposto array vuoto reattivo
    // const [posts, setPosts] = useState([]); //* to => ApiProvider

    //task axios apiCall con useEffect
    useEffect(() => {
        // axios.get(apiUrl)
        //     .then(res => setPosts(res.data))
        //     .catch(err => console.error(err)) //* to => ApiProvider

        //? fetch method
        // fetch(`${url}`, { method: 'GET' })
        // .then((res) => res.json())
        // .then((data) => setPosts(data))
        // .catch(err => console.error(err));
    }, [])



    return (

        <div className="card col-6 mx-auto text-center">
            <ul className="list-group list-group-flush">

                {/* //task mappo array reattivo dopo call e uso NavLink per ricollegare il path! */}
                {posts.map(p => {
                    return (
                        <li key={p.id} className="list-group-item  py-4">
                            <NavLink to={`/posts/${p.id}`}>
                                {p.titolo}
                                <button className="animated-button float-end">
                                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span className="text">More</span>
                                    <span className="circle"></span>
                                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </button>
                            </NavLink>
                        </li>
                    )
                })

                }

            </ul>
        </div>
    )
}
