'use client';

import { MobileSidebar } from './mobile-sidebar';
import { ThemeToggle } from './theme-toggle';

interface HeaderProps {
  username?: string;
}

export function Header({ username }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-x-4 border-b bg-background px-4 md:px-6">
      <MobileSidebar />

      <div className="flex flex-1 items-center justify-between">
        <div className="hidden md:block">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center gap-x-4 ml-auto">
          {username && (
            <div className="hidden sm:block text-sm text-muted-foreground">
              Welcome, <span className="font-medium text-foreground">{username}</span>
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
