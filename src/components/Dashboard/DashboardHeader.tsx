import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between pb-6">
      <h1 className="text-xl font-bold tracking-widest text-foreground uppercase">
        Weekly Status Dashboard
      </h1>
      <div className="flex items-center space-x-3 text-sm">
        <span className="text-muted-foreground hidden sm:inline">ENTER START DATE &rarr;</span>
        <div className="bg-card px-3 py-1.5 rounded-md border border-border">
          <span className="font-semibold text-foreground">06/19/2024</span>
        </div>
        <span className="text-muted-foreground">THROUGH</span>
        <div className="bg-card px-3 py-1.5 rounded-md border border-border">
          <span className="font-semibold text-foreground">06/25/2024</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
