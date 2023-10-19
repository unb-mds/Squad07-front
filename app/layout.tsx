import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Logo from '../assets/svgs/logobranca.svg'; // Importe a imagem
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LicitaX',
  description: 'Generated by create next app',
};

// Interface para tipar as props do Layout
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Barra de cabeçalho personalizável */}
      <header style={{ background: '#222831', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
          <div>
            {/* Logo personalizável */}
            <img src={Logo} alt="Logo" style={{ maxWidth: '100px' }} />
          </div>
          <div>
            {/* Botões personalizáveis */}
            <button style={{ color: '#EEEEE', marginRight: '10px' }}>Home</button>
            <button style={{ color: '#EEEEE', marginRight: '10px' }}>Sobre</button>
            <button style={{ color: '#EEEEE' }}>GitHub</button>
          </div>
        </div>
      </header>

      {/* Barra lateral personalizável */}
      <aside style={{ background: '#00ADB5', width: '250px', position: 'fixed', top: '60px', bottom: '0' }}>
        {/* Conteúdo da barra lateral aqui */}
        {/* Substitua por seus próprios componentes ou conteúdo */}
      </aside>

      <main style={{ marginLeft: '250px', padding: '16px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
