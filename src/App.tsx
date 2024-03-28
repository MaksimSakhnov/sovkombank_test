import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import HeaderContainer from 'containers/HeaderContainer';
import Loader from 'components/Loader';
import useInitialValues from 'hooks/useInitialValues';
import { MAIN, STARRED } from 'routes/routes';

const PageMain = lazy(() => import('pages/PageMain'));
const PageStarred = lazy(() => import('pages/PageStarred'));

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
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default AppWrapper;
