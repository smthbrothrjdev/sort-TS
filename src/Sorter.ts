export interface Sortable {
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
  length: number;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  sort(): void {
    const { length } = this;

    if (length > 1) {
      for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
          //NUMBAS BBY
          //instance of objects with a constructor
          // number, string, boolean

          if (this.compare(j, j + 1)) {
            this.swap(j, j + 1);

            //ITS A RAINBOW WOOOOOooooo
          }
        }
      }
    }
  }
}
