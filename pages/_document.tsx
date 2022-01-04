import Document, { Html, Head, Main, NextScript } from 'next/document';

class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="modal-root" />
          <Main />
          <NextScript />
          {/*Below we add the modal wrapper*/}
        </body>
      </Html>
    );
  }
}

export default MainDocument;
