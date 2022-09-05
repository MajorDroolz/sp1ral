import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import { STORE } from './data';
import { Provider } from 'react-redux';

/*----------------------------------------------------------------------------*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={STORE}>
      <App/>
    </Provider>
  </BrowserRouter>
);

/*----------------------------------------------------------------------------*/