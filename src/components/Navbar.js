import logo from "../images/my-travel-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" alt="" />
            <h1 className="nav--logo-text">my travel journal.</h1>
        </nav>
    )
}