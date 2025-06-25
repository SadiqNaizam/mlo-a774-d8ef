import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The main application layout component.
 * It provides a consistent structure for page content.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <main className={cn(className)}>
        {/* The container class centers the content and applies horizontal padding based on tailwind.config.ts */}
        <div className="container py-6 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;