import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Product List - Find something for yourself!',
	description:
		'Different products for everyone, generated with random properties and images.  There are unlimited scopes - family, animals, tourisics, home and much more.',
	keywords: 'products, shopping, ecommerce, offers',
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
	alternates: {
		canonical: './',
	},
	robots: 'index, follow',
	openGraph: {},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
