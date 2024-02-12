var func = function(item){
    //your code here
}

function map(arr, somefunction){
    /* your code here
    note: Javascript already supports all this, we are just rewriting our own
    map() function with some quirk and error message */
}

console.log(map([27, 18, 5,'8', '66'],func),[ false, true, false, true, true ]);
console.log(map([48, 33, 2, 1],'str'),'given argument is not a function');
console.log(map([8, 12, 't'],func), 'array should contain only numbers');