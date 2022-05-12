import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/rocket/Rocket';
import Rockets from '../components/rocket/Rockets';
import { bookingAction, getRocketsAction, cancelBookingAction } from '../redux/rockets/rocket';

describe('Rocket', () => {
  it('should render rocket component', () => {
    const rocket = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });

  it('should render rockets component', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });

  it('should return an action with type GET_ROCKETS', () => {
    const data = [
      {
        id: 1,
        name: 'rocket1',
        description: 'description1',
        flickr_images: [],
      },
    ];
    const action = getRocketsAction(data);
    expect(action.type).toBe('GET_ROCKETS');
  });

  it('should return an action with type BOOKING', () => {
    const id = 1;
    const action = bookingAction(id);
    expect(action.type).toBe('BOOKING');
  });

  it('should should return an action with type CANCEL_BOOKING', () => {
    const id = 1;
    const action = cancelBookingAction(id);
    expect(action.type).toBe('CANCEL_BOOKING');
  });
});
