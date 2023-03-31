import { WordInterface } from "../interfaces/wordInterface";

export function parseWordResponse(response: any) {
  try {
    const parsedResponse: WordInterface = {
      word: response[0].word,
      phonetics: {
        text: response[0].phonetics[0].text,
        audio: response[0].phonetics[0].audio,
      },
      origin: response[0].origin,
      meanings: response[0].meanings.map((meaning: any) => {
        return {
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions.map((definition: any) => {
            return {
              definition: definition.definition,
              example: definition.example,
            };
          }),
          synonyms: meaning.synonyms,
        };
      }),
    };

    return parsedResponse;
  } catch (error) {
    return;
  }
}
