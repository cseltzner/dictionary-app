import { fetchWordDef } from "@/components/api/fetchWordDef";
import { parseWordResponse } from "@/components/api/parseWordResponse";
import { WordInterface } from "@/components/interfaces/wordInterface";
import SearchBar from "@/components/SearchBar/SearchBar";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const WordPage = () => {
  const router = useRouter();
  const wordQuery = router.query.word as string;

  const [wordObject, setWordObject] = useState<
    WordInterface | undefined | null
  >();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title =
      wordQuery && wordQuery[0].toUpperCase() + wordQuery.slice(1); // Capitalized title
    setIsLoading(true);
    fetchWordDef(wordQuery)?.then((res) => {
      res.json().then((value) => {
        const parsedWordObject = parseWordResponse(value);

        if (!parsedWordObject) {
          setWordObject(null);
          setIsLoading(false);
          return;
        }

        setWordObject(parsedWordObject);
        setIsLoading(false);
      });
    });
  }, [wordQuery]);

  const onSearch = (searchWord: string) => {
    if (!searchWord) {
      return;
    }

    router.push(`/${searchWord}`);
  };

  function returnValue() {
    // Word not found state
    if (wordObject === null) {
      return (
        <div className="py-12 flex flex-col items-center">
          <SearchBar
            onSubmit={(searchWord) => onSearch(searchWord)}
            defaultWord={wordQuery}
          />
          <p className="pt-12 text-2xl">
            The word{" "}
            <span className="text-primary dark:text-purple-300 italic">
              {wordQuery}
            </span>{" "}
            not found!
          </p>
          <p className="mt-8 text-lg">
            Please check your spelling or try another word.
          </p>
          <Link
            href="/"
            className="inline-block mt-16 rounded-full px-8 py-3 bg-gradient-to-br from-primary  to-blue-400 text-white transition hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      );
    }

    // Loading state
    if (wordObject === undefined) {
      return (
        <div className="py-12 flex flex-col items-center">
          <SearchBar
            onSubmit={(searchWord) => onSearch(searchWord)}
            defaultWord={wordQuery}
          />
          {/* Simple and boring loading state but the API loads very fast */}
          <p>Loading...</p>
        </div>
      );
    }

    // Word found successfully state
    return (
      <div className="py-12 flex flex-col items-center">
        <SearchBar
          onSubmit={(searchWord) => onSearch(searchWord)}
          defaultWord={wordQuery}
        />
        <div className="py-24 w-full">
          <h1 className="font-bold text-6xl tracking-wide">
            {wordObject.word}
          </h1>
          <p className="my-6 text-primary text-xl font-bold">
            {wordObject.phonetics.text || wordObject.meanings[0].partOfSpeech}
          </p>
          <div>
            {wordObject.meanings.map((meaning, index) => {
              return (
                <div className="[&:not(:first-child)]:mt-12" key={index}>
                  <p className="italic font-bold text-2xl mt-6">
                    {meaning.partOfSpeech}
                  </p>
                  <h3 className="mt-4 text-lg text-neutral-500">Meaning</h3>
                  <ul className="mt-8 max-w-[70ch]">
                    {meaning.definitions.map((definition, index) => {
                      return (
                        <li
                          className="mt-6 ml-8 list-disc marker:text-primary"
                          key={index}
                        >
                          {definition.definition}
                          {definition.example && (
                            <p className="mt-2 ml-2">
                              <span className="text-primary text-sm">
                                Example:{" "}
                              </span>
                              <span className="ml-2">
                                &quot;{definition.example}&quot;
                              </span>
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  {meaning.synonyms[0] && (
                    <p className="mt-16">
                      <span className="text-neutral-500">Synonyms:</span>
                      {meaning.synonyms.map((synonym, index) => (
                        <Link
                          href={`/${synonym.replaceAll(" ", "")}`}
                          className="inline-block ml-8 text-primary dark:hover:text-purple-300 hover:underline"
                          key={index}
                        >
                          {synonym}
                        </Link>
                      ))}
                    </p>
                  )}
                  <div className=" mt-12 w-16 border-b border-primary"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return <>{returnValue()}</>;
};

export default WordPage;
