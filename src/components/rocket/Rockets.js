import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rocket';
import Rocket from './Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);
  return (
    <div className="pl-24 pr-24 pt-12">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          flickr_images={rocket.flickr_images[0]}
          name={rocket.name}
          description={rocket.description}
        />
      ))}
    </div>
  );
}

export default Rockets;
