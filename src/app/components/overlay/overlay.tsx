import type { IOverlay } from './types';
import { createPortal } from 'react-dom';

export const Overlay: React.FC<IOverlay> = ({ onClick }) => {
	return createPortal(
		<div className="fixed bg-black opacity-40 top-0 left-0 h-full w-full z-[9] flex" onClick={onClick}></div>,
		document.body
	);
};
