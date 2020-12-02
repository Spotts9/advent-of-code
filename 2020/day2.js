var math = require('mathjs');

var day2 = {

  sumRows: function(numbers){
    var smallNum = numbers[0];
    var largeNum = numbers[0];

    numbers.forEach(function(num){
      if (num < smallNum){
        smallNum = num;
      }

      if (num > largeNum){
        largeNum = num;
      }
    });
    // console.log("smallNum:  " + smallNum);
    // console.log("largeNum: " + largeNum);
    return math.subtract(parseInt(largeNum),  parseInt(smallNum));
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
