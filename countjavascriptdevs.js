// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

function countDevelopers(list1) {
    counter = 0
    for(i=0; i<=list1.length-1; i++){
      if(list1[i].continent == 'Europe' && list1[i].language == 'JavaScript'){
        counter++
      }
  }
  console.log(`Number of JavaScript Developers from Europe: ${counter}`)
}
countDevelopers([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ])