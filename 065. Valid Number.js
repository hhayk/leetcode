/*

Validate if a given string can be interpreted as a decimal number.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."
Of course, the context of these characters also matters in the input.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button to reset your code definition.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    if (s == " ") return false;
    return !isNaN(s);
};

{
    console.log(isNumber("0"))
    console.log(isNumber(" 0.1 "))
    console.log(isNumber("abc"))
    console.log(isNumber("1 a"))
    console.log(isNumber("2e10"))
    console.log(isNumber(" -90e3   "))
    console.log(isNumber(" 1e"))
    console.log(isNumber("e3"))
    console.log(isNumber(" 6e-1"))
    console.log(isNumber(" 99e2.5 "))
    console.log(isNumber("53.5e93"))
    console.log(isNumber(" --6 "))
    console.log(isNumber("-+3"))
    console.log(isNumber("95a54e53"))
    console.log(isNumber(" "))
}