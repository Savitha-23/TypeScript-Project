abstract class Payment {
    paymentStarted(): void {
        console.log("Payment Processing");
    }

    // abstract method:
    abstract pay(amount: number): void;
}
    class CreditCardPayment extends Payment {
        pay(amount: number): void {
            console.log(`paid ${amount} via credit card`);
        }
}
class UPI extends Payment {
    pay(amount: number): void {
        console.log(`paid ${amount} via UPI`);
    }

}

class Netbanking extends Payment {
    pay(amount: number): void {
        console.log(`paid ${amount} via Netbanking`);
    }
}

const credit = new CreditCardPayment();
credit.paymentStarted();
credit.pay(1000);

console.log("-------------------------------------");

const upi = new UPI();
upi.paymentStarted();
upi.pay(3000);

console.log("-------------------------------------");

const Banking = new Netbanking();
Banking.paymentStarted();
Banking.pay(5000);

console.log("-------------------------------------");
