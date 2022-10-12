import { NumbersCollection } from "./NumbersCollection";
import { StringsCollection } from "./StringsCollection";
import { Sorter } from "./Sorter";

const numberArray = new NumbersCollection([1, -3, 25, 7]);
const numSorter = new Sorter(numberArray);
numSorter.sort();
console.log(`sorted array: ${numberArray.data}`);

const stringThing = new StringsCollection("hello");
const charSorter = new Sorter(stringThing);
charSorter.sort();
console.log(stringThing.data);
