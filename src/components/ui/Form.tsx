import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/Label";

import { Button } from "./Button";

const Form = ({
  errorMessage,
  onSubmit,
}: {
  errorMessage: string;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col">
        <span className="font-semibold dark:text-white">
          {`Enter the secret password (spell out the word "password")`}
        </span>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <Button variant="outline">Button</Button>

        {errorMessage && (
          <p className="my-0 mt-[1rem] font-semibold text-pink-300">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
};

export { Form };
