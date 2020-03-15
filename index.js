const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map((tutorial) => {
    let forCaps = tutorial.split(' ')
    let capsWord = 
    forCaps.map( eachWord => eachWord.charAt(0).toUpperCase() + eachWord.slice(1))
    
    let newTutorial = capsWord.join(' ')
    return newTutorial
  })
}

// dont understand hoe the est uses input or why console.log stopped working.