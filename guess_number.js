let random = Math.floor(Math.random() * 101);
let need_to_guess = 0
let guess
let final_result



console.log("Welcome to the Number guessing challange..")
console.log("Guess a Number Between (0 - 100)..")

do {
  guess = Number.parseInt(prompt("Enter Your Number: "))

  if (guess < random) {
    alert("Your Number is smaller than the actual number, try a higher number!!")
    need_to_guess++
  }

  else if (guess > random) {
    alert("Your Number is greater than the actual number, try a lower number!!")
    need_to_guess++
  }

  else {
    alert("You gussed the correct answer!")
  }
} while (guess != random)

console.log("The actual number is: " + random + " and you did it " + need_to_guess + " number of gusses")

final_result = 100 - need_to_guess
console.log("Your final result is: " + final_result)