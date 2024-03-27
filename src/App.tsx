import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PageMain from 'pages/PageMain';
import HeaderContainer from 'containers/HeaderContainer';
import useInitialValues from 'hooks/useInitialValues';
import { MAIN, STARRED } from 'routes/routes';
import { PageStarred } from './pages/PageStarred/PageStarred';

function App() {
  useInitialValues();
  return (
    <>
      <HeaderContainer />
      <Routes>
        <Route path={MAIN} element={<PageMain />} />
        <Route path={STARRED} element={<PageStarred />} />
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
