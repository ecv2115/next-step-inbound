import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Step Inbound</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
