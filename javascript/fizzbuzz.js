function fizzBuzz(stop) {
  for (var i = 1; i <= stop; i++) {
    var message = i.toString();
    if (i % 3 === 0) {
      message = "Fizz";
    }
    if (i % 5 === 0 && message != "Fizz") {
      message = "Buzz";
    } else if (i % 5 == 0) {
      message = message + "Buzz";
    }
    console.log(message);
  }
}
