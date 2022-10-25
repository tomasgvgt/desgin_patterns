import Singleton from './Singleton';

const a =  Singleton.getInstanceOf();
const b = Singleton.getInstanceOf();

console.log(a === b);
console.log(a.getName());