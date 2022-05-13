import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([4 , -3 , -2 , 0 ,11])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection('AtabekAdilbe');
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection.data);
