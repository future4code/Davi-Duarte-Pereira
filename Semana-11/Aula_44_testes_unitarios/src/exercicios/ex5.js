// foi utilizado um algoritmo de ordenação para esse
// teste. O nome desse algoritmo é bubble sort.

export function ordenarArrayEmOrdemCrescente(array) {
  let len = array.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
