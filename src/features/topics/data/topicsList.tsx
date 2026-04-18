import { type ReactNode } from 'react';

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export const topicsList: Topic[] = [
  {
    id: 'career',
    title: 'Career & Ambition',
    description: 'Is this the right path? Finding fulfillment, navigating workplace dynamics, and planning your next big leap.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path>
      </svg>
    ),
  },
  {
    id: 'love',
    title: 'Love & Relationships',
    description: 'Navigating connections, finding clarity in partnerships, and cultivating deep self-love.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
      </svg>
    ),
  },
  {
    id: 'health',
    title: 'Health & Body',
    description: 'Nurturing physical wellness, building strength, and finding peace with your vitality.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5v5.625c0 .621.504 1.125 1.125 1.125H18a1.125 1.125 0 001.125-1.125V10.5m-14.625 0V8.25m0 2.25c0 .621-.504 1.125-1.125 1.125H3m14.625-2.25v-2.25c0-.621-.504-1.125-1.125-1.125H5.625c-.621 0-1.125.504-1.125 1.125v2.25m14.625 0h.375c.621 0 1.125-.504 1.125-1.125v-2.25c0-.621-.504-1.125-1.125-1.125H21"></path>
      </svg>
    ),
  },
  {
    id: 'money',
    title: 'Money & Security',
    description: 'Building financial confidence, long-term planning, and achieving peace of mind.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
      </svg>
    ),
  },
  {
    id: 'self',
    title: 'Self & Identity',
    description: 'Rediscovering your true self, clarifying your core values, and understanding your purpose.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
      </svg>
    ),
  },
  {
    id: 'home',
    title: 'Home & Lifestyle',
    description: 'Creating a safe, aesthetically pleasing space that supports your growth and daily joy.',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
      </svg>
    ),
  }
];