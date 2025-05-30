import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Globe,
  Bookmark,
  Edit2,
  Trash2,
  EyeOff
} from 'lucide-react';

export interface PostAuthor {
  name: string;
  avatarUrl: string;
  profileUrl?: string;
}

export interface PostStats {
  likes: number;
  comments: number;
  shares: number;
}

export interface PostData {
  id: string;
  author: PostAuthor;
  timestamp: string; // e.g., "2 hrs ago" or ISO string to be formatted
  privacy: 'public' | 'friends' | 'only_me';
  content?: string;
  imageUrl?: string;
  mapImageUrl?: string; // For map previews like in the example
  location?: string; // e.g. "Raleigh, North Carolina"
  taggedUsers?: PostAuthor[];
  stats: PostStats;
}

interface PostCardProps {
  post: PostData;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.stats.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const PrivacyIcon = Globe; // Default to public, can be conditional

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
              <AvatarFallback>{post.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <a href={post.author.profileUrl || '#'} className="font-semibold text-sm hover:underline">
                {post.author.name}
              </a>
              {post.location && <span className="text-sm text-muted-foreground"> is in <a href="#" className="font-medium text-foreground hover:underline">{post.location}</a></span>}
              <div className="text-xs text-muted-foreground flex items-center">
                <span>{post.timestamp}</span>
                <span className="mx-1">·</span>
                <PrivacyIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem><Bookmark className="mr-2 h-4 w-4" /> Save Post</DropdownMenuItem>
              <DropdownMenuItem><Edit2 className="mr-2 h-4 w-4" /> Edit Post</DropdownMenuItem>
              <DropdownMenuItem><EyeOff className="mr-2 h-4 w-4" /> Hide Post</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive-foreground focus:bg-destructive">
                <Trash2 className="mr-2 h-4 w-4" /> Delete Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-3 space-y-3">
        {post.content && <p className="text-sm text-foreground whitespace-pre-wrap">{post.content}</p>}
        {post.imageUrl && (
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={post.imageUrl} alt="Post image" className="w-full h-auto object-cover" />
          </div>
        )}
        {post.mapImageUrl && (
            <div className="rounded-lg overflow-hidden border border-border">
                <img src={post.mapImageUrl} alt={`Map of ${post.location || 'location'}`} className="w-full h-auto object-cover" />
            </div>
        )}
        {post.location && post.mapImageUrl && (
            <div className="border rounded-lg p-3 flex justify-between items-center">
                <div>
                    <p className="font-medium text-sm">{post.location}</p>
                    <p className="text-xs text-muted-foreground">City · United States</p>
                    {post.taggedUsers && post.taggedUsers.length > 0 && (
                        <p className="text-xs text-muted-foreground">
                            {post.taggedUsers[0].name} and {post.taggedUsers.length -1} others have been here
                        </p>
                    )}
                </div>
                <Button variant="secondary" size="sm">Save</Button>
            </div>
        )}
      </CardContent>
      
      {(likesCount > 0 || post.stats.comments > 0 || post.stats.shares > 0) && (
        <div className="px-4 pb-3 flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            {likesCount > 0 && (
              <>
                <ThumbsUp className="w-4 h-4 text-primary fill-primary" /> 
                <span>{likesCount}</span>
              </>
            )}
          </div>
          <div className="space-x-2">
            {post.stats.comments > 0 && <span>{post.stats.comments} comments</span>}
            {post.stats.shares > 0 && <span>{post.stats.shares} shares</span>}
          </div>
        </div>
      )}

      <Separator className="mx-4" />
      <CardFooter className="p-2">
        <div className="grid grid-cols-3 gap-1 w-full">
          <Button variant="ghost" onClick={handleLike} className={cn('text-muted-foreground hover:bg-accent', liked && 'text-primary')}>
            <ThumbsUp className={cn('w-5 h-5 mr-2', liked && 'fill-primary')} /> Like
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:bg-accent">
            <MessageSquare className="w-5 h-5 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:bg-accent">
            <Share2 className="w-5 h-5 mr-2" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
