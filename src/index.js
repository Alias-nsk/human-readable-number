module.exports = function toReadable (number) {
  const oneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tenNames = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number === 0) {
    return 'zero';
  }
  const hundreds = Math.floor(number / 100);
  const tensAndOnes = number % 100;
  let result = '';
  if (hundreds > 0 && tensAndOnes > 0) {
    result += `${oneToNineteen[hundreds]} hundred `;
  } 
  else if (tensAndOnes === 0) {
    result += `${oneToNineteen[hundreds]} hundred`;
    return result;
  }
  if (tensAndOnes > 0 && tensAndOnes < 20) {
    return `${result}${oneToNineteen[tensAndOnes]}`;
  }
  else if (tensAndOnes > 0) {
    const tens = tensAndOnes / 10;
    if (tensAndOnes % 10 === 0) {
      result += `${tenNames[tens]}`;
      return result;
    }
    result += `${tenNames[Math.floor(tens)]} `;
    let ones = tensAndOnes % 10;
    if (ones > 0) {
      result += `${oneToNineteen[ones]}`;
    }
  }
  return result;  
}