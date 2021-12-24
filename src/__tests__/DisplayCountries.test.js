import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import DisplayCountries from '../components/continents/Continents';

describe('matches snapshot', () => {
  test('matches to snapshot', () => {
    const tree = renderer.create(
      <Router>
        <Provider store={store}>
          <DisplayCountries />
        </Provider>
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
