import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([4 , -3 , -2 , 0 ,11])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);