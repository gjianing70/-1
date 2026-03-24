export const metadata = {
  title: 'My Application',
  description: 'This is my application layout',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}