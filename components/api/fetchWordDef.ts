export function fetchWordDef(word: string) {
  if (!word) return;

  const wordNoSpaces = word.replaceAll(" ", "");

  return fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${wordNoSpaces}`
  );
}
