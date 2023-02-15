function changeQuantity(isIncrease, inputQuantity, singlePrice, updatePrice) {
    const caseQuantityFiled =document.getElementById(inputQuantity);
    const caseQuantityFiledString =caseQuantityFiled.value;
    const caseQuantityPreviousValue =parseInt(caseQuantityFiledString);
    let newQuantity;
    if (isIncrease) {
        newQuantity=caseQuantityPreviousValue + 1;
    }else{
        newQuantity=caseQuantityPreviousValue - 1;
    }
    caseQuantityFiled.value = newQuantity;
    //set price
    const casePrice =document.getElementById(updatePrice);
    const casePriceString=casePrice.innerText;
    // const casePreviousPrice=parseFloat(casePriceString);
    const caseNewPrice= singlePrice * newQuantity;
    casePrice.innerText=caseNewPrice;
}


document.getElementById('case-plus-btn').addEventListener('click', function () {
    changeQuantity(true,'case-quantity-input', 59, 'case-price');
    
    
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    changeQuantity(false,'case-quantity-input', 59, 'case-price');
})
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    changeQuantity(true,'phone-quantity', 1219, 'phone-price');
})
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    changeQuantity(false,'phone-quantity', 1219, 'phone-price');
})

