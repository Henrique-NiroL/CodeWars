function getCount(str) {
  let vowelsCount; 
  const regexControl = /[aeiou]/gi;
  return str.match(regexControl)? vowelsCount = str.match(/[aeiou]/gi).length : vowelsCount = 0;
}
