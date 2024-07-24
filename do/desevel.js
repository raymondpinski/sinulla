class MyClass {
    constructor() {
        this.name = '';
    }

    setName(name) {
        this.name = name;
    }
}

let instance = new MyClass();
instance.setName('DATE');

console.log(instance.name);  // Output: 'DATE'
