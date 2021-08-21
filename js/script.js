function addExtraCost(extraExpense, cost) {
    // set values for extra addition
    document.getElementById(extraExpense).innerText = cost;
}

// calculate total price of mac book pro
function calculateTotal() {
    // calculate total price
    document.getElementById('total-price').innerText = parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText);

    // update footer total price
    document.getElementById('total-price-footer').innerText = parseInt(document.getElementById('total-price').innerText);
}

// click event handler for 8GB unified memory button
document.getElementById('btn-memory-8gb').addEventListener('click', function () {
    addExtraCost('extra-memory-cost', 0);
    calculateTotal();
});

// click event handler for 16GB unified memory button
document.getElementById('btn-memory-16gb').addEventListener('click', function () {
    addExtraCost('extra-memory-cost', 180);
    calculateTotal();
});

// click event handler for 256GB SSD storage button
document.getElementById('btn-storage-256gb').addEventListener('click', function () {
    addExtraCost('extra-storage-cost', 0);
    calculateTotal();
});

// click event handler for 512GB SSD storage button
document.getElementById('btn-storage-512gb').addEventListener('click', function () {
    addExtraCost('extra-storage-cost', 100);
    calculateTotal();
});

// click event handler for 1TB SSD storage button
document.getElementById('btn-storage-1tb').addEventListener('click', function () {
    addExtraCost('extra-storage-cost', 180);
    calculateTotal();
});

// click event handler for free delivery button
document.getElementById('delivery-on-25th-btn').addEventListener('click', function () {
    addExtraCost('delivery-charge', 0);
    calculateTotal();
});

// click event handler for fast delivery charge button
document.getElementById('delivery-on-21st-btn').addEventListener('click', function () {
    addExtraCost('delivery-charge', 20);
    calculateTotal();
});

// discount allowed when coupon code is provided
document.getElementById('basic-addon2').addEventListener('click', function () {

    if (document.getElementById('coupon-code-input').value.toLowerCase() === 'stevekaku') {
        document.getElementById('total-price-footer').innerText = parseInt(document.getElementById('total-price').innerText) - (parseInt(document.getElementById('total-price').innerText) * (20 / 100));
        document.getElementById('coupon-code-input').value = '';
    }
});