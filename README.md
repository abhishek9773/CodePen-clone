# CodePan-clone

CodePan-clone is a web application that replicates the functionality and layout of CodePen, an online code editor and learning environment for front-end web development. This project allows users to create and share HTML, CSS, and JavaScript code snippets, offering a real-time preview of the results.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-time Code Editing:** Edit HTML, CSS, and JavaScript with live previews.
- **User Authentication:** Sign up and log in to save your code snippets.
- **Snippet Management:** Create, update, delete, and manage your code snippets.
- **Responsive Design:** Fully responsive design to work on all devices.
- **Syntax Highlighting:** Enhance code readability with syntax highlighting.
- **Code Sharing:** Share your code snippets with others using unique URLs.
- **Code Export:** Export your code snippets to local files.

## Tech Stack

- **Frontend:**

  - React
  - Tailwind CSS
  - Vite (as the build tool)

- **Backend:**
  - Firebase Auth (for authentication)
  - Firebase Firestore (for database)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abhishek9773/CodePan-clone.git
   cd CodePan-clone
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary environment variables. Example:

   ```env
   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-firebase-app-id
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## Usage

- **Creating a New Snippet:** Click on the "New Pen" button to start a new project.
- **Editing Code:** Use the HTML, CSS, and JavaScript panels to write your code. The preview will update in real-time.
- **Saving Snippets:** Log in to save your snippets. You can access them later from your profile.
- **Sharing Snippets:** Use the "Share" button to get a unique URL for your snippet that you can share with others.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request.**

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to contact:

- **Abhsihek kumar:** abhishekKumar.sde2024@gmail.com
- **GitHub:** [abhsihek9773](https://github.com/abhsihek9773)

---
