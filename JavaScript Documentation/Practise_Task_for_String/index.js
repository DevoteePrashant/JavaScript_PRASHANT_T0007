function analyzeText(text) {
    // Character count
    let charCount = text.length;

    // Word count
    let words = text.split(/\s+/).filter(word => word.length > 0);
    
    let wordCount = words.length;

    // Frequency of each word
    let wordFreq = {};
    words.forEach(word => {
        if (wordFreq[word]) {
            wordFreq[word]++;
        } else {
            wordFreq[word] = 1;
        }
    });

    return {
        characters: charCount,
        words: wordCount,
        wordFrequency: wordFreq
    };
}

// Example usage
let text = "Sample text for analysis. Sample text.";
let analysisResult = analyzeText(text);
console.log(analysisResult);
