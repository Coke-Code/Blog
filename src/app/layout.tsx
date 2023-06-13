import './globals.css'

export const metadata = {
  title: '书里总爱写道喜出望外的傍晚 - wissbell',
  description: '这里记录着一个开发者的成长，以及他的一些想法。',
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
