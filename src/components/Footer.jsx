const Footer = () => {
    var today = new Date();
    return (
        <footer className="bg-blue text-gray-light w-full h-300 
        flex justify-center">
            <h5>RentalSite - {today.getFullYear()}</h5>
        </footer>
    )
}

export default Footer;