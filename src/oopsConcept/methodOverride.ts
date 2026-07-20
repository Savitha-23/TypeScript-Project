class Payment{
    pay(): void{
        console.log("Payment Started");
    }
}

//child Class 1:

class creditCard extends Payment{
    override pay(): void {
        console.log("Paid Using Credit Card");
    }
}

// child class 2:

class UPI extends Payment{
    override pay(): void {
        console.log("Paid Using UPI");

    }
} 

// child class 3:

class NetBanking extends Payment{
    override pay(): void {
        console.log("Paid Using NetBanking");
    }
}

const payments :Payment[] = [new creditCard(), new UPI(), new NetBanking()];

for(const payment of payments) {
    payment.pay();
}
