import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus } from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  members: number;
  imageUrl: string;
  category?: string;
}

interface SuggestedGroupsProps {
  className?: string;
}

const suggestedGroupsData: GroupSuggestion[] = [
  {
    id: '1',
    name: 'Mad Men (MADdicts)',
    members: 6195,
    imageUrl: 'https://picsum.photos/seed/madmen/400/200',
    category: 'TV Show Fan Club'
  },
  {
    id: '2',
    name: 'Dexter Morgan Fans',
    members: 6984,
    imageUrl: 'https://picsum.photos/seed/dexter/400/200',
    category: 'TV Show Fan Club'
  },
  {
    id: '3',
    name: 'React Developers Community',
    members: 12050,
    imageUrl: 'https://picsum.photos/seed/reactdev/400/200',
    category: 'Technology'
  },
  {
    id: '4',
    name: 'Local Hiking Adventures',
    members: 850,
    imageUrl: 'https://picsum.photos/seed/hiking/400/200',
    category: 'Outdoor Activities'
  },
];

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="p-4 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Suggested Groups</CardTitle>
        <Button variant="link" className="text-sm text-primary hover:underline px-0 h-auto py-0">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        {suggestedGroupsData.slice(0, 2).map((group) => ( // Displaying only first 2 as per image example
          <div key={group.id} className="border border-border rounded-lg overflow-hidden">
            <div className="relative h-24 bg-muted-foreground">
              <img src={group.imageUrl} alt={`${group.name} cover`} className="w-full h-full object-cover" />
              {/* Small avatars overlay, example of stacked avatars if needed */}
              <div className="absolute bottom-2 left-2 flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <Avatar key={i} className="w-6 h-6 border-2 border-card rounded-full">
                    <AvatarImage src={`https://i.pravatar.cc/40?u=groupmember${group.id}-${i}`} />
                    <AvatarFallback>{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-sm hover:underline cursor-pointer">{group.name}</h4>
              <p className="text-xs text-muted-foreground">{group.members.toLocaleString()} members</p>
              {group.category && <p className="text-xs text-muted-foreground">{group.category}</p>}
              <Button variant="secondary" className="w-full mt-2 h-8 text-sm">
                <UserPlus className="w-4 h-4 mr-2" /> Join Group
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
