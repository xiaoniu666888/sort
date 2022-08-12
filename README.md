# sort
sort函数
sort( function ) 数组排序
 function 参数为一个函数体   函数体接收两个形参
          不传参数 根据ASCII码表 来比较数组中的第一个值排序

let arr = [22,44,11,33,55]
arr.sort(function(a,b){
    return a - b //从小到大排列
    return b - a //从大到小排列
})
console.log(arr)
