import React from 'react';
import IconAddCart from './assets/add-cart.svg';
import IconAnchor from './assets/anchor.svg';
import IconCheck from './assets/check.svg';
import IconDownload from './assets/download.svg';
import IconSearch from './assets/search.svg';
import './Icon.css';

const Icon = props => {
	let icon;
	const style = props.align === 'right' ? 'icon--right' : null;
	switch (props.name) {
		case 'add-cart':
			icon = <img src={IconAddCart} className={style} />;
			break;
		case 'anchor':
			icon = <img src={IconAnchor} className={style} />;
			break;
		case 'check':
			icon = <img src={IconCheck} className={style} />;
			break;
		case 'download':
			icon = <img src={IconDownload} className={style} />;
			break;
		case 'search':
			icon = <img src={IconSearch} className={style} />;
			break;
		default:
			icon = <span />;
			break;
	}
	return icon;
};

export default Icon;
