function move(arr, old, new_index) {
    while (old < 0) {
        old+= arr.length;
    }
    while (new_index < 0) {
        new_i += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old, 1)[0]);  
   return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));

console.log(move([10, 20, 30, 40, 50], -1, -2));
