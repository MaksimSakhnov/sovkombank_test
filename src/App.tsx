import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageMain from 'pages/PageMain';
import { MAIN } from 'routes/routes';
import HeaderContainer from 'containers/HeaderContainer';

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
