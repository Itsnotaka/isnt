import Button from './Button';

export default function Form({
	errorMessage,
	onSubmit,
}: {
	errorMessage: string;
	// eslint-disable-next-line no-unused-vars
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<form onSubmit={onSubmit}>
			<div className="flex flex-col">
				<span className="font-semibold dark:text-white">
					Enter the secret password (spell out the word "password")
				</span>
				<div className="relative my-5 flex items-center">
					<input
						type="text"
						name="password"
						id="password"
						className="block w-full rounded-md border-gray-300 pr-12 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
						<kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
							Enter ↵
						</kbd>
					</div>
				</div>

				<Button text="Login" />

				{errorMessage && (
					<p className="my-0 mt-[1rem] mb-0 font-semibold text-pink-300">
						{errorMessage}
					</p>
				)}
			</div>
		</form>
	);
}
