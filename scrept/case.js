
document.getElementById('case-plus-btn').addEventListener('click', function () {
    changeQuantity(true,'case-quantity-input', 59, 'case-price');
    
    
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    changeQuantity(false,'case-quantity-input', 59, 'case-price');
})


