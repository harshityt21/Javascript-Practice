class BankAccount {
    constructor(ownerName, balance){
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(val){
        this.balance = this.balance + val;
        console.log(`${this.ownerName} deposited ${val}`);
    }

    withdraw(val) {
        if (val > this.balance) {
            console.log(`❌ ${this.ownerName} has insufficient balance`);
        } else {
             this.balance -= val;
            console.log(`${this.ownerName} withdrew ${val}`);
        }
    }

    getBalance(){
        console.log(`${this.ownerName}'s balance: ${this.balance}`);
    }

}

class SavingsAccount extends BankAccount {
  addInterest() {
    let interest = this.balance * 0.05; // 5% interest
    this.balance += interest;
    console.log(`${this.ownerName} earned interest of ${interest}`)
  }
}


const acc1 = new BankAccount("Harsh", 1000);
acc1.deposit(500);  
acc1.getBalance();  
const acc2 = new SavingsAccount("Raj", 2000);
acc2.addInterest(); 
acc1.deposit(200);  
acc1.withdraw(300);  
acc2.deposit(500);  
acc1.getBalance();  
acc2.getBalance();  