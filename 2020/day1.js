var math = require('mathjs');

var day1 = {

  accounting: function(numbers){
    var result;
    var target = 2020;

    for (var i = 0; i < numbers.length; i++) {
      for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          result = numbers[i] * numbers[j];
          break;
        }
      }
    }
    return result;
  },

  acct2: function(arr){
    var result;
    var target = 2020;

    for (var i = 0; i < arr.length-2; i++) {
      for (var j = i + 1; j < arr.length-1; j++) {
        for (var k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k ]=== target) {
            result = arr[i] * arr[j] * arr[k];
            break;
          }
        }
      }
    }
    return result;
  }
}

module.exports = day1;
