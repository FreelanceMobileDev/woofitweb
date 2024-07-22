import { Provider } from 'react-redux';
import store from '../../redux/store'; // Adjust the path as needed
import '../globals.css'; // Adjust the path to your global styles if needed

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;