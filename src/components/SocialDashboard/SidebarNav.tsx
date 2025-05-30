import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageCircle,
  PlaySquare,
  Store,
  Users,
  Flag,
  CalendarDays,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
  Settings,
  Shield,
  Bookmark
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  count?: number;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, count }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center px-3 py-2.5 text-sm font-medium rounded-md hover:bg-sidebar-accent focus:bg-sidebar-primary',
        isActive ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'text-sidebar-foreground'
      )}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span>{label}</span>
      {count && count > 0 && (
        <span className="ml-auto inline-block px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
          {count}
        </span>
      )}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [showMoreExplore, setShowMoreExplore] = useState(false);
  const [showMoreShortcuts, setShowMoreShortcuts] = useState(false);

  const mainNavItems: NavItemProps[] = [
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageCircle, label: 'Messenger', count: 5 },
    { icon: PlaySquare, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcuts: NavItemProps[] = [
    { icon: Users, label: 'Gaming Group' },
    { icon: Bookmark, label: 'Saved Posts' },
  ];

  const exploreItems: NavItemProps[] = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: HeartHandshake, label: 'Fundraisers' },
    { icon: Shield, label: 'Crisis Response' },
    { icon: Settings, label: 'Settings & Privacy' },
  ];

  const visibleExploreItems = showMoreExplore ? exploreItems : exploreItems.slice(0, 3);
  const visibleShortcuts = showMoreShortcuts ? shortcuts : shortcuts.slice(0, 1);

  return (
    <nav className={cn('w-64 h-screen bg-sidebar text-sidebar-foreground flex flex-col p-4 space-y-2 fixed left-0 top-[60px] overflow-y-auto', className)}>
      <a href="#" className="flex items-center px-3 py-2.5 mb-2 text-sm font-medium rounded-md hover:bg-sidebar-accent">
        <Avatar className="w-8 h-8 mr-3">
          <AvatarImage src="https://i.pravatar.cc/150?u=olenna.mason" alt="Olenna Mason" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <span>Olenna Mason</span>
      </a>
      
      {mainNavItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}

      <Separator className="my-3 bg-sidebar-border" />

      <h3 className="px-3 pt-2 pb-1 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Shortcuts</h3>
      {visibleShortcuts.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
      {shortcuts.length > 1 && (
         <Button variant="ghost" onClick={() => setShowMoreShortcuts(!showMoreShortcuts)} className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
          {showMoreShortcuts ? <ChevronUp className="w-5 h-5 mr-3" /> : <ChevronDown className="w-5 h-5 mr-3" />}
          {showMoreShortcuts ? 'See Less' : 'See More'}
        </Button>
      )}

      <Separator className="my-3 bg-sidebar-border" />

      <h3 className="px-3 pt-2 pb-1 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Explore</h3>
      {visibleExploreItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
      {exploreItems.length > 3 && (
        <Button variant="ghost" onClick={() => setShowMoreExplore(!showMoreExplore)} className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
          {showMoreExplore ? <ChevronUp className="w-5 h-5 mr-3" /> : <ChevronDown className="w-5 h-5 mr-3" />}
          {showMoreExplore ? 'See Less' : 'See More'}
        </Button>
      )}
      
      <div className="mt-auto text-xs text-sidebar-foreground/50 p-3">
        <a href="#" className="hover:underline">Privacy</a> · <a href="#" className="hover:underline">Terms</a> · <a href="#" className="hover:underline">Advertising</a> · <a href="#" className="hover:underline">Ad Choices</a> · <a href="#" className="hover:underline">Cookies</a> · More · Meta © {new Date().getFullYear()}
      </div>
    </nav>
  );
};

export default SidebarNav;
