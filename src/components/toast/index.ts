import { toast, ToastOptions } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const options: ToastOptions = {
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};
export function success_message(message: string): void {
	toast.success(message, options);
}

export function info_message(message: string): void {
	toast.info(message, options);
}

export function warning_message(message: string): void {
	toast.warning(message, options);
}

export function error_message(message: string): void {
	toast.error(message, options);
}
