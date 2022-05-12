import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/Missions';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <section className="flex justify-between w-11/12 mx-auto mt-5 gap-10">
      <div className="w-1/2 flex flex-col gap-3">
        <h2 className="font-bold text-xl">My Missions</h2>
        <ul className="border">
          {missions.filter((msn) => msn.reserved === true).map((fmsn) => (
            <li
              key={fmsn.id}
              className="border p-3"
            >
              {fmsn.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-1/2">
        <h2 className="font-bold text-xl">Rockets</h2>
      </div>
    </section>

  );
};

export default Profile;
