import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PostComposer from '@/components/SocialDashboard/PostComposer';
import PostCard, { PostData, PostAuthor } from '@/components/SocialDashboard/PostCard';

// Define user data for PostComposer (current logged-in user)
const currentUserForComposer = {
  name: 'Olenna Mason',
  avatarUrl: 'https://i.pravatar.cc/150?u=olenna.mason',
};

// Define dummy post data for PostCard list
const postsData: PostData[] = [
  {
    id: 'post1',
    author: {
      name: 'Olenna Mason',
      avatarUrl: 'https://i.pravatar.cc/150?u=olenna.mason',
      profileUrl: '#olenna.mason',
    },
    timestamp: 'Just now',
    privacy: 'friends' as const,
    content: 'Excited to share my new project with everyone! It\'s a social dashboard UI built with React, TypeScript, and Tailwind CSS. What do you think? #react #tailwindcss #uidev',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    stats: { likes: 22, comments: 5, shares: 2 },
  },
  {
    id: 'post2',
    author: {
      name: 'Julia Fillory',
      avatarUrl: 'https://i.pravatar.cc/150?u=julia.fillory',
      profileUrl: '#julia.fillory',
    },
    timestamp: '2 hrs ago',
    privacy: 'public' as const,
    content: 'Checking out some new stores downtown!',
    location: 'Raleigh, North Carolina',
    mapImageUrl: 'https://picsum.photos/seed/raleighmap/600/350', 
    taggedUsers: [
      { name: 'Bryan Durand', avatarUrl: 'https://i.pravatar.cc/40?u=bryan.d', profileUrl: '#bryan.d' },
      { name: 'Anna Lee', avatarUrl: 'https://i.pravatar.cc/40?u=anna.l', profileUrl: '#anna.l' },
    ],
    stats: { likes: 78, comments: 12, shares: 5 },
  },
  {
    id: 'post3',
    author: {
      name: 'David Miller',
      avatarUrl: 'https://i.pravatar.cc/150?u=david.miller',
      profileUrl: '#david.miller',
    },
    timestamp: '5 hrs ago',
    privacy: 'public' as const,
    content: 'Just finished a great hike! The views were amazing. Highly recommend this trail. ⛰️☀️ #hiking #nature #adventure',
    imageUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    stats: { likes: 156, comments: 34, shares: 18 },
  },
  {
    id: 'post4',
    author: {
      name: 'Sophia Chen',
      avatarUrl: 'https://i.pravatar.cc/150?u=sophia.chen',
      profileUrl: '#sophia.chen',
    },
    timestamp: 'Yesterday at 8:00 PM',
    privacy: 'friends' as const,
    content: 'Happy Birthday to my dear friend @MarkJohnson! 🎉 Wishing you all the best. It was great celebrating with you last night. Hope you have a fantastic year ahead!',
    stats: { likes: 42, comments: 8, shares: 1 },
  },
];

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <PostComposer user={currentUserForComposer} />
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </MainAppLayout>
  );
};

export default IndexPage;
