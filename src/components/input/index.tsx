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
}

const Input: React.FC<InputProps> = ({
	name,
	onChange,
	defaultValue,
	containerStyle = {},
	icon: Icon,
	title = '',
	...rest
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	/* const { fieldName, defaultValue, error } = useField(name); */

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);

		/* setIsFilled(!!inputRef.current?.value); */
	}, []);

	/* useEffect(() => {
		registerField({
			name: fieldName,
			path: 'value',
		});
	}, [fieldName]);
 */
	const handleInputChange = (evt: any) => {
		onChange(evt?.target?.value, evt?.target?.name);
	};

	return (
		<CustomInput
			style={containerStyle}
			/* isErrored={!!error} */
			isFilled={isFilled}
			isFocused={isFocused}
		>
			{Icon && <Icon title={title} size={20} />}
			<input
				name={name}
				onChange={handleInputChange}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				defaultValue={defaultValue}
				{...rest}
			/>

			{/* {error && (
				<Error title={error}>
					<FiAlertCircle color="#c53030" size={20} />
				</Error>
			)} */}
		</CustomInput>
	);
};

export default Input;
