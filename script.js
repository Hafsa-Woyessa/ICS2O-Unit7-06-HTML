let age = 12
let guess = 0

while (guess !== age) {
  guess = prompt('Guess my age')
  if (guess === age) {
    alert('You win!')
  } else if (guess < age) {
     alert('You guessed too small.Please try again')
} else if (guess > age) {
   alert('You guessed too big.Please try again')
}
}
