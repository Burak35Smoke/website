import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Config from "../config.js";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
	    <Head/>
        <body className={`bg-[#F2F2F2] dark:bg-[#0c011e] text-gray-700 dark:text-[#dcdcdc]`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument