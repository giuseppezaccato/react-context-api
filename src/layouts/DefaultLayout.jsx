//task import da react-dom
import { Outlet } from "react-router-dom";

//task import dei componenti
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function DefaultLayout() {
    return (

        <div className="container my-2">

            <Header />

            {/* //? componente reattivo dinamico */}
            <Outlet />

            <Footer />
        </div>

    );
}