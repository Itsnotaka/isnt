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
						className="block border w-full rounded-md border-gray-300 py-2 px-3 text-black shadow-md focus:outline-none sm:text-sm"
					/>
					<div className="absolute inset-y-0 right-0 flex p-1">
						<kbd className="inline-flex items-center rounded border border-opacity-50 border-gray-200 p-2 px-2 font-sans text-sm font-medium text-gray-400">
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
