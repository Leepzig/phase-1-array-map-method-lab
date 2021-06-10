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

//map split each one
//map word[0].toUpperCase

const titleCased = (tutorials) => {
  return tutorials.map(tutorial => {
    let title = tutorial.split(" ").map( word => {
      return (word[0].toUpperCase() + word.slice(1, word.length))
    })
    return title.join(" ")
  })
} 
