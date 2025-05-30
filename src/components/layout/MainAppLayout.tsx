import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';
import Stories from '../SocialDashboard/Stories'; 
import SuggestedGroups from '../SocialDashboard/SuggestedGroups';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const RightSidebar: React.FC = () => {
  return (
    <aside 
      className={cn(
        "fixed top-[60px] right-0 h-[calc(100vh-60px)] w-[320px]", // Sizing and positioning
        "bg-background", // Per layout requirements, overall bg, not card
        "overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-transparent", // Custom scrollbar styling
        "p-4 flex flex-col gap-6 border-l border-border z-30" // Internal layout and border
      )}
    >
      <Stories /> 
      <SuggestedGroups />
    </aside>
  );
};

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Header />
      <Sidebar /> 
      <main 
        className={cn(
          "ml-64",         // Offset for fixed left sidebar (w-64 = 256px)
          "mr-[320px]",    // Offset for fixed right sidebar (w-[320px])
          "pt-[60px]",     // Offset for fixed header (h-[60px])
          "h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-transparent" // Make main content area scrollable and fill height, with custom scrollbar
        )}
      >
        {/* This inner div applies the p-6 and flex col gap for the main content's children */}
        <div className="p-6 flex flex-col gap-6">
          {children}
        </div>
      </main>
      <RightSidebar />
    </div>
  );
};

export default MainAppLayout;
