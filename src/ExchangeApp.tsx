import { useEffect } from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import {  useDispatch } from 'react-redux';

import Header from './Header';
import Home from './Home';
import MarketTrades from './MarketTrades';
import { setUser } from './redux/reducers';
// import { setUser } from './redux/actions';

const ExchangeApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({ id: 'qfgqg&gaeegq#',  name: 'Diyan Tonchev', email: 'dtonchev@vsgbg.com' }));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/:pair/'
          element={<Home />}
        />
        <Route
          path='/:pair/details'
          element={<MarketTrades />}
        />
        <Route path='*' element={<Navigate to={{ pathname: '/' }} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

ExchangeApp.displayName = 'ExchangeApp';
export default ExchangeApp;
