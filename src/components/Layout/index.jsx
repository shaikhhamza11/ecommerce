import { Header, Footer, Newsletter } from '../index';
import AppContextProvider from '../../context/AppProvider';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <AppContextProvider>
        <Header />
        <Outlet />
        <Newsletter />
        <Footer />
      </AppContextProvider>
    </>
  );
};

export default Layout;
