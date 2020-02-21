const array: Array<any> = [1,4,5,1, "banana", 23, "john"]

const printAllElements = (arr: Array<any>, index: number = 0) =>  {
  if (arr.length > index ){
    console.log(arr[index])
    index += 1
    printAllElements(arr, index)
  }
}


printAllElements(array)