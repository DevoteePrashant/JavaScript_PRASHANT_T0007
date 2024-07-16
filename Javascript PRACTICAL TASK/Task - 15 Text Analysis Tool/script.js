const form = document.querySelector('form');
const urlInput = document.querySelector('#url');
const addButton = document.querySelector('.add');
const galleryContainer = document.querySelector('.gallery');

const icon = document.createElement('div');

const data = document.getElementById('text');

addButton.addEventListener('click', function analyzeText(e) {
  e.preventDefault();
  const text = data.value;
  // Character count
  const charCount = text.length;

  // Word count
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Frequency of each word
  const wordFreq = {};
  let mostCommodore ={};
  words.forEach(word => {
    if (wordFreq[word]) {
      wordFreq[word]++;
      mostCommodore =   word;  
    } else {
      wordFreq[word] = 1;
    }
  });

  // if most use so in index fest
 const festWord =Object.keys(wordFreq).filter(word =>  mostCommodore =   word)

 //  not common
 const nonCommonWords = Object.keys(wordFreq).filter(word => wordFreq[word] === 1);

  const analysisResult = {
    characters: charCount,
    words: wordCount,
    wordFrequency: wordFreq,
    mostCommon: festWord,
nonCommon: nonCommonWords
  };

  console.log("characters" , analysisResult.characters);
  console.log("words" , analysisResult.words);
  console.log("wordFrequency" , analysisResult.wordFrequency);
  console.log("mostCommon" , analysisResult.mostCommon);
  console.log("nonCommon" , analysisResult.nonCommon); 

  galleryContainer.innerHTML =`
  <p>Characters: ${analysisResult.characters}</p>&nbsp;&nbsp;

  <p>Words: ${analysisResult.words}</p>&nbsp;&nbsp;
  <p>Word Frequency:</p>
 <ul>
    ${Object.keys(analysisResult.wordFrequency).map(word => `
      <li>${word}: ${analysisResult.wordFrequency[word]}</li>
    `).join('')}
  </ul>

  <p>Most Common Words:</p>
  <ul>
    ${analysisResult.mostCommon? 
      analysisResult.mostCommon.map(word => `<li>${word}</li>`).join('') :
      '<li>No most common words data available</li>'
    }
  </ul>

  <p>Not Common Words:</p>
  <ul>
    ${analysisResult.nonCommon? 
      analysisResult.nonCommon.map(word => `<li>${word}</li>`).join('') :
      '<li>No common words data available</li>'
    }
  </ul>
`;

});

