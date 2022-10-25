class Singleton{
    private static instance: Singleton;
    #name: string;
    private constructor(){
        this.#name = 'Singletoncito';
    }

    getName(){
        return this.#name;
    }

    static getInstanceOf(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance
    }
}

export default Singleton;