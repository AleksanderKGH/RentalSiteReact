import Buttons from './Buttons'
import Listing from './Listing';

const Listings = ({ selectedCategory, handleCategoryChange, listingsData }) => {
    return (
        <main>
            <Buttons selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange} />
            <h1 className='flex justify-center'>{selectedCategory} Listings </h1>
            <div className='card-wrapper p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <Listing listingData={listingsData}/>
            </div>
        </main>
    )
}

export default Listings;