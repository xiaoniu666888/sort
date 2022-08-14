//把最后一个作为基准，比它小的放到前边
function partition(arr, first, last) {
    if (arr.length <= 1) {
        return arr
    }
    let i = first;
    let pivot = arr[last];
    for (let j = first; j < last; j++) {
        if (arr[j] < pivot) {
            //比pivot小的放到前边去,比它小的不动，那么遍历下来，i指向的元素之前的元素都是比pivot小的
            swap(arr, j, i)
            i++
        }
    }
    /*此时i指向的元素一定大于等于pivot,那么把pivot与i指向的位置互换，piovt的位置就是它应在的位置，
    即pivot之前的都比自己小，pivot之后的都比自己大*/
    swap(arr, last, i)
    return i
}
//再对两边的元素进行排序
function qSort(arr, first, last) {
    if (first < last) {
        let i = partition(arr, first, last);//也就是找到此时pivot的位置
        //现在把pivot两边的元素再按照上边的方法进行排序
        qSort(arr, first, i - 1)
        qSort(arr, i + 1, last)
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
let arr = [0, 1, 1, 1, 4, 5, 3, 7, 7, 8, 10, 2, 7, 8, 0, 5, 2, 16, 12, 1, 19, 15, 5, 18, 2, 2, 22, 15, 8, 22, 17, 6, 22, 6, 22, 26, 32, 8, 10, 11, 2, 26, 9, 12, 9, 7, 28, 33, 20, 7, 2, 17, 44, 3, 52, 27, 2, 23, 19, 56, 56, 58, 36, 31, 1, 19, 19, 6, 65, 49, 27, 63, 29, 1, 69, 47, 56, 61, 40, 43, 10, 71, 60, 66, 42, 44, 10, 12, 83, 69, 73, 2, 65, 93, 92, 47, 35, 39, 13, 75];
qSort(arr, 0, arr.length - 1)
console.log(arr);