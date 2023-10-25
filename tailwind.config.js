import { withTV } from 'tailwind-variants/transformer';
import config from 'tailwind-config';

/** @type {import('tailwindcss').Config} */
export default withTV({
	...config,
	plugins: [],
});
