import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Image as ImageIcon,
  Video,
  UserPlus,
  Smile,
  MapPin,
  ListOrdered, // For 'List' option from image
  MoreHorizontal,
  PencilLine
} from 'lucide-react';

interface PostComposerProps {
  className?: string;
  user: {
    name: string;
    avatarUrl: string;
  };
}

const PostComposer: React.FC<PostComposerProps> = ({ className, user }) => {
  const [postText, setPostText] = useState('');

  const actionButtons = [
    { label: 'Photo/Video', icon: ImageIcon, color: 'text-green-500' },
    { label: 'Tag Friends', icon: UserPlus, color: 'text-blue-500' },
    { label: 'Feeling/Activity', icon: Smile, color: 'text-yellow-500' },
    { label: 'Check In', icon: MapPin, color: 'text-red-500' },
    { label: 'List', icon: ListOrdered, color: 'text-orange-500' }, // From image context
  ];

  const topActionButtons = [
    { label: 'Make Post', icon: PencilLine },
    { label: 'Photo/Video Album', icon: ImageIcon },
    { label: 'Live Video', icon: Video },
  ];

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="p-3 border-b">
        <div className="flex space-x-1">
          {topActionButtons.map((action, index) => (
            <Button
              key={action.label}
              variant="ghost"
              className={cn(
                'flex-1 justify-center text-sm font-medium text-muted-foreground hover:bg-accent',
                index === 0 && 'text-primary'
              )}
            >
              <action.icon className="w-5 h-5 mr-2" />
              {action.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder={`What's on your mind, ${user.name.split(' ')[0]}?`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 text-base border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[60px] p-0"
          />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-3 flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap gap-1">
          {actionButtons.map((action) => (
            <Button key={action.label} variant="ghost" className="text-muted-foreground hover:bg-accent text-xs sm:text-sm px-2 sm:px-3 py-1.5 h-auto">
              <action.icon className={cn('w-4 h-4 sm:w-5 sm:h-5 mr-1.5', action.color)} />
              {action.label}
            </Button>
          ))}
           <Button variant="ghost" className="text-muted-foreground hover:bg-accent text-xs sm:text-sm px-2 sm:px-3 py-1.5 h-auto">
              <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
        </div>
        <Button disabled={!postText.trim()} className="text-xs sm:text-sm px-4 py-1.5 h-auto">
          Post
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostComposer;
