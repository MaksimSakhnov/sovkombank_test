import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageMain from 'pages/PageMain';
import { MAIN } from 'routes/routes';
import HeaderContainer from 'containers/HeaderContainer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <HeaderContainer />
      <Routes>
        <Route path={MAIN} element={<PageMain />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

export default AppWrapper;
