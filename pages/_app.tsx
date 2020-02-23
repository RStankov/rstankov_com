import App from 'next/app';
import React from 'react';
import Layout from '~/components/Layout';

import '~/styles/reset.css';
import '~/styles/html.css';

interface IProps {
  Component: React.ComponentType;
  pageProps: any;
}

export default class Application extends App<IProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
