import logo from "../logo.svg"

const Nav = () => {
    return (


        <nav className="flex items-center justify-center flex-wrap p-6 bg-gray-light">
            <div className="flex items-center flex-shrink-0 text-blue mr-6">
                <a href="/">
                    <img className="h-8 w-auto sm:h-10" src={logo} alt="Logo" />
                </a>
                <a href="/">
                    <span className="font-semibold text-xl tracking-tight"> RentalSite </span>
                </a>
            </div>
            <div>
                <a href="/About">
                    <h1 className="p-2">About</h1>
                </a>
            </div>
            <div>
                <a href="/Advertise">
                    <h1 className="p-2">Advertise With Us</h1>
                </a>
            </div>
        </nav>
    )
}

export default Nav;