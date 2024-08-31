import { ToastContainer } from "react-toastify";
import "./globals.css";
import ProviderPage from "./Provider";


export const metadata = {
  title: "TIMU",
  description: "TIMU",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <body >
      <ToastContainer/>

<ProviderPage children={children}/>

  
    </body>
    </html>
  );
}
