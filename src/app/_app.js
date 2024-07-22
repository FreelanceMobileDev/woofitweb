// src/app/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Import your Redux store
// import '../globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
