function isPangram(string){
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  string = string.toLowerCase();
  return alphabet.every(x => string.includes(x));
}
