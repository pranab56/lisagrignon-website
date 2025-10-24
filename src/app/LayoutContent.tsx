"use client";

import { usePathname } from 'next/navigation';
import Footer from '../components/reusable/Footer';
import Navbar from '../components/reusable/Navber';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith('/auth');

  return (
    <>
      {!isAuthRoute && <Navbar />}
      {children}
      {!isAuthRoute && <Footer />}
    </>
  );
}


export default LayoutContent;