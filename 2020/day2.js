var math = require('mathjs');

var day2 = {

  isValidPassword: function(target, min, max, password){
    let isValid = false;
    const charMap = {};
    for (let char of password){
        if (char == target){
         if (!charMap[char]) {
           charMap[char] = 1;
          } else { 
           charMap[char]++;
          }
        }
      }
    if (charMap[target] >= min && charMap[target] <= max) isValid = true;
    return isValid;
  },

  isValidUpdated: function(target, pos1, pos2, password){
    let isValid = false;

    if (target == password.charAt(pos1-1)) isValid = true;

    if (isValid) {
      if(target == password.charAt(pos2 -1)) return false;
      return true;
    }

    return target == password.charAt(pos2-1);
  },

  divisible: function(numbers){
    var toAdd = [];
    var offset = numbers.length -1;
    var length = numbers.length;

    for(let i=0; i < length; i++){
      for(x = offset; x >=0; x--){
        if (i != x){
          if(numbers[i]%numbers[x] == 0){
            console.log(numbers[i] + " index " + i + " " + numbers[x]+ " index " + x);
            toAdd.push(math.divide(numbers[i], numbers[x]));
          }
        // if(numbers[offset]%numbers[i] == 0){
        //   console.log(numbers[offset] + " offsetindex " + offset + " " + numbers[i]+ " i index " + i);
        //   toAdd.push(math.divide(numbers[offset], numbers[i]));
        // }
        }
      }
    }

    var sumAnswer = 0;
    toAdd.forEach(function(item){
      sumAnswer += parseInt(item);
    });
    return sumAnswer;

    function determineIndex(curIndex, offset, length){
      if ((curIndex + offset) < length){
        return curIndex + offset;
      }
      else{
        return math.subtract(math.add(curIndex, offset),length);
      }
    }
  }
}

module.exports = day2;
