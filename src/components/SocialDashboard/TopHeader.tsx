import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  Home,
  Users,
  PlaySquare, // Corresponds to 'Watch'
  Store,      // Corresponds to 'Marketplace'
  Users2,     // Corresponds to 'Groups'
  PlusCircle,
  MessageCircle, // Or MessageSquare, depending on style preference
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  HelpCircle
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const navItems = [
    { name: 'Home' as const, icon: Home, href: '#', active: true },
    { name: 'Find Friends' as const, icon: Users, href: '#' },
    { name: 'Watch' as const, icon: PlaySquare, href: '#' },
    { name: 'Marketplace' as const, icon: Store, href: '#' },
    { name: 'Groups' as const, icon: Users2, href: '#' },
  ];

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[60px] bg-card px-4 shadow-md', className)}>
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <a href="#" aria-label="Facebook home">
          <Facebook className="h-10 w-10 text-primary" />
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-9 h-10 w-60 rounded-full bg-secondary border-none focus-visible:ring-primary focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Middle Section: Navigation Icons */} 
      <nav className="hidden md:flex items-center space-x-2">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            asChild
            className={cn(
              'h-12 w-24 rounded-lg hover:bg-accent data-[active=true]:text-primary data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=true]:rounded-b-none',
              item.active ? 'text-primary border-b-2 border-primary rounded-b-none' : 'text-muted-foreground'
            )}
          >
            <a href={item.href} data-active={item.active} aria-label={item.name}>
              <item.icon className="h-6 w-6" />
            </a>
          </Button>
        ))}
      </nav>

      {/* Right Section: Actions and User Menu */} 
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-foreground">
          <PlusCircle className="h-5 w-5" />
          <span className="sr-only">Create</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-foreground relative">
          <MessageCircle className="h-5 w-5" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 p-0.5 h-4 min-w-[1rem] text-xs rounded-full flex items-center justify-center">8</Badge>
          <span className="sr-only">Messages</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-foreground relative">
          <Bell className="h-5 w-5" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 p-0.5 h-4 min-w-[1rem] text-xs rounded-full flex items-center justify-center">36</Badge>
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://i.pravatar.cc/150?u=olenna.mason" alt="Olenna Mason" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground sr-only" /> 
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel>
              <div className="flex items-center space-x-3 py-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://i.pravatar.cc/150?u=olenna.mason" alt="Olenna Mason" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">Olenna Mason</p>
                  <p className="text-xs text-muted-foreground">See your profile</p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings & Privacy</DropdownMenuItem>
            <DropdownMenuItem><HelpCircle className="mr-2 h-4 w-4" /> Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
