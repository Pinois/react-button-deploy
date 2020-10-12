import React from 'react';

import './style.css';

import Button from './Button';

function App() {
	const button1 = '<Button />';
	const button2 = '<Button variant="outline" />';
	const button3 = '<Button variant="text" />';
	const button4 = '<Button disableShadow />';
	const button5 = '<Button disabled />';
	const button6 = '<Button startIcon="add-cart" />';
	const button7 = '<Button endIcon="add-cart" />';
	const button8 = '<Button size="sm" />';
	const button9 = '<Button size="md" />';
	const button10 = '<Button size="lg" />';
	const button11 = '<Button color="default" />';
	const button12 = '<Button color="primary" />';
	const button13 = '<Button color="secondary" />';
	const button14 = '<Button color="danger" />';
	return (
		<main>
			<h1>Button component</h1>
			{button1}
			<Button>Default button</Button>
			<br />
			{button2}
			<Button variant="outline">Variant outline</Button>
			<br />
			{button3}
			<Button variant="text">Variant text</Button>
			<br />
			{button4}
			<Button disableShadow>Disabled Shadow</Button>
			<br />
			{button5}
			<Button disabled>Disabled</Button>
			<br />
			{button6}
			<Button startIcon="add-cart">Add Cart</Button>
			<br />
			{button7}
			<Button endIcon="download">Download</Button>
			<br />
			<div className="container">
				<div>
					{button8}
					<Button size="sm">Small</Button>
				</div>
				<div>
					{button9}
					<Button size="md">Medium</Button>
				</div>
				<div>
					{button10}
					<Button size="lg">Large</Button>
				</div>
			</div>
			<div className="container">
				<div>
					{button11}
					<Button color="default">Default color</Button>
				</div>
				<div>
					{button12}
					<Button color="primary">Primary Color</Button>
				</div>
				<div>
					{button13}
					<Button color="secondary">Secondary Color</Button>
				</div>
				<div>
					{button14}
					<Button color="danger">Danger Color</Button>
				</div>
			</div>

			<br />
		</main>
	);
}

export default App;
