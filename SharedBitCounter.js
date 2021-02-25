function sharedBits(a, b) {
  const aDec = (a>>>0).toString(2);
  const bDec = (b>>>0).toString(2);
  if (aDec.includes(bDec, 1) || aDec.includes(bDec, 0)) {
    return false
  } else {
    return true;
  }
}
