import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="Open source dictionary frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-center bg-slate-300 text-blue-500">Hello</h1>
      </main>
    </>
  );
}
