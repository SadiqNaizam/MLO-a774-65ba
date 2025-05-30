import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  PlusCircle,
  BookUser, // Using BookUser for Archive, as Archive icon is not always suitable
  Settings2
} from 'lucide-react';

interface StoryItem {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
  isViewed?: boolean;
}

interface StoriesProps {
  className?: string;
}

const storiesData: StoryItem[] = [
  { id: '1', userName: 'Jane Doe', userAvatarUrl: 'https://i.pravatar.cc/150?u=jane.doe', storyImageUrl: 'https://picsum.photos/seed/story1/200/300', isViewed: true },
  { id: '2', userName: 'John Smith', userAvatarUrl: 'https://i.pravatar.cc/150?u=john.smith', storyImageUrl: 'https://picsum.photos/seed/story2/200/300' },
  { id: '3', userName: 'Alice Wonderland', userAvatarUrl: 'https://i.pravatar.cc/150?u=alice.w', storyImageUrl: 'https://picsum.photos/seed/story3/200/300' },
  { id: '4', userName: 'Bob The Builder', userAvatarUrl: 'https://i.pravatar.cc/150?u=bob.builder', storyImageUrl: 'https://picsum.photos/seed/story4/200/300', isViewed: true },
  { id: '5', userName: 'Charlie Brown', userAvatarUrl: 'https://i.pravatar.cc/150?u=charlie.brown', storyImageUrl: 'https://picsum.photos/seed/story5/200/300' },
];

const Stories: React.FC<StoriesProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="p-4 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Stories</CardTitle>
        <div className="space-x-2">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-accent">
            <BookUser className="w-4 h-4 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-accent">
            <Settings2 className="w-4 h-4 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 pb-3">
            {/* Add Your Story Card */}
            <div className="flex-shrink-0 w-[100px] h-[160px] rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2">
                <PlusCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-xs font-medium text-foreground">Add to Story</p>
              <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">Share a photo, video or write something</p>
            </div>

            {/* Existing Stories */}
            {storiesData.map((story) => (
              <div
                key={story.id}
                className="relative w-[100px] h-[160px] rounded-lg overflow-hidden cursor-pointer group flex-shrink-0"
              >
                <img src={story.storyImageUrl} alt={`${story.userName}'s story`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Avatar className={cn(
                  'absolute top-2 left-2 w-8 h-8 border-2',
                  story.isViewed ? 'border-muted-foreground/50' : 'border-primary'
                )}>
                  <AvatarImage src={story.userAvatarUrl} alt={story.userName} />
                  <AvatarFallback>{story.userName.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <p className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium text-white px-1 truncate">
                  {story.userName}
                </p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Stories;
