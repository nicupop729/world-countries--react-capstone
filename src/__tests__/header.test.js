import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Header from '../components/header/Header';

describe('matches snapshot', () => {
  test('matches to snapshot', () => {
    const handlerSearchCountry = jest.fn();
    const tree = renderer.create(
      <Router>
        <Provider store={store}>
          <Header onSearchCountry={handlerSearchCountry} />
        </Provider>
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
