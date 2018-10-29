const checkParams = (arr, input) => {
    if (!arr || !Array.isArray(arr) || arr.length < 1 || input.length === 0 || typeof input !== "string") {
      return true;
    };
    return false;
  }
  
  const typeHead = async (arr, input) => {
    if (checkParams(arr, input)) return false;
    const wordIndexArr = [];
  
    for (let i = 0, leng = arr.length; i < leng; i++) {
      const word = arr[i].toLowerCase();
      const wordIndex = word.indexOf(input.toLowerCase());
  
      if (wordIndex >= 0) {
        wordIndexArr.push([word, wordIndex]);
      }
    }
    await wordIndexArr.sort((a, b) => a[1] - b[1] || a[0].length - b[0].length);
    return await wordIndexArr.map(a => a[0].split(" ").map(e => e[0].toUpperCase() + e.substring(1)).join(" "));
  };

  export default typeHead;