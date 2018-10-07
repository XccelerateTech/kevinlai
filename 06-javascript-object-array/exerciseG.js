function middle(arr) {
    console.log(arr);
    //console.log(Math.max(...arr));
    //console.log(Math.min(...arr));
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < Math.max(...arr) && arr[i] > Math.min(...arr)) {
            //console.log(arr[i]);
            //console.log(arr.indexOf(arr[i]));
            console.log(arr[i] +' at index ' +  arr.indexOf(arr[i]) + ' lies bewteen ' + Math.min(...arr) + ' and ' + Math.max(...arr));
        }
    }
}

middle([2,3,1])
middle([88, 7, 55 ])