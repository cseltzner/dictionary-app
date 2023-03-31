import Wave from "@/components/Illustrations/Wave";
import SearchBar from "@/components/SearchBar/SearchBar";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onSearch = (searchWord: string) => {
    if (!searchWord) {
      return;
    }

    router.push(`/${searchWord}`);
  };

  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="Open source dictionary frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wave className="absolute -inset-48 top-28 opacity-60 -z-10" />
      <div className="mb-12">
        <div className="pt-10">
          <h1 className="text-neutral-900 font-bold tracking-wider">
            <span className="md:text-2xl">Seltzner's Dictionary of </span>
            <span className="block text-2xl md:text-5xl mt-3">
              English Language & Vernacular
            </span>
          </h1>
        </div>

        <div className="mt-16">
          <SearchBar
            onSubmit={(word) => {
              onSearch(word);
            }}
            placeholder={"Search for a word..."}
          />
        </div>
        <div>
          <p className="tracking-wide mt-2 ml-1">
            Try{" "}
            <Link
              href="/keyboard"
              className="text-blue-700 hover:underline hover:text-blue-500"
            >
              Keyboard
            </Link>
            {", "}
            <Link
              href="/action"
              className="text-blue-700 hover:underline hover:text-blue-500"
            >
              Action
            </Link>
            {", "}
            <Link
              href="/component"
              className="text-blue-700 hover:underline hover:text-blue-500"
            >
              Component
            </Link>
            {"..."}
          </p>
        </div>
        <Link
          href="/vestigial"
          className="block mt-32 max-w-[70ch] hover:text-purple-900 transition-all"
        >
          <h3 className="tracking-tight mb-8 text-lg underline underline-offset-8">
            Word of the Day
          </h3>
          <p className="text-3xl">Vestigial</p>
          <ul className="mt-4 ml-12 list-disc marker:text-primary">
            <li>
              A small, degenerate, or imperfectly developed part or organ which
              has been more fully developed in some past generation.
            </li>
          </ul>
        </Link>
        <Link
          href="/"
          className="inline-block mt-16 rounded-full px-8 py-3 bg-gradient-to-br from-primary  to-blue-400 text-white"
        >
          Discover
        </Link>
      </div>
    </>
  );
}
