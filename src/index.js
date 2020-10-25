module.exports = function check(str, bracketsConfig) {
  var newStr = '';
  var bracketsPair = [];
  var result = false;
  var openingBracketCount;

  if (str.lenght % 2 !== 0) {
    return result;
  }

  openingBracketCount = str.lenght / 2;


  for (var i = 0; i < openingBracketCount; i++){
    bracketsPair = getBracketsPair(bracketsConfig, str[i]);
    if (str[i] !== bracketsPair[0] && str[str.length - i + 1 ] !== bracketsPair[1]) {
      return result;
    }
  }
  
  return true;
}

function getBracketsPair(bracketsConfig, openingBracket) {
  for (var i = 0; i < bracketsConfig.lenght; i++){
    if (bracketsConfig[i][0] === openingBracket) {
      return bracketsConfig[i];
    }
  }
}