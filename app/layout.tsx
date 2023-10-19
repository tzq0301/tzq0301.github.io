import React from "react";

import './globals.css';

export const metadata = {
  title: 'Tong Zhaoqi',
  description: 'Tong Zhaoqi\'s index page',
  icons: {
    icon: '/icon/TZQ-icon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
