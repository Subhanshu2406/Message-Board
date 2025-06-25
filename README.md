# 📬 Subhanshu's Message Board

A simple, clean, and responsive message board web app built using **Node.js**, **Express**, and **EJS**.

Users can:
- View messages left by others
- Post new messages with a name and message body
- View individual message details

---

## 🚀 Features

- Express.js server with MVC structure
- EJS templating engine for dynamic views
- Styled with responsive CSS
- Clean error handling
- In-memory database (no setup required)

---

## 📁 Project Structure

subhanshu2406-message-board/
├── app.js                  # Entry point of the app
├── db.js                   # In-memory data storage
├── controllers/            # Message logic
├── routes/                 # Route definitions
├── views/                  # EJS templates
├── public/                 # Static assets (CSS, images)
├── errors/                 # Custom error classes
└── package.json            # Dependencies

---

## 💡 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/Subhanshu2406/Message-Board.git
   cd Message-Board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   node app.js
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## 🧠 Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **HTML/CSS**
- No database required (messages stored in memory)

---

## 📌 Note

This project uses an in-memory array to store messages. All data is lost on server restart. To make it persistent, you can integrate MongoDB or SQLite.

---

## ✍️ Author

**Subhanshu Gupta**  
GitHub: [@Subhanshu2406](https://github.com/Subhanshu2406)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

