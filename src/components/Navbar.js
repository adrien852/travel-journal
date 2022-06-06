import logoSrc from "../images/adri-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img className="logo" src={logoSrc} />
            my travel journal.
        </nav>
    )
}