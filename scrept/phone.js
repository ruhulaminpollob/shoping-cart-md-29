document.getElementById('phone-plus-btn').addEventListener('click', function () {
    const phoneMinusQuantity=changeQuantity(true,'phone-quantity');
    changePrice(phoneMinusQuantity, 1219, 'phone-price');
    const subTotal1=setTotal('phone-price', 'case-price', 'sub-total')
    const tax1=taxCalculate(subTotal1)
    setTotal('sub-total','tax-amount', 'final-total')
   
})
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    const phonePlusQuantity=changeQuantity(false,'phone-quantity');
    changePrice(phonePlusQuantity, 1219, 'phone-price')
    const subTotal2=setTotal('phone-price', 'case-price', 'sub-total')
    const tax2=taxCalculate(subTotal2)
    setTotal('sub-total','tax-amount', 'final-total')
})