/* 
Pseudocode for ATM

	💰. Create a Fake Database:
		- create an object with
			- account number
			- full name
			- account balance

  💰. Account Validation
		- Welcome Message:
        Display a welcome message using alert.
        Inform the user that they are about to transfer money between accounts.
		- Validate account number against the database.
		- Show the account holder's name when a valid account number is entered.
		- reject any transfer with an invalid account number and prompt the user to re-enter the account number
	
	💰. Do a Pin Validation
		- Prompt the user to add a pin but allow any PIN to work

    💰. Account Selection:
        Use prompt to ask the user to select the account to transfer money from (i.e., "Please enter your account number or name").

    💰. Destination Account Selection:
        Use prompt to ask the user to select the account to transfer money to (i.e., "Please enter the destination account number or name").

    💰. Amount Input:
        Use prompt to ask the user to enter the amount they wish to transfer.

    💰. Confirmation:
        Use confirm to ask the user to confirm the transfer details: from account, to account, and amount.
        If the user confirms, proceed with the transfer.
        If the user cancels, abort the transaction and show a cancellation message.

    💰. Transfer Processing:
        Simulate the transfer by displaying a processing message using alert.

    💰. Success or Failure:
        Success: Display a success message using alert if the transfer is successful.
        Failure: Handle edge cases like invalid input, network issues, or insufficient funds. Display an appropriate error message.

    💰. Exit:
        Thank the user and exit the application.
*/

// 💰: Create Fake Database
const usersDatabase = [
	{
		accountNumber: '123456789',
		fullName: 'Tolu Oni',
		accountBalance: 1000000,
		pin: 4567,
		bank: 'Access',
	},
	{
		accountNumber: '987654321',
		fullName: 'Laju Odunlami',
		accountBalance: 200000,
		pin: 1234,
		bank: 'GTBank',
	},
	{
		accountNumber: '246810124',
		fullName: 'Tosan Eresanara',
		accountBalance: 500000,
		pin: 7890,
		bank: 'UBA',
	},
	{
		accountNumber: '135791113',
		fullName: 'Timeyin Eresanara',
		accountBalance: 100000,
		pin: 6789,
		bank: 'RAMI',
	},
];

// 💰: Function to find the user by the account number
function findUserByAccount(accountNumber) {
	return usersDatabase.find(function (user) {
		if (user.accountNumber == accountNumber) {
			return user;
		}
	});
}

// 💰: Function to find the user pin
// function getUserPin(accountNumber, enterPin) {
// 	const user = findUserByAccount(accountNumber);
// 	if (user) {
// 		return user.pin === enterPin;
// 	}
// 	// alert("you are wrong!")
// 	return false;
// }

function transferMoney() {
	// 💰: Welcome message
	alert("Welcome to Rami's ATM 💵");

	// 💰: Select source account
	let fromAccount = prompt('Enter your account number to transfer FROM:');
	let fromUser = findUserByAccount(fromAccount);

	// ✅: Validate source account
	while (!fromUser) {
		alert('Invalid account number. Please try again.');
		fromAccount = prompt('Enter your account number to transfer FROM:');
		fromUser = findUserByAccount(fromAccount);
	}

	// 💰: Enter PIN
	let enterPin = prompt('Enter your PIN');
	// let userPin = getUserPin(pin, accountNumber);

	// ✅: Validate pin
	// if (getUserPin(accountNumber, enterPin)) {
	// 	alert ("PIN validated successfully. Proceeding with the transaction...")
	// } else {
	// 	alert("Invalid PIN. Please try again.");
	// }

	// 💰: Destination Account Selection
	let toAccount = prompt(
		'Enter the destination account number to transfer TO:'
	);
	let toUser = findUserByAccount(toAccount);

	// ✅: Validate destinatio account
	while (!toUser) {
		alert('Invalid destination account number. Please try again.');
		toAccount = prompt('Enter the destination account number to transfer TO:');
		toUser = findUserByAccount(toAccount);
	}

	// confirm destination account user's name
	alert(`This destination account belongs to: ${toUser.fullName}`);

	// 💰: Amount Input - Enter Amount to Transfer
	let amount = prompt('Enter the amount you wish to transfer:');

	// ✅: Validate the amount to be transferred
	while (isNaN(amount) || amount <= 0 || amount > fromUser.accountBalance) {
		alert('Insufficient funds. Please enter an amount within your balance');
		amount = prompt('Enter the amount you wish to transfer:');
	}

	// 💰: Confirmation - Confirm the transfer details
	let confirmation = confirm(
		`You are about to transfer $${amount} from ${fromAccount} to ${toAccount}. Do you want to proceed?`
	);

	if (confirmation) {
		// 💰: Process transferring
		alert('Processing your transfer...');

		fromUser.accountBalance -= amount;
		toUser.accountBalance += amount;
		// 7: Success Message
		alert('Transfer successful! Thank you for using our service.');
	} else {
		// If user cancels the transfer
		alert('Transfer cancelled.');
	}

	// 💰: Exit
	alert('Goodbye!');
}

// Start the money transfer process
transferMoney();
