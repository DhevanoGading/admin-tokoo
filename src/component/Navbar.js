import React from "react"
import { Link } from "react-router-dom"
class Navbar extends React.Component {
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem('pegawai')
        window.location = "/login"
    }
    render() {
        return (
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a className="navabr-brand">
                    ATK Bersama Store
                </a>
                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/customer" className="nav-link">
                                Customers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/transaction" className="nav-link">
                                Transaction
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pegawai" className="nav-link">
                                Administrator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => this.Logout()}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
export default Navbar;
