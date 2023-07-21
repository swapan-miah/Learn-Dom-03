let depositCount = document.getElementById('depositCount');
let withdrowCount = document.getElementById('withdrowCount');
let balanceCount = document.getElementById('balanceCount');
let inputDeposit = document.getElementById('inputDeposit');
let depositBtn = document.getElementById('depositBtn');
let inputWithdrow = document.getElementById('inputWithdrow');
let withdrowBtn = document.getElementById('withdrowBtn');
let outputError = document.getElementById('error');
let outputErrors = document.getElementById('errors');

depositBtn.addEventListener('click', function(){

    if (inputDeposit.value == '') {
        inputDeposit.style.border = '2px solid red';
        outputError.innerText = 'Input Your Amount number';
        
    }else{
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
    
        inputDeposit.value = "";
    }

});



withdrowBtn.addEventListener('click', function(){

    if(inputWithdrow.value == '') {

        inputWithdrow.style.border = '2px solid red';
        outputErrors.innerText = 'Input Your Amount number';
        
    }else{

    
        let inputWithdrowValue = inputWithdrow.value;
        let inputWithdrowValueToNumber = parseFloat(inputWithdrowValue);

        let previousWithdrow = withdrowCount.innerText;
        let previousWithdrowToNumber = parseFloat(previousWithdrow);
        let previousBalance = balanceCount.innerText;
        let previousBalanceToNumber = parseFloat(previousBalance);

        if (inputWithdrow.value > previousBalanceToNumber  ) {
            inputWithdrow.style.border = '2px solid red';
            outputErrors.innerText = 'Your Account Balance is low';
            
        }else{

            let totalWithdrow = inputWithdrowValueToNumber + previousWithdrowToNumber;
            let totalBalance = previousBalanceToNumber - inputWithdrowValueToNumber;
            withdrowCount.innerText = totalWithdrow;
            balanceCount.innerText = totalBalance;

            inputDeposit.value= "";

        }

    }

});