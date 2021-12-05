// // import Document, { Html, Head, Main, NextScript } from "next/document";

// // class MyDocument extends Document {
// //   static async getInitialProps(ctx) {
// //     const initialProps = await Document.getInitialProps(ctx);
// //     return { ...initialProps };
// //   }

// //   render() {
// //     return (
// //       <Html>
// //         <Head />
// //         <link rel="preconnect" href="https://fonts.googleapis.com" />
// //         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
// //         <link
// //           href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
// //           rel="stylesheet"
// //         />
// //         <body>
// //           <Main />
// //           <NextScript />
// //         </body>
// //       </Html>
// //     );
// //   }
// // }

// // export default MyDocument;
// // eslint-disable-next-line @next/next/no-document-import-in-page
// import Document from "next/document";
// import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }