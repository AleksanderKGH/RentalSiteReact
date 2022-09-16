import ListingCard from './ListingCard';

const Listing = ({ listingData }) => {
    return (
        (listingData || []).map((myListing) => (
            <ListingCard key={myListing.id} myListing={myListing} />
        ))
    )
}

export default Listing;