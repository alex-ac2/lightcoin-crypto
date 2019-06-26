class Account {

  constructor(username) {
    this.username = username;
    // Starting balance is $0
    
    this.transactions = [];
  }

  get balance() {
    let totalBalance = 0;

    this.transactions.forEach( (transaction) => {
      totalBalance += transaction.value;
    })
    return totalBalance;
  }
  
  get transactionCount() {
    return this.transactions.length;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this._amount = amount;
    this.account = account;
  }

  isAllowed() {
    if (this.value < 0 && this.value + this.account.balance < 0) {
      return false;
    } else {
      return true;
    }
  }

  commit() {
    console.log(this.value);
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true;

    } else {
      console.log("Can't take funds")
      return false;
    }
  }
}


class Withdrawal extends Transaction {

  get value() {
    return -this._amount;
  }
}

class Deposit extends Transaction {

  get value() {
    return this._amount;
  }
}
  

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const account1 = new Account("jack");

// Transaction 1
t1 = new Deposit(200.50, account1);
t1.commit();
console.log('Current Balance: ', account1.balance); // Starting balance

t2 = new Withdrawal(300, account1);
t2.commit();

// t3 = new Deposit(120.00, account1);
// t3.commit();

console.log(account1.transactionCount);
console.log('Remaining Balance: ', account1.balance);

