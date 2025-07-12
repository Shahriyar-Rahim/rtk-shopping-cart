# RTK Shopping Cart App

![App Screenshot/Banner](/public/BannerGit.png)
## Project Title: Shopping Cart with Redux Toolkit (RTK)

## Description

This is a comprehensive **Shopping Cart Application** built to demonstrate robust state management using **Redux Toolkit (RTK)**. Users can browse products, add them to their cart, and manage quantities directly within the cart page. A key feature is the administrative capability to add new products to the homepage via a simple form, showcasing how RTK can efficiently handle complex application states, including product listings and cart management.

## Live Demo

Experience the live Shopping Cart application here: https://rtk-shopping-cart-pink.vercel.app/

## Features

* **Product Browse:** View a list of available products on the homepage.
* **Add to Cart:** Users can add products from the homepage to their shopping cart.
* **Cart Management:**
    * **Update Quantity:** Increase or decrease the quantity of items in the cart.
    * **Remove Product:** Delete items from the cart.
* **Admin Product Addition:** A dedicated form (likely handled by React Hook Form) allows "admins" to add new products to the display by providing details like name, price, description, category, and date. This demonstrates state updates for product listings.
* **State Management with RTK:** The core focus is on showcasing efficient and streamlined state handling using Redux Toolkit for both product data and shopping cart logic.
* **Responsive Design:** Ensures a smooth and consistent user experience across various devices, likely enhanced by DaisyUI components.

## Technologies Used

This project is built with a modern React ecosystem, emphasizing advanced state management with Redux Toolkit and efficient UI development:

* **React.js:** The primary JavaScript library for building dynamic and interactive user interfaces.
* **Vite:** A fast build tool that provides an optimized and rapid development environment.
* **Tailwind CSS:** A utility-first CSS framework for quickly and flexibly styling the application's components.
* **DaisyUI:** A Tailwind CSS component library that provides pre-built, styled components for faster UI development.
* **Redux Toolkit (RTK):** The official, opinionated, batteries-included toolset for efficient Redux development, used extensively for managing global application state (products, cart).
* **React Redux:** Official React bindings for Redux, connecting React components to the Redux store.
* **React Hook Form:** For efficient and flexible form validation and management (used in the product addition form).
* **React Router:** For declarative routing within the single-page application.
* **React Icons:** For easily including popular icon libraries in React projects.
* **Redux Thunk:** Middleware for Redux that allows you to write action creators that return a function instead of an action (useful for async operations).
* **Redux Logger:** A simple logger for Redux, useful for debugging state changes in the console.

### Dependencies from `package.json`:

* `@reduxjs/toolkit`: ^2.8.2
* `@tailwindcss/vite`: ^4.1.11
* `react`: ^19.1.0
* `react-dom`: ^19.1.0
* `react-hook-form`: ^7.60.0
* `react-icons`: ^5.5.0
* `react-redux`: ^9.2.0
* `react-router`: ^7.6.3
* `redux-logger`: ^3.0.6
* `redux-thunk`: ^3.1.0
* `tailwindcss`: ^4.1.11

### Development Dependencies from `package.json`:

* `@eslint/js`: ^9.30.1
* `@types/react`: ^19.1.8
* `@types/react-dom`: ^19.1.6
* `@vitejs/plugin-react`: ^4.6.0
* `daisyui`: ^5.0.46
* `eslint`: ^9.30.1
* `eslint-plugin-react-hooks`: ^5.2.0
* `eslint-plugin-react-refresh`: ^0.4.20
* `globals`: ^16.3.0
* `vite`: ^7.0.3

## Installation and Local Setup

To get a copy of this project running on your local machine for development and testing, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shahriyar-Rahim/rtk-shopping-cart.git
    cd rtk-shopping-cart
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically open in your web browser at `http://localhost:5173` (or a similar port provided by Vite).

## Usage

Once the application is running:

1.  **Browse Products:** On the homepage, you'll see a list of products.
2.  **Add to Cart:** Click the "Add to Cart" button on any product to add it to your shopping cart.
3.  **View Cart:** Navigate to the "Cart" page (usually via a cart icon or link in the header).
4.  **Manage Cart:**
    * On the cart page, use the `+` and `-` buttons to adjust product quantities.
    * Click the "Remove" or "X" button to delete a product from your cart.
5.  **Add Products (Admin View):** Locate the product addition form (check the application's navigation or layout). Fill in the product details (name, price, description, category, date) and submit the form to add a new product to the display, demonstrating the RTK state update.

## Contributing

Contributions, issues, and feature requests are highly encouraged! If you have ideas for improvements, new features, or find any bugs, please feel free to fork the repository and open a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is open-source and distributed under the **MIT License**. See the `LICENSE` file in the repository for full details.

## Contact

Shahriyar Rahim - [Your Email Address (Optional)]

Project Link: https://github.com/Shahriyar-Rahim/rtk-shopping-cart