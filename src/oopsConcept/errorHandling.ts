// Every method follows the same pattern:

//  try {
//       Risky code
// }
// catch(error) {
//       Handle the error
// }
// finally {
//       Always Runs
// }





class ErrorHandlingPractice {
    // 1. division example:
    static divide(a: number, b: number): void {
        try {
            if(b === 0){
                throw new Error("Division by 0 is not possible.");
            }
            const result = a / b;
            console.log("Division Result :", result);
        }
        catch (error) {
            console.log("Error :", (error as Error).message);
        }
        finally {
            console.log("Divided Successfully");
            console.log("-------------------------------------------");
        }
    }

    // 2. Login Validation:

    static login(username: string, password: string): void{
        try {
            if (username.trim() === "") {
                throw new Error("Username Cannot Be Empty");
            }
            if (password.trim() === "") {
                throw new Error("Password Cannot Be Empty");
            }
            console.log("Logged In Successfully");
        }
        catch (error) {
            console.log("Login Error :", (error as Error).message);
        }
        finally{
            console.log("Login Validation Completed");
            console.log("---------------------------------");
        }

    }

    // 3. Age Validation:

    static ValidateAge(age: number): void {
        try {
            if (age < 18) {
                throw new Error("Age should be 18 or above.");
        }
        console.log("Eligible For Registration");
    }

        catch (error) {
            console.log("Validation Error :", (error as Error).message);
        }
        finally {
            console.log("Age Validation Completed");
            console.log("----------------------------------");
        }
    }

    // 4. Array Validation:

    static arrayExample(): void {
        try {
            const numbers =  [10, 20, 30];
            const index = 5;

            if (index >= numbers.length) {
                throw new Error("Array Index Out Of range.");
            }
            console.log(numbers[index]);

        } 
        catch (error) {
            console.log("Array Error :", (error as Error).message);
        }
        finally {
            console.log("Array Operation Completed");
            console.log("---------------------------------");
        }
    }

    // 5. Bank Withdrawal:

    static withdraw(balance: number, amount:number): void {
        try {
            if(amount > balance) {
                throw new Error("Insufficient Balance,");
            }
            balance = balance - amount;
            console.log("Withdraw Success");
            console.log("Remaining Balance :", balance);

        }
        catch(error) {
            console.log("Bank Error :", (error as Error).message);
        }
        finally {
            console.log("Transaction Completed");
            console.log("----------------------------------");
        }
    }

}    

console.log("====== Type Script Error Handling Demo =====")
console.log();

// Division:
ErrorHandlingPractice.divide(100,20);
ErrorHandlingPractice.divide(100,0);

// Login:
ErrorHandlingPractice.login("admin", "admin2322");
ErrorHandlingPractice.login("", "admin2322");

// Age:
ErrorHandlingPractice.ValidateAge(25);
ErrorHandlingPractice.ValidateAge(10);

// Array:
ErrorHandlingPractice.arrayExample();

// Bank:

ErrorHandlingPractice.withdraw(5000, 4000);
ErrorHandlingPractice.withdraw(5000, 7000);

console.log("==== Program Finished ====");














    


            