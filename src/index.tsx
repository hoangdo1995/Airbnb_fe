import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory, BrowserHistory } from 'history';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import {Routes, Route} from 'react-router-dom'
import MainTemplate from './templates/MainTemplate/MainTemplate';
import HomePage from './pages/HomePage/HomePage';
import './scss/index.scss';
import 'animate.css';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const history:BrowserHistory|any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <HistoryRouter history={history}>
          <Provider store={store}>
              <Routes>
                <Route path='' element={<MainTemplate/>}>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='profile' element={<ProfilePage/>}/>
                </Route>
              </Routes>
          </Provider>
      </HistoryRouter>
  </React.StrictMode>
);

reportWebVitals();
export {history};