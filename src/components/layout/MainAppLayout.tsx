import React from 'react';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The main application layout component.
 * It includes a fixed header and a main content area for page components.
 * This structure ensures a consistent look and feel across the application.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main className={cn('pt-16', className)}>
        {/* The container class centers the content and applies horizontal padding based on tailwind.config.ts */}
        <div className="container py-6 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
