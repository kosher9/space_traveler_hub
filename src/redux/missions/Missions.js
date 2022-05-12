import axios from 'axios';
import { MISSIONS_URL } from '../../url_config';

const initialState = [];
const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

export const getMissionsAction = (data) => {
  const missions = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return {
    type: GET_MISSIONS,
    payload: missions,
  };
};

export const joiningMissionAction = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leavingMissionAction = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export const getMissions = () => async (dispatch) => {
  await axios({
    method: 'get',
    url: MISSIONS_URL,
    responseType: 'json',
  })
    .then((res) => {
      dispatch(getMissionsAction(res.data));
    });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: true };
      });
      return newState;
    }

    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: false };
      });
      return newState;
    }

    default:
      return state;
  }
};

export default missionsReducer;
