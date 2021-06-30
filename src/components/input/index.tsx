import React from 'react';
import CustomInput from './styles';

export default function Button(label: string, value: string): JSX.Element {
	return (
		<CustomInput aria-label={label} value={value} />
	);
}