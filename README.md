# 📝 To-Do List App with React

A clean and modern To-Do List application built using **React.js**. It allows users to add, update, delete, complete, and manage daily tasks with ease. All tasks are saved in `localStorage`, so your data persists even after refreshing or closing the browser.

---

## 🛠️ Features

- ✅ **Add Tasks**: Enter and add new to-do items.
- ✏️ **Edit Tasks**: Update any existing task.
- ❌ **Delete Tasks**: Remove tasks with a **confirmation prompt**.
- ✔️ **Mark as Completed**: Toggle task completion.
- 🔁 **Cancel Edit**: Exit edit mode easily.
- 🗑️ **Clear All Tasks**: Reset the entire list.
- 💾 **Local Storage**: All tasks are saved in the browser's `localStorage`.

---

## 🧠 Technologies Used

- [React.js](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS (Custom Styling)

---

## 📂 Folder Structure

```
To-Do-List-React-App-/
├── public/
│   └── index.html
├── src/
│   ├── Todolist.jsx      # Core logic & UI
│   ├── Todolist.css      # Custom styles
│   ├── App.js            # Entry point for Todolist
│   └── index.js          # Renders the App component
└── package.json
```

---

## 📄 Todolist.jsx - Highlights

- Manages state using `useState`
- Stores/retrieves tasks from `localStorage` via `useEffect`
- Buttons with icons for **edit**, **delete**, and **toggle complete**
- Keyboard support for pressing `Enter` to add tasks
- Uses **conditional rendering** for:
  - Showing update/cancel buttons in edit mode
  - Hiding the task list if empty
- Prompts a confirmation message before deleting tasks

---

## 🎨 Todolist.css - Styling Highlights

- Custom hover effects and transitions
- Styled buttons with icon support
- Completed tasks show line-through and faded look
- Responsive and clean layout (max-width: 400px)

---

## 📦 Installation & Running Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ibsa-a1/To-Do-List-React-App-.git
   cd To-Do-List-React-App-
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the app:**

   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

---

## 🧩 Future Improvements (Ideas)

- Task categories or labels
- Due dates or reminders
- Drag-and-drop reordering
- Responsive design for mobile
- Light/Dark theme toggle
- Authentication (optional)

---

## 🙌 Author

Made with 💙 Developed by **Ibsa Abera**  
🔗 [GitHub Profile](https://github.com/ibsa-a1)

