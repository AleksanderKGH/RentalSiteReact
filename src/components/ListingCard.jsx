import logo from "../logo.svg"

const ListingCard = ({ myListing }) => {
    return (
        <>
            <div className='p-4'>
                {/* Card 1 */}
                <div className='rounded overflow-hidden shadow-lg hover:scale-110'>
                    <img className='w-full' src={logo} alt="logo" />
                    <div className='px-3 py-4'>
                        <div className='font-bold text-xl mb-2 
                        flex justify-center'>{myListing.address}</div>
                        <div>
                            {myListing.description}
                        </div>
                        <div className="flex justify-center pt-2">
                            <button className="border-blue-dark border-b-4 bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded hover:cursor-pointer">More</button>
                        </div>
                    </div>
                </div>

            </div>
        </> 
    )
}

export default ListingCard