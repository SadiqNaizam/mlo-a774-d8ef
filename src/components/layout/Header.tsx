import React from 'react';
import { LayoutDashboard, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

/**
 * A fixed application header component.
 * Displays the application title, notification icon, and user avatar.
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur-sm sm:px-6',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <LayoutDashboard className="h-6 w-6 text-primary" />
        <span className="hidden text-lg font-bold tracking-tight text-foreground sm:inline-block">
          Status Dashboard
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
