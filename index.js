const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleChanger = (tutorials) => {
//   return tutorials.map(tutorial => {
//     return tutorial.split(" ").map( word => {
//       return word[0].toUpperCase() + word.slice(1, word.length)
//     })
//   })
// }  

// const titleCased = (tutorials) => titleChanger(tutorials).map(tutorial => tutorial.join())

//map to get each title alone
//map to make each word an element in an array
//map to split each word[0].toUpperCase + rest word
//map .join(" ")?

const titleCased = (tutorials) => {
  return tutorials.map(tutorial => {
    let title = tutorial.split(" ").map( word => {
      return (word[0].toUpperCase() + word.slice(1, word.length))
    })
    return title.join(" ")
  })
} 
