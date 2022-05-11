import axios from 'axios';

const initialState = [];
const GET_MISSIONS = 'GET_MISSIONS';

const getMissionsAction = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});

export const getMissions = () => async (dispatch) => {
  await axios({
    method: 'get',
    url: 'https://api.spacexdata.com/v3/missions',
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

    default:
      return state;
  }
};

export default missionsReducer;
