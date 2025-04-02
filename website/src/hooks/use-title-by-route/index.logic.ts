import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTitleByRoute = () => {
  const location = useLocation();

  useEffect(() => {

  }, [location.pathname]);
};

export default useTitleByRoute;
