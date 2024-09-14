import { Sen } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/floatingWhatsApp";
//Theme Component
import { ThemeProvider } from "@/components/ThemeProvider";
const Josef = Sen(
  { subsets: ["latin"],
    weight: ["400","500","600", "700"],
    display: "swap"
   }
);

export const metadata = {
  title: 'Xperts Interior',
  description: 'Xperts Interior',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Josef.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
        <Header/>
        {children}
        <Footer/>
        <FloatingWhatsApp/>
        </ThemeProvider>
        </body>
    </html>
  );
}
