import Header from '../../../components/dashboard/organizer/Header';
import { AppSidebar } from '../../../components/dashboard/organizer/Sidebar';
import { SidebarInset, SidebarProvider } from '../../../components/ui/sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <AuthGuard>
    // <CrossTabLogoutHandler />
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-gray-100 h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-auto min-w-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
    // </AuthGuard>
  );
}
