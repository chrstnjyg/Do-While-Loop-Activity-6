function checkPassword() {
    const correctPassword = "dek1522";
    let userPassword;
    
    do {
        userPassword = prompt("Enter your password:");
        if (userPassword !== correctPassword) {
            alert("Incorrect password. Try again.");
        }
    } while (userPassword !== correctPassword);
    alert("Access granted!");
}