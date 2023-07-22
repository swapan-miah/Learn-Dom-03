let depositBtn = document.getElementById('depositBtn');
let withdrowBtn = document.getElementById('withdrowBtn');

depositBtn.addEventListener('click', function(){

    let inputDepositBoxId = inputBoxes('depositInputBox','error');
    let previousDepositValue = previousBalanceBoxes('previousDepositAmount');
    let previousBalanceValue = previousBalanceBoxes('previousBalanceAmount');

    calculatAmount('previousDepositAmount', inputDepositBoxId, previousDepositValue, previousBalanceValue, true);
});

withdrowBtn.addEventListener('click', function(){

    let inputWithdrowBoxId = inputBoxes('withdrowInputBox', 'errors');
    let previousWithdrowValue = previousBalanceBoxes('previousWithdrowAmount');
    let previousBalanceValue = previousBalanceBoxes('previousBalanceAmount');

    if(inputWithdrowBoxId > previousBalanceValue){
        document.getElementById('withdrowInputBox').style.border = '2px solid red'
        document.getElementById('errors').innerText = 'Your Account Balance is Low';
    }else{

        calculatAmount('previousWithdrowAmount', inputWithdrowBoxId, previousWithdrowValue, previousBalanceValue, false);
    }


});



function inputBoxes(inputBoxId, errorId){

    let inputBox = document.getElementById(inputBoxId);
    let inputBoxValue = inputBox.value;

    if(inputBoxValue == ''){

        inputBox.style.border = '2px solid red';
        document.getElementById(errorId).innerText = 'Input a Number';

        return inputBoxValueToNumber;
    }else{

        let inputBoxValueToNumber = parseFloat(inputBoxValue);

        inputBox.value = '';
        return inputBoxValueToNumber;
    }

}


function previousBalanceBoxes(previousBalanceId) {
    
    let previousBalanceBox = document.getElementById(previousBalanceId);
    let previousBalance = previousBalanceBox.innerText;
    let previousBalanceToNumber = parseFloat(previousBalance);

    previousBalanceBox.value = '';
    return previousBalanceToNumber;
}



function calculatAmount(inputCalculateId, previousAmountId, previousbalanceId, currentbalanceId, plusOrMainas) {

    let calculate = document.getElementById(inputCalculateId);
    let totalDeposit = previousAmountId + previousbalanceId;
    calculate.innerText = totalDeposit;

    if(plusOrMainas == true){
        let totalBalance = previousAmountId + currentbalanceId;
        document.getElementById('previousBalanceAmount').innerText = totalBalance;

    }else{

        let totalBalance = currentbalanceId  - previousAmountId;
        document.getElementById('previousBalanceAmount').innerText = totalBalance;
    }

};


















/* 
let depositCount = document.getElementById('previousDepositAmount');
let withdrowCount = document.getElementById('previousWithdrowAmount');
let balanceCount = document.getElementById('previousBalanceAmount');
let inputDeposit = document.getElementById('depositInputBox');
let depositBtn = document.getElementById('depositBtn');
let inputWithdrow = document.getElementById('withdrowInputBox');
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

            inputWithdrow.value = "";

        }

    }

}); */