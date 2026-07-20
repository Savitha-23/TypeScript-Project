class PaymentService {
    pay(amount: number): void;
    pay(amount: number, paymentMode: string): void;
    pay(amount: number, paymentMode: string, accountNumber: string): void;

    pay(amount: number, paymentMode?: string,accountNumber?: string ): void {

        if(paymentMode && accountNumber) {
            console.log(`Amount: ${amount}`);
            console.log(`Payment Mode: ${paymentMode}`);
            console.log(`Account Number: ${accountNumber}`);
            
        } else if (paymentMode) {
            console.log(`Amount: ${amount}`);
            console.log(`Payment Method: ${paymentMode}`);
        } else {
            console.log(`Amount: ${amount}`);
            console.log("Default Payment");
        }
    }


}
const payment = new PaymentService();
payment.pay(1000);
console.log("-----------------------");
payment.pay(2000, "UPI");
console.log("-----------------------");
payment.pay(5000, "Net Banking", "SBIN2023");