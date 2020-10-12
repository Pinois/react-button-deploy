import React from 'react';
import Icon from './Icon';
import './Button.css';

function Button(props) {
	console.log('props', props);
	const label = props.label || props.children;
	let classes = props.variant ? `btn btn--${props.variant}` : 'btn';
	if (props.disableShadow) {
		classes = `${classes} btn--disableshadow`;
	}
	if (props.size) {
		classes = `${classes} btn--${props.size}`;
	}
	if (props.color) {
		classes = `${classes} btn--${props.color}`;
	}
	return (
		<button className={classes} disabled={props.disabled}>
			{props.startIcon ? <Icon name={props.startIcon} /> : ''}
			{label}
			{props.endIcon ? <Icon name={props.endIcon} align="right" /> : ''}
		</button>
	);
}

export default Button;
