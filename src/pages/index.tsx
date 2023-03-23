import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { withIronSessionSsr } from "iron-session/next";

import Layout from "../components/Layout";
import { sessionOptions } from "../libs/session";
import { User } from "./api/user";

// Server-side generation page example

export default function Home({
  // eslint-disable-next-line no-unused-vars
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const firstDate = new Date("2/10/2022");
  const secondDate = new Date();
  const timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
  const differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return (
    <>
      <Head>
        <title>Isnt Example</title>
      </Head>
      <Layout>
        <div className="flex h-screen items-center justify-center font-bold">
          <span>
            {`This project was started at February 10th, that's ${differentDays} 
						${differentDays === 1 ? "day" : "days"} before today.`}
          </span>
        </div>
      </Layout>
    </>
  );
}

// eslint-disable-next-line prefer-arrow-callback
export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const { user } = req.session;

  if (user === undefined) {
    res.setHeader("location", "/password");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: { isLoggedIn: false, login: "" } as User,
      },
    };
  }

  return {
    props: { user: req.session.user },
  };
},
sessionOptions);
