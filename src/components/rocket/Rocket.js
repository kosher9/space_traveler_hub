import React from 'react';
import { useDispatch } from 'react-redux';
import { bookingAction } from '../../redux/rockets/rocket';

function Rocket(props) {
  const rocket = props;
  const dispatch = useDispatch();

  const bookRocket = () => {
    dispatch(bookingAction(rocket.id));
  };

  return (
    <>
      <div className="flex space-x-6 mb-10">
        <img className="w-52 h-52" src={rocket.flickr_images} alt="Rocket" />
        <div>
          <h1 className="text-xl">{rocket.name}</h1>
          {rocket.reserved ? (
            <p className="mt-3 text-sm">
              <span className="bg-cyan-600 mr-3 text-white rounded">Reserved</span>
              {rocket.description}
            </p>
          ) : (
            <p className="mt-3 text-sm">{rocket.description}</p>
          )}

          <button
            type="button"
            onClick={bookRocket}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
          >
            Reserve Rocket
          </button>
        </div>
      </div>
    </>
  );
}

export default Rocket;
