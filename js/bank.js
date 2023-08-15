// deposit, withdraw and total balance
function deposit(newAmount){
     // deposit
     const bankDepositAmountInText =  document.getElementById('bank-deposit-amount');
     
     const previousDepositAmountInNumber = parseInt(bankDepositAmountInText.innerText);
    //  console.log(bankDepositAmountInNumber);
     const newDepositAmount = previousDepositAmountInNumber + newAmount;
     bankDepositAmountInText.innerText = newDepositAmount;

     total(newAmount, 'd');
 
}
function withdraw(newAmount){
    // withdraw
    const bankWithdrawAmountInText =  document.getElementById('bank-withdraw-amount');
    const previousWithdrawAmountInNumber = parseInt(bankWithdrawAmountInText.innerText);
    const newWithdrawAmount = previousWithdrawAmountInNumber + newAmount;
    
    // console.log(bankWithdrawAmountInNumber);
    bankWithdrawAmountInText.innerText = newWithdrawAmount;
    total(newAmount, 'w');
 
    
}

function total(newAmount, transaction){
    // total balance
    const bankTotalAmountInText =  document.getElementById('total-balance');
    const bankTotalAmountInNumber = parseInt(bankTotalAmountInText.innerText);
    let newBalance;
    console.log(bankTotalAmountInNumber);
    if(transaction === 'd'){
       newBalance = bankTotalAmountInNumber + newAmount; 
    }
    else{        
        newBalance = bankTotalAmountInNumber - newAmount;
    }
    if(newAmount > bankTotalAmountInNumber && transaction === 'w'){
        window.alert('baap er bank e eto tk nai');
    }
    else{
        bankTotalAmountInText.innerText = newBalance;
    }
    
}

//  check validation whether a input given is number or not
function inputChecker(input){
    console.log('i am working');
    if(isNaN(input)){
        window.alert('i am not a number');
        
    }
    else{
        return true;
    }
}
 
 document.getElementById('deposit-btn').addEventListener('click',function(){
    const depostAmountContainer = document.getElementById('users-deposit-amount');
    const depositAmountInText = depostAmountContainer.value;
    const depositAmountInNumber = parseInt(depositAmountInText);
    console.log(depositAmountInNumber);

    if(inputChecker(depositAmountInNumber)){
        deposit(depositAmountInNumber);
    }

    depostAmountContainer.value = '';
    
 })

 document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawAmountContainer = document.getElementById('users-withdraw-amount');
    const withdrawAmountInText = withdrawAmountContainer.value;
    const withdrawAmountInNumber = parseInt(withdrawAmountInText);
    console.log(withdrawAmountInNumber);

    if(inputChecker(withdrawAmountInNumber)){
        withdraw(withdrawAmountInNumber)
    };

    withdrawAmountContainer.value = '';
 })