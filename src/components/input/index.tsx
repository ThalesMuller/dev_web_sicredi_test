import React, {
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState,
	useCallback,
} from 'react';
import CustomInput, { Error } from './styles';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	onChange: any;
	defaultValue: any;
	// eslint-disable-next-line @typescript-eslint/ban-types
	containerStyle?: object;
	icon: React.ComponentType<IconBaseProps>;
	disabled?: boolean;
	error?: string;
}

const Input: React.FC<InputProps> = ({
	name,
	onChange,
	defaultValue,
	containerStyle = {},
	icon: Icon,
	title = '',
	disabled = false,
	error = '',
	...rest
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	const handleInputChange = (evt: any) => {
		onChange(evt?.target?.value, evt?.target?.name);
	};

	return (
		<CustomInput
			style={containerStyle}
			isErrored={!!error?.length}
			isFilled={isFilled}
			isFocused={isFocused}
			isDisabled={disabled}
		>
			{Icon && <Icon title={title} size={20} />}
			<input
				disabled={disabled}
				name={name}
				onChange={handleInputChange}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				defaultValue={defaultValue}
				{...rest}
			/>

			{error && (
				<Error title={error}>
					<FiAlertCircle color="#c53030" size={20} />
				</Error>
			)}
		</CustomInput>
	);
};

export default Input;
