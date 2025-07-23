# WORDFLOW

![WordFlow Homepage](./final/homepage.png)
![WordFlow Mainpage](./final/app.png)

## 📚 ABOUT

WordFlow is a minimalist and engaging web application designed to help users expand their vocabulary through daily challenges. 

Forgetting a new word days after learning it is a common struggle. WordFlow tackles this problem head-on by transforming vocabulary building into an engaging and effective daily challenge. It's built for lifelong learners, students, and anyone looking to enrich their lexicon with advanced English words. The core philosophy is simple: consistent, intelligent practice is the key to long-term memory.

The core philosophy of WordFlow is to make learning new words a simple, enjoyable, and consistent habit.

## ✨ KEY FEATURES

* **🧠 Spaced Repetition System (SRS):** The application's core is a dynamic SRS engine that generates a 365-day learning plan. It intelligently schedules word reviews at increasing intervals (e.g., 1 day, 3 days, 7 days) to lock them into your long-term memory.
* **🎮 Gamified Learning:** Stay motivated with a streak counter that resets if you miss a 24-hour cycle. Track your accuracy and watch your "level" increase as you master more words.
* **💻 Local Persistence:** All your progress—your name, current day, history, and attempts—is saved directly in your browser's `localStorage`. You can close the tab and return at any time to seamlessly pick up where you left off.
* **✍️ Interactive Practice:** The challenge interface provides live, character-by-character feedback as you type the definition, turning practice into a satisfying puzzle.
* **📊 Progress Dashboard:** A central hub to view your current streak, total words seen, overall accuracy, and a history of your past streaks.
* **🎨 Sleek & Modern UI:** A clean, responsive, and beautifully designed interface built with React and custom CSS.

## 💻 TECH STACK

This project is built with a modern frontend stack:

*   **[React](https://react.dev/):** A JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/):** A next-generation frontend tooling that provides a faster and leaner development experience.
*   **ESLint:** For identifying and reporting on patterns found in ECMAScript/JavaScript code.
*   **[https://www.fantacss.smoljames.com/]FantaCSS:** Custom CSS for styling the application.

## 🚀 GETTING STARTED

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username/wordflow.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd wordflow
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the development server**
    ```sh
    npm run dev
    ```
    Your application should now be running on `http://localhost:5173/` (or the next available port).

## 📂 PROJECT STRUCTURE

The project follows a standard React application structure:

```
wordflow/
├── public/              # Static assets
├── src/
│   ├── assets/          # Image assets
│   ├── components/      # Reusable React components
│   │   ├── layouts/     # Layout components (e.g., Dashboard, Challenge)
│   │   ├── Countdown.jsx
│   │   ├── History.jsx
│   │   ├── ProgressBar.jsx
│   │   └── ...
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point of the application
│   └── index.css        # Global CSS styles
├── .gitignore
├── eslint.config.js
├── index.html           # Main HTML file
├── package.json
└── vite.config.js
```

## 🙏 ACKNOWLEDGEMENTS

A huge thank you to the following resources which made this project possible:

*   **[React](https://react.dev/)** and **[Vite](https://vitejs.dev/)** for the incredible development experience.
*   **[FantaCSS](https://www.fantacss.smoljames.com/)** for the simple and elegant CSS styling.
*   The open-source community for providing the tools and libraries that power this application.

## 🌟 JOIN THE FLOW!

Find this project useful or interesting? I'd love to hear from you!

*   **Star the repo** on GitHub if you like it!
*   **Share it** with friends or colleagues who might be interested.

Happy learning!
