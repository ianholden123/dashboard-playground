import React, { useState } from 'react';
import './layout.css';
import { Header } from '../../components/header/Header';
import { SideMenu } from '../../components/sideMenu/SideMenu';
import { Footer } from '../../components/footer/Footer';

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({
  children,
}: LayoutProps) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const menuItems = [
    'Menu Item 1',
    'Menu Item 2',
    'Menu Item 3',
  ];

  return (
    <div className="container" data-testid="layout">
      <Header
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={() => setIsSideMenuOpen(!isSideMenuOpen)}
      />
      <SideMenu menuItems={menuItems} open={isSideMenuOpen} />
      <main className="content m-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};
