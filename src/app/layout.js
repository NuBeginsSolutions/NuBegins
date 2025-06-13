import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Toaster } from "react-hot-toast";
const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="../../public/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon-16x16.png"/>
<link rel="manifest" href="../../public/site.webmanifest"/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-W566GHJB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-W566GHJB');
          `,
          }}
        />
      </head>
      <body className={montserrat.variable}>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
