class Employee {
    name: string;
    id: number;
    salary: number;
    department: string;

    constructor(name: string, id: number, salary: number, department: string) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.department = department;
  
    }
    
    calculateSalary(): number {
       
        // Assignment Operator:

        let bonus: number = 0;
        bonus += this.salary * 0.1;

        let tax: number = 0;
        tax += this.salary * 0.2;
        

        let totalSalary: number = this.salary + bonus - tax;
        return totalSalary;
    }
    displayDetails(): void {
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Department: ${this.department}`);
        console.log(`Employee Salary: ${this.salary}`);


        // Comparison Operator:

        console.log(`Salary > 55000 : ${this.salary > 55000}`);
        console.log(`Salary == 50000 : ${this.salary == 50000}`);

        // Logical Operator:

        let eligible = this.salary >= 50000 && this.department == "Engineering";
        console.log (`Eligible for promotion: ${eligible}`);


        // Ternary Operator:

        let performance: string = this.salary > 60000 ? "WOWWWW Perfect Performance" : "Good Performance";
        console.log(`Performance: ${performance}`);

        console.log(`Total Salary after bonus and tax: ${this.calculateSalary()}`);
        console.log(`---------------------------------------------`);




    }
}

const employee1 = new Employee("Savi", 2322, 70000, "Engineering");
const employee2 = new Employee("Suja", 2323, 50000, "IT");
const employee3 = new Employee("Sudha", 2324, 40000, "Civil")

employee1.displayDetails();
employee2.displayDetails();
employee3.displayDetails();
