var math = require('mathjs');

var day1 = {

  captcha: function(numbers){
    var toAdd = [];
    for(let i=0; i < numbers.length-1; i++){
      if (numbers[i] == numbers[i+1]){
        toAdd.push(numbers[i]);
      }
    }
    if (numbers[0] == numbers[numbers.length-1]){
      toAdd.push(numbers[numbers.length-1]);
    }
    var sumAnswer = 0;
    toAdd.forEach(function(item){
      sumAnswer += parseInt(item);
    });
    return sumAnswer;
  },

  captcha2: function(numbers){
    var toAdd = [];
    var offset = numbers.length / 2;
    var length = numbers.length;

    for(let i=0; i < numbers.length; i++){
      if (numbers[i] == numbers[determineIndex(i, offset, length)]){
        toAdd.push(numbers[i]);
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

module.exports = day1;
