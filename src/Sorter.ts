export interface Sortable {
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
  length: number;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    if (length > 1) {
      for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
          //NUMBAS BBY
          //instance of objects with a constructor
          // number, string, boolean

          if (this.collection.compare(j, j + 1)) {
            this.collection.swap(j, j + 1);

            //ITS A RAINBOW WOOOOOooooo
          }

          ///typeof is for primitives
          if (typeof this.collection === "string") {
          }
        }
      }
    }
  }
}
