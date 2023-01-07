function pyramid(a) {
    var str = "* ";
    var space = " ";
    for (var i = 1; i <= a; i++) {
      console.log(space.repeat(a - i), str.repeat(i));
    }
  }
input=parseInt(prompt("Enter rows number:"));
output=pyramid(input);