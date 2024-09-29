import React from 'react';
import { ClerkProvider, GoogleOneTap } from '@clerk/nextjs';
import './globals.css';

// Metadata
export const metadata = {
  title: 'Code Bounty with Google One Tap',
  description: 'A platform integrating Google One Tap with Clerk for authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="antialiased">
        <ClerkProvider>
          {/* Google One Tap */}
          <GoogleOneTap />
          {/* Application content */}
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
