const str1 = "ABCDA"

const str2 = "ABCD"

const findRecorrentValue = (input: string): string | null => {

  const charHashMap: { [index: string]: boolean } = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
}


console.log(findRecorrentValue(str1))
