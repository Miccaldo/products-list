import type { AppProps } from 'next/app';
import React, { Fragment, ReactNode } from 'react';
import { Header } from '../header/header';

  const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
      <Fragment>
        <Header></Header>
      </Fragment>
    );
  };

export default Layout;