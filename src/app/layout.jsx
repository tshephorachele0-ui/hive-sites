import '../styles/globals.css'

export const metadata = {
  title: 'Portfolio - Tshepho Rachele',
  description: 'Professional portfolio and e-business website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
