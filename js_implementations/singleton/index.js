class Singleton{
    static #instancedInternally = false;
    static #instance;
    constructor(){
        if(!Singleton.#instancedInternally){
            throw new TypeError('Singleton cant be instantiated by User');
        }
    }
    static getInstanceOf(){
        Singleton.#instancedInternally = true;
        if(!Singleton.#instance){
            Singleton.#instance = new Singleton();
        }
        Singleton.#instancedInternally = false;
        return Singleton.#instance;
    }
}

const a = Singleton.getInstanceOf();
const b = Singleton.getInstanceOf();
console.log(a === b); //true

const c = new Singleton(); //TypeError: Singleton cant be instantiated by User
