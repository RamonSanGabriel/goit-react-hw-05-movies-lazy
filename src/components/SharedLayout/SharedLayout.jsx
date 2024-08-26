import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import css from './SharedLayout.module.css';
import Footer from 'components/Footer/Footer';
import { BackTopBtn } from 'components/BackTopBtn/BackTopBtn';

const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
          <BackTopBtn />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
