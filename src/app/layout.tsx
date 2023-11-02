import type { Metadata } from 'next';
import layout from './layout.module.scss';
import { Montserrat } from 'next/font/google';
import './variables.scss';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { FavouritesContextProvider } from '@/contexts/FavoritesContextProvider';
import { CartContextProvider } from '@/contexts/CartContextProvider';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './globals.scss';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nice Gadgets Store',
  description: 'Made by NekoScript Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mont.className}>
        <FavouritesContextProvider>
          <CartContextProvider>
          <Header />
          <ToastContainer
            position="top-right"
            autoClose={false}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <main className={layout.main}>
            {children}
          </main>
          </CartContextProvider>
        </FavouritesContextProvider>
        <Footer />
      </body>
    </html>
  );
}
