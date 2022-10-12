import { Sortable } from "./Sorter";

export class StringsCollection implements Sortable {
  length: number;
  data: string[];
  target: string;

  constructor(str: string) {
    this.length = str.length;
    this.data = [...str];
    this.target = str;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].charCodeAt(0) > this.data[rightIndex].charCodeAt(0)
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
