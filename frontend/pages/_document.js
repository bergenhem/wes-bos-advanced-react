import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import StyledComponentsRegistry from '../lib/registry';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <StyledComponentsRegistry>
            <Main />
            <NextScript />
          </StyledComponentsRegistry>
        </body>
      </Html>
    )
  }
}
