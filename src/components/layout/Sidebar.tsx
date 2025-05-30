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
  Bookmark,
  Gamepad2, // For FarmVille 2 or generic game icon
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
        'flex items-center px-3 py-2.5 text-sm font-medium rounded-md hover:bg-sidebar-accent focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:bg-sidebar-primary',
        isActive ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'text-sidebar-foreground'
      )}
    >
      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
      <span className="flex-grow truncate">{label}</span>
      {count !== undefined && count > 0 && (
        <span className="ml-2 inline-block px-2 py-0.5 text-xs font-semibold bg-destructive text-destructive-foreground rounded-full">
          {count}
        </span>
      )}
    </a>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [showMoreExplore, setShowMoreExplore] = useState(false);
  const [showMoreShortcuts, setShowMoreShortcuts] = useState(false);

  const currentUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/150?u=olenna.mason',
    profileUrl: '#profile',
  };

  const mainNavItems: NavItemProps[] = [
    { icon: Newspaper, label: 'News Feed', isActive: true, href: '#newsfeed' },
    { icon: MessageCircle, label: 'Messenger', count: 5, href: '#messenger' },
    { icon: PlaySquare, label: 'Watch', href: '#watch' },
    { icon: Store, label: 'Marketplace', href: '#marketplace' },
  ];

  const shortcuts: NavItemProps[] = [
    { icon: Gamepad2, label: 'FarmVille 2', href: '#farmville2' },
    { icon: Users, label: 'Gaming Group', href: '#gaminggroup' },
    { icon: Bookmark, label: 'Saved Posts', href: '#savedposts' },
    { icon: Flag, label: 'My Page Example', href: '#mypage' },
  ];

  const exploreItems: NavItemProps[] = [
    { icon: CalendarDays, label: 'Events', href: '#events' },
    { icon: Flag, label: 'Pages', href: '#pages' },
    { icon: Users, label: 'Groups', href: '#groups' },
    { icon: HeartHandshake, label: 'Fundraisers', href: '#fundraisers' },
    { icon: Shield, label: 'Crisis Response', href: '#crisisresponse' },
    { icon: Settings, label: 'Settings & Privacy', href: '#settings' },
  ];
  
  const INITIAL_SHORTCUTS_VISIBLE = 1;
  const INITIAL_EXPLORE_VISIBLE = 4;

  const visibleShortcuts = showMoreShortcuts ? shortcuts : shortcuts.slice(0, INITIAL_SHORTCUTS_VISIBLE);
  const visibleExploreItems = showMoreExplore ? exploreItems : exploreItems.slice(0, INITIAL_EXPLORE_VISIBLE);

  return (
    <aside className={cn(
        'w-64 bg-sidebar text-sidebar-foreground flex flex-col fixed left-0 top-[60px] h-[calc(100vh-60px)] border-r border-sidebar-border shadow-lg z-40',
        className
      )}
    >
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        <a 
          href={currentUser.profileUrl} 
          className="flex items-center px-3 py-2.5 mb-1 text-sm font-medium rounded-md hover:bg-sidebar-accent focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:bg-sidebar-primary text-sidebar-foreground"
        >
          <Avatar className="w-8 h-8 mr-3 flex-shrink-0">
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.substring(0,2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-semibold truncate">{currentUser.name}</span>
        </a>
        
        {mainNavItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}

        <Separator className="my-2 bg-sidebar-border" />

        <h3 className="px-3 pt-1 pb-0.5 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Shortcuts</h3>
        {visibleShortcuts.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        {shortcuts.length > INITIAL_SHORTCUTS_VISIBLE && (
           <Button 
              variant="ghost" 
              onClick={() => setShowMoreShortcuts(!showMoreShortcuts)} 
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:bg-sidebar-primary text-sm py-2.5 px-3"
            >
            {showMoreShortcuts ? <ChevronUp className="w-5 h-5 mr-3 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 mr-3 flex-shrink-0" />}
            {showMoreShortcuts ? 'See Less' : `See More`}
          </Button>
        )}

        <Separator className="my-2 bg-sidebar-border" />

        <h3 className="px-3 pt-1 pb-0.5 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Explore</h3>
        {visibleExploreItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        {exploreItems.length > INITIAL_EXPLORE_VISIBLE && (
          <Button 
            variant="ghost" 
            onClick={() => setShowMoreExplore(!showMoreExplore)} 
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:bg-sidebar-primary text-sm py-2.5 px-3"
          >
            {showMoreExplore ? <ChevronUp className="w-5 h-5 mr-3 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 mr-3 flex-shrink-0" />}
            {showMoreExplore ? 'See Less' : `See More`}
          </Button>
        )}
      </div>
      
      <div className="p-3 border-t border-sidebar-border text-xs text-sidebar-foreground/60 text-center">
        <a href="#privacy" className="hover:underline">Privacy</a> &middot; 
        <a href="#terms" className="hover:underline">Terms</a> &middot; 
        <a href="#cookies" className="hover:underline">Cookies</a> &middot; 
        Meta &copy; {new Date().getFullYear()}
      </div>
    </aside>
  );
};

export default Sidebar;
