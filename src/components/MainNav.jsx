import { Link, NavLink } from "react-router-dom";
import logoReact from "../assets/react.svg"


export default function MainNav() {

    return (
        <>
            {/* //task sostituiranno tutti i link reattivi del mio nav (.active compreso) */}

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logoReact} alt="logo" />
                    </Link>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutus" className="nav-link" aria-current="page">
                                    Chi Siamo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/posts" className="nav-link" aria-current="page">
                                    Blog
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    );
}