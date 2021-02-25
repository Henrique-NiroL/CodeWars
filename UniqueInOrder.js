var uniqueInOrder=function(iterable){
  let uniques = [];
  for(let i=0; i < iterable.length; i++) {
    let focus = iterable[i];
    let next = iterable[i+1];
    if (focus !== next) {
      uniques.push(focus);
    }
  }
  return uniques;
}
