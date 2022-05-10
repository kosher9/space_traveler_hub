import MissionsApi from './MissionsAPI';

const initialState = [];
const GET_MISSIONS = 'GET_MISSIONS';

const getMissionsAction = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});

export const getMissions = () => (dispatch) => {
  const Missions = MissionsApi.getMissions();
  Missions.then((res) => {
    dispatch(getMissionsAction(res));
  });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    default:
      return state;
  }
};

export default missionsReducer;
