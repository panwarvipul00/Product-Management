# Product Management App

This is a simple Product Management application built using **React** and **Tailwind CSS**.  
The project is completely frontend-based and stores all data in memory without using any backend or database.

---

## Features

- Add new products with basic validation
- Edit existing product details
- Delete products from the list
- Search products by name (with debounce)
- Toggle between List View and Grid View
- Pagination for better data handling
- Responsive UI with gradient styling
- Reusable components and clean structure

---

## Product Fields

Each product contains the following fields:

- **Name** (required)
- **Price** (number, required)
- **Category** (required)
- **Stock** (number, optional)
- **Description** (optional)

---

## Tech Stack

- React (Functional Components + Hooks)
- Tailwind CSS
- JavaScript (ES6)
- Vite (for project setup)

---

## How the App Works

- Products are stored in React state (in-memory only)
- A single form is reused for both adding and editing products
- When clicking on Edit, product data is loaded into the form
- Pagination is handled using array slicing
- Search input uses a 500ms debounce for better performance
- No backend or API integration is used

---


---

## Limitations

- Data is not persisted (data will reset on page refresh)
- No backend or database is used
- Authentication is not included

---

## Future Improvements

- Store data in localStorage or database
- Add confirmation before deleting a product
- Add sorting by price or category
- Improve UI animations

---

## Author

This project was built as part of a frontend assignment to demonstrate understanding of React fundamentals, state management, and basic UI logic.

