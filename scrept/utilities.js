//set quantity
function changeQuantity(isIncrease, inputQuantity) {
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
    return newQuantity;
    
    // set price to sub total
    // const subTotal =document.getElementById('sub-total');
    
}
// set price
function changePrice(quantity,singlePrice, updatePrice) {
    const casePrice =document.getElementById(updatePrice);
    const caseNewPrice= singlePrice * quantity;
    casePrice.innerText=caseNewPrice;
}
//set price to sub total
function setTotal(sum1, sum2, totalValuePlace) {
    const subTotal=document.getElementById(totalValuePlace);
    const  phoneTotalPrice =document.getElementById(sum1)
    const phoneTotalPriceString=phoneTotalPrice.innerText;
    const phonePreviousTotalPrice = parseFloat(phoneTotalPriceString);

    const  caseTotalPrice =document.getElementById(sum2);
    const caseTotalPriceString=caseTotalPrice.innerText;
    const casePreviousTotalPrice = parseFloat(caseTotalPriceString);

    const totalTowDecimal = (phonePreviousTotalPrice + casePreviousTotalPrice).toFixed(2);
    const total =parseFloat(totalTowDecimal)
    subTotal.innerText =tota
    return total;   
}
function taxCalculate(total) {
    const getTax = document.getElementById('tax-amount');
    const calculateTaxDecimal=(total * 0.1).toFixed(2);
    const calculateTax=parseFloat(calculateTaxDecimal);
    getTax.innerText=calculateTax;
    return calculateTax;
}
    
