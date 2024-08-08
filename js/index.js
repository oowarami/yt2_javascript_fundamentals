/* 
Pseudocode for ATM

   1. Welcome Message:
        Display a welcome message using alert.
        Inform the user that they are about to transfer money between accounts.

    2. Account Selection:
        Use prompt to ask the user to select the account to transfer money from (i.e., "Please enter your account number or name").

    3. Destination Account Selection:
        Use prompt to ask the user to select the account to transfer money to (i.e., "Please enter the destination account number or name").

    4. Amount Input:
        Use prompt to ask the user to enter the amount they wish to transfer.

    5. Confirmation:
        Use confirm to ask the user to confirm the transfer details: from account, to account, and amount.
        If the user confirms, proceed with the transfer.
        If the user cancels, abort the transaction and show a cancellation message.

    6. Transfer Processing:
        Simulate the transfer by displaying a processing message using alert.

    7. Success or Failure:
        Success: Display a success message using alert if the transfer is successful.
        Failure: Handle edge cases like invalid input, network issues, or insufficient funds. Display an appropriate error message.

    8. Exit:
        Thank the user and exit the application.
*/

function transferMoney() {
	// 1: Welcome Message
	alert("Welcome to Rami's ATM 💵");

	// 2: Account Selection
	let fromAccount = prompt("Enter your account number or name to transfer FROM:");

	// 3: Destination Account Selection 
	let toAccount = prompt("Enter the destination account number or name to transfer TO:");

	// 4: Amount Input - Enter Amount to Transfer
	let amount = prompt("Enter the amount you wish to transfer:");

	// 5: Confirmation - Confirm the transfer details
	let confirmation = confirm(`You are about to transfer $${amount} from ${fromAccount} to ${toAccount}. Do you want to proceed?`);

	if (confirmation) {
			// 6: Process transferring
			alert("Processing your transfer...");

			// Success or failure
			let isSuccess = Math.random() > 0.1;
						if (isSuccess) {
								// 7: Success Message
								alert("Transfer successful! Thank you for using our service.");
						} else {
								// Handle a transfer failure
								alert("Transfer failed due to a network issue. Please try again later.");
						}
			} else {
						// If user cancels the transfer
						alert("Transfer cancelled.");
			}

	// 8: Exit
	alert("Goodbye!");
}

// Start the money transfer process
transferMoney();
