📝 Code/Notes Saver React App
A simple and elegant React application to save and manage your code snippets or notes locally. Built with React, Redux, Tailwind CSS, and React Router. This app allows you to save, view, edit, copy, share, and delete your pastes, all stored in the browser's local storage. 🚀

🌟 Features
Home Page: A clean UI to add new pastes with a title and content.
Pastes Page: Displays all saved pastes with functionality to:
👀 View: View the full content of a paste.
✏️ Edit: Update the title or content of a paste.
📋 Copy: Copy the paste content to the clipboard.
🔗 Share: Generate a shareable link (local storage-based).
🗑️ Delete: Remove a paste permanently.
Local Storage: All pastes are saved in the browser's local storage for persistence.
Routing: Seamless navigation between the Home and Pastes pages using React Router.
Tailwind CSS: Stylish and responsive design powered by Tailwind CSS.

🛠️ Technologies Used
React: Frontend library for building user interfaces.
Redux: State management for handling pastes.
Tailwind CSS: Utility-first CSS framework for styling.
React Router: For routing between pages.
Local Storage: To store and retrieve pastes in the browser.

🚀 Getting Started
Prerequisites
Node.js and npm installed on your machine.

Installation
1. Clone the repository:
git clone https://github.com/your-username/Code-Notes-Saver-React-App.git
cd Code-Notes-Saver-React-App

2. Install dependencies:
npm install

3. Run the app:
npm start

4. Open your browser and visit:
http://localhost:3000

🖼️ Screenshots
Home Page
![31NUlRl3eAL _AC_](https://github.com/user-attachments/assets/27c39a0d-2cc0-4024-89fa-3dc81ee7afe4)
Add new pastes with a title and content.

Pastes Page
View, edit, copy, share, or delete your saved pastes.

📂 Folder Structure
Code-Notes-Saver-React-App/
├── public/
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Home and Pastes pages
│   ├── redux/              # Redux store, slices, and actions
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── styles/             # Tailwind CSS or custom styles
├── package.json
├── README.md
└── tailwind.config.js      # Tailwind CSS configuration

🧩 Key Components
1. Home Page
A form to add a new paste with a title and content.
On submission, the paste is saved to Redux state and local storage.

2. Pastes Page
Displays a list of all saved pastes.
Each paste card includes:
    Title and truncated content.
    Buttons for View, Edit, Copy, Share, and Delete.

3. Redux Slice
Manages the state of pastes.
Handles actions like adding, editing, and deleting pastes.

4. Local Storage Integration
Pastes are saved to and retrieved from localStorage for persistence.

🛠️ Functionality Breakdown
1. Add a New Paste
Fill in the title and content on the Home Page.
Click "Save" to store the paste in Redux and local storage.

2. View a Paste
Click the 👀 View button on a paste card to see the full content.

3. Edit a Paste
Click the ✏️ Edit button to update the title or content.
Changes are saved to Redux and local storage.

4. Copy a Paste
Click the 📋 Copy button to copy the paste content to the clipboard.

5. Share a Paste
Click the 🔗 Share button to generate a shareable link (local storage-based).

6. Delete a Paste
Click the 🗑️ Delete button to remove the paste permanently.

🎨 Styling with Tailwind CSS
The app uses Tailwind CSS for a modern and responsive design.
Example:
<div className="bg-gray-100 p-4 rounded-lg shadow-md">
  <h2 className="text-xl font-bold">{paste.title}</h2>
  <p className="text-gray-700">{paste.content}</p>
</div>

📝 Future Improvements
Add user authentication to save pastes per user.
Implement a backend to store pastes in a database.
Add syntax highlighting for code snippets.
Allow categorization of pastes with tags.

🙏 Credits
Built Omkar Tarle.
Inspired by the need for a simple code/notes saver app.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
