import PropTypes from 'prop-types';

function PropertyCard({ name, location, price }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{location}</p>
          <p className='card-text'>Precio: ${price}</p>
        </div>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  
  export default PropertyCard;
