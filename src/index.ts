import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";
import { LinkedList } from "./LinkedList";

const ll = new LinkedList();
ll.add(-2);
ll.add(297);
ll.add(-222);
ll.add(56);
ll.add(2);
ll.add(22);
ll.sort();
ll.print();
