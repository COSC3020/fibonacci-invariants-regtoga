function fib(n) {
    var arr = new Array(n)

    function findFib(Array, index){
       if (index == 0){
        Array[index] = 0
        return 
       }
       else if (index == 1){
        Array[index-1] = 0
        Array[index] = 1
        return 
       }
       else{
        findFib(Array, index-1) 
        Array[index] = Array[index-2] + Array[index-1]
        return 
       }
    }
    
    findFib(arr, n);
    return arr
}