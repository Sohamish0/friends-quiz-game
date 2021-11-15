const questions = [
  {
    que: `Who broke the glass while playing cricket in hostel?🤨`,
    ans: 'Rohit'
  },

  {
    que: `What's your nick name at your home, come on don't be shy😄`,
    ans: 'Manish'
  },

  {
    que: `Did you ever have crush on someone..♥`,
    ans: 'Ankita'
  }
]


const readline = require('readline-sync');
console.log('Let us start the quiz now...')
let score = 0;
for(let i=0; i<questions.length; i++) {
  let ask = readline.question(questions[i].que);
  if(ask.toLowerCase() === questions[i].ans.toLowerCase()) {
    score++
  }
  console.log('-------------------')
}
  console.log('Here game ends and your score out of 3 is ' + score);

