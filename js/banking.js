



document.getElementById('deposit-button').addEventListener('click',function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;

    const newDepositAmount = parseFloat(newDepositAmountText);

    //update deposit total 

    const depositTotal =document.getElementById('deposit-total');

    const previousDepositText=depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    
    const newDepositTotal = previousDepositAmount+newDepositAmount;

    depositTotal.innerText = newDepositTotal; 

//update account balance 
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalancTotal = previousBalanceTotal + newDepositAmount; 
 
balanceTotal.innerText = newBalancTotal ;
    //clear the deposit input field
    depositInput.value ='';

})

//withdrawAmoun 

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount =  parseFloat (withdrawAmountText);
    console.log(newWithdrawAmount);

  
    //set withdraw total
     
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal =  parseFloat (previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
  

    //total -balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalancTotal = previousBalanceTotal-newWithdrawAmount;
     

    balanceTotal.innerText = newBalancTotal ;

    //clear the withdraw input field
    withdrawInput.value ='';
 
})
