import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import MissionsList from '../components/misssions/MissionsList';
import { joiningMissionAction, leavingMissionAction, getMissionsAction } from '../redux/missions/Missions';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionsList />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type GET_MISSIONS', () => {
    const data = [
      {
        id: 1,
        name: 'mission1',
        description: 'description1',
      },
    ];
    const action = getMissionsAction(data);
    expect(action.type).toBe('GET_MISSIONS');
  });

  it('should return an action with type JOIN_MISSION', () => {
    const id = 1;
    const action = joiningMissionAction(id);
    expect(action.type).toBe('JOIN_MISSION');
  });

  it('should should return an action with type LEAVE_MISSION', () => {
    const id = 1;
    const action = leavingMissionAction(id);
    expect(action.type).toBe('LEAVE_MISSION');
  });
});
