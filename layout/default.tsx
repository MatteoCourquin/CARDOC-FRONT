import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Sample from '@/components/Sample';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex h-screen">
        <NavBar />
        <main className="min-h-screen w-full py-2 pr-2">
          <div className="h-full w-full rounded-xl bg-blue-100 p-4">
            <Header />
            {children}
          </div>
        </main>
      </div>
      <Sample />
    </>
  );
};

export default Layout;
