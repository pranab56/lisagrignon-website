"use client";

import { usePathname } from 'next/navigation';
import Footer from '../components/reusable/Footer';
import Navbar from '../components/reusable/Navber';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith('/auth');
  const isdashboardRoute = pathname?.startsWith('/my-dashboard');

  return (
    <>
      {!isAuthRoute || !isdashboardRoute && <Navbar />}
      {children}
      {!isAuthRoute || !isdashboardRoute && <Footer />}
    </>
  );
}
export default LayoutContent;