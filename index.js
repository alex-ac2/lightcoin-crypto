class Account {

  constructor(username) {
    this.username = username;
    // Starting balance is $0
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}


class Withdrawal extends Transaction {

   commit() {
    this.account.balance -= this.amount;
  }
}

class Deposit extends Transaction {

  commit() {
    this.account.balance += this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const account1 = new Account("snow-patrol");


t1 = new Deposit(200.50, account1);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(10, account1);
t2.commit();
console.log('Transaction 2:', t2);

// t3 = new Deposit(120.00);
// t3.commit();
// console.log('Transaction 3:', t3);

console.log(account1.balance);

