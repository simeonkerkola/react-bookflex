import React from 'react';
import ReactDOM from 'react-dom';
// import 'normalize.css/normalize.css';
import AppRouter, { history } from './routers/AppRouter';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';

const jsx = <AppRouter />;

// We don't wanna render the whole page again when user clicks login
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

renderApp();
