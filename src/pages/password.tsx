import * as React from "react";

import Layout from "../components/Layout";
import { Form } from "../components/ui";
import fetchJson, { FetchError } from "../libs/fetchJson";
import useUser from "../libs/useUser";

const Login = () => {
  // Here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = React.useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const body = {
      password: (event.target as any).password.value,
    };

    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }),
      );
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  return (
    <Layout>
      <div className="login">
        <Form
          errorMessage={errorMsg}
          // eslint-disable-next-line func-names
          onSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
};

export default Login;
