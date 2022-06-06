import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Profile from '../components/profile/Profile';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
