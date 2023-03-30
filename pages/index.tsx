import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useTheme } from "@/hooks/useTheme";
import Head from "next/head";

export default function Home() {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="Open source dictionary frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${theme.isDarkTheme && "dark"}
         ${theme.fontFamily === "serif" && "font-serif"} 
         ${theme.fontFamily === "sans" && "font-sans"} 
         ${theme.fontFamily === "mono" && "font-mono"} 
         container mx-auto text-neutral-800`}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <SearchBar defaultWord="test word" onSubmit={(e) => console.log(e)} />
      </main>
    </>
  );
}
