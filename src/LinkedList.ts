import { Sortable, Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter implements Sortable {
  head: Node | null = null;
  constructor() {
    super();
  }
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    //find end of the linkedList
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error("index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("list is empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
