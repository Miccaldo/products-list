import Link from 'next/link';
import type { IPageLink } from '../types';

export const PageLink: React.FC<IPageLink> = ({ href, active, children, page }) => {
	return (
		<Link title={`Page ${page}`} href={href} className={`mx-3 ${active ? 'font-bold text-blue-600' : ''}`}>
			{children}
		</Link>
	);
};
