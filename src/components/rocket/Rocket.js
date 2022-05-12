import React from 'react';

function Rocket(props) {
  const rocket = props;
  return (
    <>
      <div className="flex space-x-6 mb-10">
        <img className="w-52 h-52" src={rocket.flickr_images} alt="Rocket" />
        <div>
          <h1 className="text-xl">{rocket.name}</h1>
          <p className="mt-3 text-sm">{rocket.description}</p>
          <button
            type="button"
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
