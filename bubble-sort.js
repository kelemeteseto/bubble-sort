var unsortedArray = [4, 3, 2, 7, 10, 6];

Array.prototype.bubbleSort = function() {

  var bool = true;
  do {
    bool = false;
    for (var i=0; i < unsortedArray.length; i++) {
      if (unsortedArray[i] > unsortedArray[i+1]) {
        var swapped = unsortedArray[i+1];
        unsortedArray[i+1] = unsortedArray[i];
        unsortedArray[i] = swapped;
        bool = true;
      }
    }
  } while(bool);
  return this;
};

console.log(unsortedArray.bubbleSort());
