import Buttons from './Buttons'

import logo from "../logo.svg"

const Listing = () => {
    return (
        <main>
            <Buttons />
            <h1>Listing</h1>
            <div className='p-10'>
                {/* Card 1 */}
                <div className='rounded overflow-hidden shadow-lg'>
                    <img className='w-full' src={logo} alt="logo" />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 
                        flex justify-center'>Address</div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Listing;