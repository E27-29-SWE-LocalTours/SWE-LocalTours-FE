/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { AuthProvider } from '../utils/context/authContext';
// import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';
import NavBar from '../components/NavBar';
import TourCard from '../components/TourCard';

function MyApp() {
  // Put these back in the MyApp function when we want to do auth
  // { Component, pageProps }
  return (
    <AuthProvider>
      {' '}
      {/* gives children components access to user and auth methods */}
      <NavBar />
      <div className="flex flex-wrap">
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
      {/* <ViewDirectorBasedOnUserAuthStatus
        // if status is pending === loading
        // if status is logged in === view app
        // if status is logged out === sign in page
        component={Component}
        pageProps={pageProps}
      /> */}
    </AuthProvider>
  );
}

export default MyApp;
