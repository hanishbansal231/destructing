const wordInput = 'the quick brown fox jumps over the lazy dog';
function wordCounter(wordInput) {
    let words = wordInput.split(" ");
    let wordMap = new Map();

    words.map(word => (wordMap.has(word)) ? wordMap.set(word, wordMap.get(word) + 1) : wordMap.set(word, 1));
    return wordMap;
}

let result = wordCounter(wordInput);
console.log(result)