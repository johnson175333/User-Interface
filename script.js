let balance = 1000;

// Update balance display
function updateBalance() {
    document.getElementById('balance').innerText = `$${balance}`;
}

// Deposit money
document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
        document.getElementById('deposit-amount').value = '';
    }
});

// Withdraw money
document.getElementById('withdrawal-btn').addEventListener('click', () => {
    const withdrawalAmount = parseFloat(document.getElementById('withdrawal-amount').value);
    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) {
        if (withdrawalAmount <= balance) {
            balance -= withdrawalAmount;
            updateBalance();
            document.getElementById('withdrawal-amount').value = '';
        } else {
            alert('Insufficient funds!');
        }
    }
});

// Initialize balance display
updateBalance();