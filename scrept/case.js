
document.getElementById('case-plus-btn').addEventListener('click', function () {
    const casePlusQuantity =changeQuantity(true,'case-quantity-input', 59, 'case-price');
    changePrice(casePlusQuantity, 59, 'case-price')    
    const subTotal3=setTotal('phone-price', 'case-price', 'sub-total')
    const tax3=taxCalculate(subTotal3);
    setTotal('sub-total','tax-amount', 'final-total')
    
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    const caseMinusQuantity =changeQuantity(false,'case-quantity-input');
    changePrice(caseMinusQuantity, 59, 'case-price')
    const subTotal4=setTotal('phone-price', 'case-price', 'sub-total')
    const tax4=taxCalculate(subTotal4)
    setTotal('sub-total','tax-amount', 'final-total')
})


