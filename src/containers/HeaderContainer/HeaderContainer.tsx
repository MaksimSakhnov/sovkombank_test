import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import { MAIN, STARRED } from 'routes/routes';

export function HeaderContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const onStarredClick = () => {
    if (location.pathname === '/') {
      navigate(STARRED);
    } else {
      navigate(MAIN);
    }
  };

  return <Header onStarredClick={onStarredClick} />;
}
