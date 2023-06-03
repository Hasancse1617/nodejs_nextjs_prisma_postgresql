import Footer from "./components/Footer";
import Header from "./components/Header";

function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Header/>
             {children}
          <Footer/>
        </body>
      </html>
    );
}
export default RootLayout;