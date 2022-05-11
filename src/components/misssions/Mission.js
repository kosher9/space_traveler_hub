/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/Missions';

const Mission = () => {
  const Missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <>
      {
        Missions.map(({
          mission_name,
          mission_id,
          description,
        }) => (
          <tr key={mission_id} className="border border-slate-400">
            <th className="text-left text-base flex p-2">
              <p>{mission_name}</p>
            </th>
            <td className="border border-slate-400 text-sm p-2 pb-5">{description}</td>
            <td className="border border-slate-400 p-1">
              <p className="text-sm text-white bg-gray-600 text-center w-28 border rounded">NOT A MEMBER</p>
            </td>
            <th className="border border-slate-400 p-2">
              <button type="button" className="border border-gray-400 py-2 w-28 text-base rounded">Join Mission</button>
            </th>
          </tr>
        ))
      }
    </>
  );
};

export default Mission;