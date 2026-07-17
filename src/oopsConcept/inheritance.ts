class BaseTest {
    startTest(): void {
        console.log("Browser launched");
    }
    endTest(): void{
        console.log("Browser closed");
    }
}

// Child Class:

class LoginTest extends BaseTest {
    testValidLogin(): void {
        this.startTest(); // Inherited
        console.log("Entering username and password");
        console.log("Clicked login button");
        console.log("Login successful!");
        this.endTest(); // Inherited
    }
    testInvalidLogin(): void {
        this.startTest();
        console.log("Entered invalid data");
        console.log("login Error");
        this.endTest();
    }
}

const login = new LoginTest();
login.testValidLogin();
login.testInvalidLogin();