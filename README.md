
# User Registration Form (Node.js + MongoDB)

A simple **User Registration web application** built using **Node.js, Express, MongoDB (Mongoose)** and **Tailwind CSS**.  
The project allows users to submit their **name and email**, stores the data in MongoDB, and shows a **green success tick** after successful submission.

---

## 🚀 Features

- User-friendly registration form
- Tailwind CSS modern UI
- Form submission using Fetch API (AJAX)
- Data stored in MongoDB
- Green ✔ success indicator after submit
- Express REST API
- Clean and beginner-friendly code structure

---

## 🛠 Tech Stack

- **Frontend:** HTML, Tailwind CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)

---

## 📁 Project Structure

```

project-folder/
│
├── app.js          # Express server & MongoDB logic
├── index.html      # Frontend UI
├── package.json
├── node_modules/
└── README.md

````

---

## ⚙ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

### 4️⃣ Run the Server

```bash
node app.js
```

Server will run at:

```
http://localhost:5000
```

---

## 🌐 Usage

Open your browser and visit:

```
http://localhost:5000/users
```

Fill in the form and submit.
On successful submission:

* Data is saved in MongoDB
* A **green ✔ success tick** appears

---

## 🗄 Database Details

* **Database Name:** `myDatabase`
* **Collection Name:** `users`

Sample document:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2025-01-01T10:30:00.000Z"
}
```

---

## 📌 API Endpoints

| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| GET    | /users   | Serve HTML form |
| POST   | /submit  | Save user data  |

---

## 🔮 Future Improvements

* Display all registered users
* Email validation & duplication check
* Edit & delete user records
* Authentication (Login / Signup)
* Deploy to cloud (Render / Railway / AWS)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

### ⭐ If you like this project, give it a star!

```


```
