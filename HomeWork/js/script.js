/*    Створити телефонну книгу
        створити початковий клас Abonent, де зберігатимуться ім*я і номер
        створити set який прийматиме телефон і номер
        створити get який виводитиме данні про абонента
        створити три різних юзери
        вивести данні */

        class Abonent {
    constructor(options) {
        this.name = options.name;
        this.number = options.number;
    }

    number = "";
    phone = "";            

    set information(newName) {
        const nameRow = newName.split(" ");
        this.number = nameRow[0];
        this.phone = nameRow[1];
    }

    get information() {
        return ` Number : ${this.number} Phone : ${this.phone}`
    }
}


const Danilo = new Abonent({
    name: "Danilo",
});

const Dasha = new Abonent({
    name: "Dasha",
});

const Evgeny = new Abonent({
    name: "Evgeny",
}); 

console.log(Evgeny);


