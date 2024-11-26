import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Umami 追踪脚本 */}
          <script
            async
            defer
            data-website-id="51e4e9c9-4e3a-43ec-8e83-af85885b94ec"
            src="https://umami-selfhost-dusky.vercel.app/script.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
