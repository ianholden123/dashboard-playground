import React, { useState } from 'react';
import './layout.css';
import { Header } from 'ui/molecules/header';
import { SideMenu } from 'ui/molecules/sideMenu';
import { Footer } from 'ui/molecules/footer';

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({
  children,
}: LayoutProps) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="container" data-testid="layout">
      <Header
        isMenuToggleOpen={isSideMenuOpen}
        setIsMenuToggleOpen={() => setIsSideMenuOpen(!isSideMenuOpen)}
      />
      <SideMenu open={isSideMenuOpen} />
      <main className="content m-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};
