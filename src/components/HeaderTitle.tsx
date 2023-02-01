import Head from "next/head";

export default function HeaderTitle() {
  return (
    <Head>
      <title>Fitness App</title>
      <meta name="description" content="NextJS Fitness App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

