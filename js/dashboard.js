let depositCount = document.getElementById('depositCount');
let withdrowCount = document.getElementById('withdrowCount');
let balanceCount = document.getElementById('balanceCount');
let inputDeposit = document.getElementById('inputDeposit');
let depositBtn = document.getElementById('depositBtn');
let inputWithdrow = document.getElementById('inputWithdrow');
let withdrowBtn = document.getElementById('withdrowBtn');

depositBtn.addEventListener('click', function(){

    let inputDepositValue = inputDeposit.value;
    let inputDepositValueToNumber = parseFloat(inputDepositValue);

    let previousDeposit = depositCount.innerText;
    let previousDepositToNumber = parseFloat(previousDeposit);
    let previousBalance = balanceCount.innerText;
    let previousBalanceToNumber = parseFloat(previousBalance);

    let totalDeposit = inputDepositValueToNumber + previousDepositToNumber;
    let totalBalance = inputDepositValueToNumber + previousBalanceToNumber;
    depositCount.innerText = totalDeposit;
    balanceCount.innerText = totalBalance;

    inputDeposit.value= "";
});



withdrowBtn.addEventListener('click', function(){

    let inputWithdrowValue = inputWithdrow.value;
    let inputWithdrowValueToNumber = parseFloat(inputWithdrowValue);

    let previousWithdrow = withdrowCount.innerText;
    let previousWithdrowToNumber = parseFloat(previousWithdrow);
    let previousBalance = balanceCount.innerText;
    let previousBalanceToNumber = parseFloat(previousBalance);

    let totalWithdrow = inputWithdrowValueToNumber + previousWithdrowToNumber;
    let totalBalance = previousBalanceToNumber - inputWithdrowValueToNumber;
    withdrowCount.innerText = totalWithdrow;
    balanceCount.innerText = totalBalance;

    inputDeposit.value= "";
})