#1:

var a = 0; for (x = 1; x < 1000; x++) { if ( (x % 3 == 0) || (x % 5 == 0 ) ) { a += x } }

#2:
var a = 0, b = 1, c = 1; for (; c <= 4000000; ) { if (c % 2 == 0) { a += c; console.log(a) } var d = b + c; b = c; c = d; a }
