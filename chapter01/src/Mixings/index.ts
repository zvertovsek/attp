type Constructor<T = {}> = new (...args: any[]) => T;

function RecordStatus<T extends Constructor>(base: T) {
    return class extends base {
        private deleted: boolean = false;
        get Deleted(): boolean {
            return this.deleted;
        }

        Delete(): void {
            this.deleted = true;
            console.log(`The record has been marked as deleted.`);
        }
    }
}

function Timestamp<T extends Constructor>(base: T) {
    return class extends base {
        Updated: Date = new Date();
    }
}



class Person {
    FirstName: string;
    LastName: string;

    constructor(firstName: string, lastName: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
    }
};


const ActivePerson = RecordStatus(Timestamp(Person));




/**************** */
let activePerson = new ActivePerson("Ziga", "Vertovsek");
activePerson.Delete();
console.log(activePerson);