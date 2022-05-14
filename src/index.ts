import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([4 , -300, -2 , 0 ,11])
numbersCollection.sort();
console.log(numbersCollection.data);


 const charactersCollection = new CharactersCollection('hsbdsbdchshfdsUscskdSDJH');
charactersCollection.sort();
console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);

linkedList.sort();
linkedList.print();
