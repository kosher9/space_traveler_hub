import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import MissionsList from '../components/misssions/MissionsList';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionsList />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
