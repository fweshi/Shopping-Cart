# Shopping-Cart

This is a simple shopping cart application built with HTML, CSS, and JavaScript. The application allows users to:

1. Adjust the quantity of each item using "+" and "-" buttons.
2. Delete items from the cart.
3. Like items using a clickable heart-shaped button that changes color accordingly.
4. See the total price adjusted according to the quantity and deletions.

## Project Structure
shopping-cart/
│
├── index.html
├── styles.css
├── script.js
└── images/
├── Book1.png
├── Dish rack -1.jpg
├── drone.jpg
├── iWatch.jpg
├── Kitchen-imgII.jpg

## Setup

1. Clone the repository or download the source code.
2. Ensure you have the images for the items in the `images` directory or update the paths in the HTML file to match your images.
3. Open `index.html` in a web browser to see the shopping cart in action.

## Files

### index.html

This file contains the HTML structure of the shopping cart. It includes five items, each with an image, name, price, quantity controls, a delete button, and a like button.

### styles.css

This file contains the CSS styles for the shopping cart. It uses a grid layout to arrange the items and provides styles for the delete and like buttons, quantity controls, and overall cart layout.

### script.js

This file contains the JavaScript code to handle the functionality of the shopping cart. It includes event listeners for adjusting item quantities, deleting items, liking items, and updating the total price dynamically.

## Features

1. **Quantity Adjustment**: Users can increase or decrease the quantity of each item using the "+" and "-" buttons. The total price updates accordingly.
2. **Delete Items**: Users can remove items from the cart by clicking the "x" button. The total price updates accordingly.
3. **Like Items**: Users can like items by clicking the heart-shaped button. The button changes color to indicate the liked status.
4. **Total Price Calculation**: The total price is calculated dynamically based on the quantity and deletion of items.

## Screenshots

![Shopping Cart](screenshot.png)

## License

This project is licensed under the MIT License.

## Acknowledgements

- Icons used for the like button.
- Placeholder images for the items.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Contact

For any inquiries or questions, please contact [abelfweshi@gmail.com].
