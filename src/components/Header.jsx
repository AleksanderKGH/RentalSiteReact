import logo from "../logo.svg"

const Header = () => {
    return (
        <header className="flex items-center border-b-2
        grid grid-cols-6 inline:block">
            <img className="h-8 w-auto sm:h-10" src={logo} alt="Logo" />
            <h1 className="text-blue col-span-1">
                RentalSite
            </h1>
            <h1>About</h1>
            <h1>Advertise With Us</h1>
        </header>
    )
}

export default Header;