import './globals.css'
import Providers from '../lib/providers'

export const metadata = {
  title: 'Jawahar T — Portfolio',
  description: 'Blending intelligent systems with exceptional web experiences'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
