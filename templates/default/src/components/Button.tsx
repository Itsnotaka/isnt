import React from 'react';

export default function Button({ text }: { text: string }) {
	return (
		<button
			className="group relative inline-block text-sm font-medium text-black hover:animate-pulse focus:outline-none focus:ring dark:text-white"
			type="submit"
		>
			<span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-black transition-transform group-hover:translate-y-0 group-hover:translate-x-0 dark:bg-white"></span>

			<span className="relative block border border-current px-8 py-3 text-white active:text-violet-400 dark:bg-black">
				{text}
			</span>
		</button>
	);
}
