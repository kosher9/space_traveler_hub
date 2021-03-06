import axios from 'axios';
import { ROCKETS_URL } from '../../url_config';

const initialState = [];
const GET_ROCKETS = 'GET_ROCKETS';
const BOOKING = 'BOOKING';
const CANCEL_BOOKING = 'CANCEL_BOOKING';

export const getRocketsAction = (data) => {
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  return {
    type: GET_ROCKETS,
    payload: rockets,
  };
};

export const bookingAction = (id) => ({
  type: BOOKING,
  payload: id,
});

export const cancelBookingAction = (id) => ({
  type: CANCEL_BOOKING,
  payload: id,
});

export const getRockets = () => async (dispatch) => {
  await axios({
    method: 'get',
    url: ROCKETS_URL,
    responseType: 'json',
  }).then((res) => {
    dispatch(getRocketsAction(res.data));
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    case BOOKING:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    case CANCEL_BOOKING:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default rocketsReducer;
