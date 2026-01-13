# Communication Style Quiz

A React-based interactive quiz designed to help users identify their primary communication style (Red, Blue, Green, or Balanced) based on advanced negotiation techniques.

## Features

- **Interactive Quiz:** 27 questions with a weighted scoring system (0, 3, 7, 10) to prevent neutral bias.
- **Smart Analysis:** Calculates results based on Action (Red), People (Blue), and Idea (Green) orientations.
- **Multi-language Support:** Fully localized in English, Portuguese (PT), and Spanish (ES).
- **Data Persistence:** Automatically saves user progress to LocalStorage, allowing users to return without losing data.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Core:** React.js (v19)
- **Routing:** React Router DOM (v6)
- **Internationalization:** i18next & react-i18next
- **Styling:** CSS3 with Flexbox/Grid

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the application:**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

- `src/components/Quiz.js`: Core logic for state management and validation.
- `src/components/Results.js`: algorithm for calculating the communication style profile.
- `src/i18n.js`: Configuration for language translation resources.

---

_Created by Prof. Leandro Jr_
