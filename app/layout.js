import './globals.css';
import ClientLayout from './components/ClientLayout';

export const metadata = {
  title: 'Samaksh Agarwal | Portfolio',
  description: 'Average curious minded fella who\'s outspoken and always eager to learn new things',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-vscode-bg text-vscode-white font-mono overflow-hidden h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
