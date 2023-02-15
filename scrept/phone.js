document.getElementById('phone-plus-btn').addEventListener('click', function () {
    changeQuantity(true,'phone-quantity', 1219, 'phone-price');
})
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    changeQuantity(false,'phone-quantity', 1219, 'phone-price');
})