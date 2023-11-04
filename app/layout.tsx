import AllOverlays from './components/AllOverlays'

import UserProvider from './context/user'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'TIK TOK Clone',
  description: 'TikTok clone ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
      <body >
        <AllOverlays/>
        {children}
        
        </body>
      </UserProvider>
     
    </html>
  )
}
