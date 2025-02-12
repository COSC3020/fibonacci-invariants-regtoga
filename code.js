function fib(n) {
    //This is a pretty simple function, just create an array...
    //use the numberprovided as an index into the array
    //if the index is either of the base cases just set the index to the base cases
    //else add the two last indexes together to create a third index, repeat untill you get to the top of the recursion
    var arr = new Array(n);

    function findFib(Array, index){
       if (index == 0){
        Array[index] = 0;
       }
       else if (index == 1){
        Array[index-1] = 0;
        Array[index] = 1;
       }
       else{
        findFib(Array, index-1) ;
        Array[index] = Array[index-2] + Array[index-1];
       }
    }
    
    findFib(arr, n);
    return arr;
}