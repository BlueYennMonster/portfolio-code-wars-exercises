function solve(s) {
  //create array of letters with values
  let letters = "abcdefghijklmnopqrstuvwxyz".split("");
  let vowels = ["a", "e", "i", "o", "u"];
  //split s with vowels as separators
  let newString = () => {
    let string = s;
    for(let vowel of vowels){
      string.replace(/vowel/g, " ");
    }
    return string;
  }

  console.log(newString());

}

solve("abcdefghijk");