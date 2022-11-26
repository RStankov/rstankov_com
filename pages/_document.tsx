import Document, { Html, Head, Main, NextScript } from 'next/document';
import tw from '~/types/tailwind';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const props = await Document.getInitialProps(ctx);
    return props;
  }

  render() {
    return (
      <Html lang="en" className={tw('h-full')}>
        <Head />
        <body
          className={tw(
            'antialiased bg-gray-50 text-gray-900 border-t-brand border-t-8 h-full',
          )}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
