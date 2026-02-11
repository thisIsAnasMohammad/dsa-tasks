function segregate0and1(arr) {

    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (arr[i] == 1 && arr[j] == 0) {
            arr[i] = 0;
            arr[j] = 1;
            i++;
            j--;
        } else if (arr[i] == 0) {
            i++;
        } else {
            j--;
        }
    }

}