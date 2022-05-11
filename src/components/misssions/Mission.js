import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joiningMissionAction, leavingMissionAction } from '../../redux/missions/Missions';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <>
      {
        missions.map((msn) => (
          <tr key={msn.id} className="border border-slate-400">
            <th className="text-left text-base flex p-2">
              <p>{msn.name}</p>
            </th>
            <td className="border border-slate-400 text-sm p-2 pb-5">{msn.description}</td>
            <td className="border border-slate-400 p-1">
              {msn.reserved
                ? (
                  <p
                    className="text-sm text-white bg-cyan-600 text-center w-28 border rounded"
                  >
                    ACTIVE MEMBER
                  </p>
                ) : (
                  <p
                    className="text-sm text-white bg-gray-600 text-center w-28 border rounded"
                  >
                    NOT A MEMBER
                  </p>
                )}
            </td>
            <th className="border border-slate-400 p-2">
              {!msn.reserved
                ? (
                  <button
                    onClick={() => dispatch(joiningMissionAction(msn.id))}
                    type="button"
                    className="border border-gray-400 py-2 w-28 text-base rounded"
                  >
                    Join Mission
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(leavingMissionAction(msn.id))}
                    type="button"
                    className="border border-red-600 py-2 w-28 text-base rounded text-red-600"
                  >
                    Leave Mission
                  </button>
                )}
            </th>
          </tr>
        ))
      }
    </>
  );
};

export default Mission;
