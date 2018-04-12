/*Write a program that takes an array A and an index i into A, and rearranges the elements such
that all elements less than A[i] (the “pivot”) appear first, followed by elements equal to the pivot,
followed by elements greater than the pivot.*/

export const dutchNationalFlag = (arr: number[], index: number): number[] => {
  const swap = (arr: number[], a: number, b: number): void => {
    arr[a] += arr[b];
    arr[b] = arr[a] - arr[b];
    arr[a] -= arr[b];
  };
  const pivot = arr[index];
  const l = arr.length;
  let smaller = 0;
  let larger = l - 1;
  for (let i = 0; i < l; i += 1) {
    if (arr[i] < pivot) {
      swap(arr, i, smaller);
      smaller += 1;
    }
  }
  for (let i = l - 1; i >= 0; i -= 1) {
    if (arr[i] < pivot) {
      break;
    } else if (arr[i] > pivot) {
      swap(arr, i, larger);
      larger -= 1;
    }
  }
  return arr;
};
