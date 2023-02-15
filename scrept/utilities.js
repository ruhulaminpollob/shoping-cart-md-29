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
    const caseNewPrice= singlePrice * newQuantity;
    casePrice.innerText=caseNewPrice;
}
