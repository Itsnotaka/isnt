import * as React from "react";

import Layout from "../components/Layout";
import useUser from "../libs/useUser";

// Static page generation example, it will generate the page before it gets redirected so you could peek the content
// Make sure to check https://nextjs.org/docs/basic-features/layouts for more info on how to use layouts
export default function Static() {
  // eslint-disable-next-line no-unused-vars
  const { user } = useUser({
    redirectTo: "/login",
  });

  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  );
}
