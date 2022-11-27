// a stable sorting algorithm  happens when two objects with equal keys appear in the same order in sorted output as they appear in the input unsorted array



//example using merge sort..

function merge_Arrays(left_sub_array, right_sub_array) {
    let array = []
    while (left_sub_array.length && right_sub_array.length) {
       if (left_sub_array[0] < right_sub_array[0]) {
          array.push(left_sub_array.shift())
       } else {
          array.push(right_sub_array.shift())
       }
    }
    return [ ...array, ...left_sub_array, ...right_sub_array ]
 }
 function merge_sort(unsorted_Array) {
    const middle_index = unsorted_Array.length / 2
    if(unsorted_Array.length < 2) {
       return unsorted_Array
    }
    const left_sub_array = unsorted_Array.splice(0, middle_index)
    return merge_Arrays(merge_sort(left_sub_array),merge_sort(unsorted_Array))
 }
 unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
 document.write("The sorted array: ",merge_sort(unsorted_Array));

 //to perform the merge sort we have created an array having elements in a random order. And by using Merge Sort algorithm we have sorted the array elements in ascending order.

 //The time complexity is O(n * log(n)) – linearithmic time complexity = O(7 * log(7))

 //while The space complexity is O(n)=O(7)


