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
  PlaySquare,
  Store,
  Users2 as GroupsIcon, // Renamed for clarity, Users2 is for Groups
  PlusCircle,
  MessageCircle, 
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  HelpCircle,
  Moon, // For Dark Mode Toggle example
  Sun // For Dark Mode Toggle example
} from 'lucide-react';

// Example theme hook (replace with your actual theme toggle logic if needed)
// import { useTheme } from 'next-themes'; 

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // const { theme, setTheme } = useTheme(); // Example usage
  const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark'>('light'); // Placeholder for theme state

  const toggleTheme = () => {
    // setTheme(theme === 'light' ? 'dark' : 'light'); // Example usage
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { name: 'Home' as const, icon: Home, href: '#home', active: true },
    { name: 'Find Friends' as const, icon: Users, href: '#friends' },
    { name: 'Watch' as const, icon: PlaySquare, href: '#watch' },
    { name: 'Marketplace' as const, icon: Store, href: '#marketplace' },
    { name: 'Groups' as const, icon: GroupsIcon, href: '#groups' },
  ];

  const currentUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/150?u=olenna.mason',
    profileUrl: '#profile',
  };

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[60px] bg-card px-4 shadow-md border-b border-border', className)}>
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <a href="#home" aria-label="Facebook home">
          <Facebook className="h-10 w-10 text-primary" />
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-9 h-10 w-60 rounded-full bg-secondary border-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Middle Section: Navigation Icons */} 
      <nav className="hidden md:flex flex-1 items-center justify-center space-x-2 max-w-xl">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            asChild
            className={cn(
              'h-12 w-full rounded-lg hover:bg-accent data-[active=true]:text-primary data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=true]:rounded-none',
              item.active ? 'text-primary border-b-2 border-primary rounded-none' : 'text-muted-foreground',
              'flex-1 max-w-[112px]' // Max width for each nav item for better distribution
            )}
          >
            <a href={item.href} data-active={item.active} aria-label={item.name} className="flex items-center justify-center">
              <item.icon className="h-6 w-6" />
            </a>
          </Button>
        ))}
      </nav>

      {/* Right Section: Actions and User Menu */} 
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-foreground">
          <PlusCircle className="h-5 w-5" />
          <span className="sr-only">Create</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-foreground relative">
          <MessageCircle className="h-5 w-5" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 p-0 h-4 min-w-[1rem] text-xs rounded-full flex items-center justify-center">8</Badge>
          <span className="sr-only">Messages</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-foreground relative">
          <Bell className="h-5 w-5" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 p-0 h-4 min-w-[1rem] text-xs rounded-full flex items-center justify-center">36</Badge>
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
              <Avatar className="h-9 w-9">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.substring(0,2).toUpperCase()}</AvatarFallback>
              </Avatar>
              {/* Chevron might be redundant if avatar is clearly a button */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 mt-2">
            <DropdownMenuLabel className="p-0">
              <div className="p-2 m-2 rounded-lg shadow-sm border border-border">
                <a href={currentUser.profileUrl} className="flex items-center space-x-3 py-2 px-2 hover:bg-accent rounded-md">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                    <AvatarFallback>{currentUser.name.substring(0,2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-card-foreground">{currentUser.name}</p>
                    <p className="text-xs text-muted-foreground">See your profile</p>
                  </div>
                </a>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings & Privacy</DropdownMenuItem>
            <DropdownMenuItem><HelpCircle className="mr-2 h-4 w-4" /> Help & Support</DropdownMenuItem>
            <DropdownMenuItem onClick={toggleTheme}>
              {currentTheme === 'light' ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
              Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
