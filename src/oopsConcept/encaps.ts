class Bank {
    public name: string;
    public IFSC: any;
    public branch: string;
    public location: string;
    private email: string;
    private customerName: string;
    private accountNumber: number;

    constructor(
        name: string, 
        IFSC: string, 
        branch: string, 
        location: string, 
        email: string, 
        customerName: string, 
        accountNumber: number)

        {
            this.name = name;
            this.IFSC = IFSC;
            this.branch = branch;
            this.location = location;
            this.email = email;
            this.customerName = customerName;
            this.accountNumber = accountNumber;
        }

        public display(): void {
            console.log(`Bank Name: ${this.name}`);
            console.log(`IFSC Code: ${this.IFSC}`);
            console.log(`Branch: ${this.branch}`);
            console.log(`Location: ${this.location}`);
            console.log(`Customer Name: ${this.customerName}`);
            console.log(`Account Number: ${this.accountNumber}`);
            console.log(`Email: ${this.email}`);

            console.log("------------------------------------------");


        }
    


}
const customer1 = new Bank( "SBI", "SBIN0006575", "Edayanchavadi", "Chennai", "savi.@gmail.com", "Savi", 2020322);
const customer2 = new Bank( "HDFC", "HDFC0006576", "Anna Nagar", "Chennai", "HDFC.@gmail.com", "Mani", 2020333);
const customer3 = new Bank( "ICICI", "ICICI0006576", "SVM Nagar", "Chennai", "ICICI.@gmail.com", "Ravi", 2020333);


customer1.display();
customer2.display();
customer3.display();

//console.log(customer1.customerName);---- Private so showing error.

console.log(customer1.name);
customer1.display();

