# Ratings & Review System

A full-stack web application that allows users to:

- Submit ratings and/or reviews for products  
- View summary of reviews including average rating and top tags  
- Prevent duplicate reviews from same user per product  
- Optionally attach a photo to each review

Built with **React.js**, **Node.js + Express**, **Sequelize**, and **SQLite** (for easy local setup).

---

## Tech Stack

- **React.js** – frontend
- **Node.js + Express.js** – backend REST APIs
- **Sequelize** – ORM for database interaction
- **SQLite** – file-based SQL database
- *(Easily switchable to PostgreSQL or MySQL if needed)*

---

## Database Schema

**Product Table**

| Column      | Type      | Constraints                | Description         |
| ----------- | --------- | -------------------------- | ------------------- |
| `id`        | INTEGER   | PRIMARY KEY, AUTOINCREMENT | Unique product ID   |
| `name`      | STRING    | NOT NULL                   | Name of the product |
| `createdAt` | TIMESTAMP | Auto-managed by Sequelize  | Creation timestamp  |
| `updatedAt` | TIMESTAMP | Auto-managed by Sequelize  | Update timestamp    |

**Review Table**

| Column       | Type      | Constraints                      | Description                   |
| ------------ | --------- | -------------------------------- | ----------------------------- |
| `id`         | INTEGER   | PRIMARY KEY, AUTOINCREMENT       | Unique review ID              |
| `productId`  | INTEGER   | FOREIGN KEY → Products(`id`)     | Associated product            |
| `userId`     | STRING    | NOT NULL                         | User who submitted the review |
| `rating`     | INTEGER   | Optional (1–5), CHECK constraint | Rating given (1 to 5)         |
| `reviewText` | TEXT      | Optional                         | Text review                   |
| `photoUrl`   | STRING    | Optional                         | URL to optional image         |
| `createdAt`  | TIMESTAMP | Auto-managed by Sequelize        | Review creation timestamp     |
| `updatedAt`  | TIMESTAMP | Auto-managed by Sequelize        | Review update timestamp       |


---


## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Cricketerboy/fitpage.git
