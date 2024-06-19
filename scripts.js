document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total');

    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('input').value);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    cartItems.addEventListener('click', function (event) {
        if (event.target.classList.contains('plus-btn')) {
            const quantityInput = event.target.previousElementSibling;
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotalPrice();
        } else if (event.target.classList.contains('minus-btn')) {
            const quantityInput = event.target.nextElementSibling;
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotalPrice();
            }
        } else if (event.target.classList.contains('delete-btn')) {
            event.target.closest('.cart-item').remove();
            updateTotalPrice();
        } else if (event.target.classList.contains('like-btn')) {
            event.target.classList.toggle('liked');
        }
    });

    document.querySelectorAll('.quantity input').forEach(input => {
        input.addEventListener('change', function () {
            if (input.value < 1) {
                input.value = 1;
            }
            updateTotalPrice();
        });
    });

    updateTotalPrice();
});
