# Pizza order web app

Time：Nov. 2023

## Overview

### Project Purpose

The purpose of this project is to develop a web application that allows users to conveniently order pizza online. Designed by Jonas Schmedtmann and developed by me.

### My role

I am the Front-end Developer for the pizza ordering web app based on Jonas Schmedtmann's compelling design. Utilizing my expertise in JavaScript, React, JSX, HTML5, and Tailwind CSS, I coded the application. My focus was on creating an engaging user experience, ensuring every element of the UI was intuitive and responsive. Implementing features like a pizza menu, shopping cart and user orders, I ensured the app was not only visually striking but also functional and user-friendly.

## Challenges

1. **Remote State Management**：Complicated data Loading/Writing using **React Router** to get menu and create/update/delete/search for users and orders from RESTful APIs.
2. **Global State Management**: Use **Redux and Thunk middleware** to manage user/cart states, preventing overuse of prop drilling.
3. **Seamless User Experience**: Well-designed error handling, page loading and responsive experience across complicated page routes and data flow.

## Technologies Used

This is a Single-Page Appication(SPA) based on REACT, Javascript, JSX, HTML and CSS.

| Tasks                            | Tech Decisions |
| -------------------------------- | -------------- |
| Routing                          | React Router   |
| Styling                          | Tailwind CSS   |
| Remote State Management          | React Router   |
| UI State Management              | Redux and RTK  |
| Devlopment Server and Build Tool | Vite           |

## Features

### 1. User
   1.1 User can provide their info to start
<div align="center">
<img src="Screenshot 2023-11-16 at 10.54.21 am.png" alt="Mac" style="text-align: center;" height="500"/>
</div>

### 2. Menu
   2.1 User can view menu
   2.2 User can add items to the cart
   2.2 User can change the quantity of their item
   2.3 Sold-out items cannot be added
   2.4 Show Cart Overview at the bottom of the menu

<div align="center">
<img src="Screenshot 2023-11-16 at 10.55.30 am.png" alt="Mac" style="text-align: center;" height="500"/>
</div>

### 3. Cart
   3.1 User can view cart with their selected items
   3.2 User can change the quantity of items
   3.3 User can delete items from cart
   3.4 User can clear cart
   3.5 Show empty cart page when no item in cart
   3.6 User can submit their cart items

<div align="center">
<img src="Screenshot 2023-11-16 at 10.56.00 am.png" alt="Mac" style="text-align: center;" height="500"/>
</div>

### 4. Order
   4.1 User can input name, phone and address for the order
   4.2 Default name is filled for the user
   4.3 User can get their current location for the address
   4.4 User can create an order with their info and cart items
   4.5 User can view their order
   4.6 User can update their order
   4.6 User can search for their order using the order number

<div align="center">
<img src="Screenshot 2023-11-16 at 11.04.39 am.png" alt="Mac" style="text-align: center;" height="500"/>
<img src="Screenshot 2023-11-16 at 11.31.07 am.png" alt="Mac" style="text-align: center;" height="500"/>
</div>

### 5. iPhone View (Responsive web app)
<div align="center">
<img src="Screenshot 2023-11-16 at 11.16.11 am.png" alt="iPhone" style="text-align: center;" height="400"/>
<img src="Screenshot 2023-11-16 at 11.19.31 am.png" alt="iPhone" style="text-align: center;" height="400"/>
<img src="Screenshot 2023-11-16 at 11.02.14 am.png" alt="iPhone" style="text-align: center;" height="400"/>
<img src="Screenshot 2023-11-16 at 11.02.50 am.png" alt="iPhone" style="text-align: center;" height="400"/>
<img src="Screenshot 2023-11-16 at 11.03.11 am.png" alt="iPhone" style="text-align: center;" height="400"/>
</div>

## Source Code:

https://github.com/Aoruiii/pizza-order-project

### How to access

1. Download project files
2. Run `npm i` to install the npm packages
3. Run `npm run dev`
4. Visit `http://localhost:5173/`

## Suggestions and Feedbacks

Let me know if you have any comments or feedbacks to make this project better!
