import './globals.css'

export const metadata = {
  title: '书里总爱写道喜出望外的傍晚 - 网上邻居',
  description: '一个网络邻居记录他的一些想法。',
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
