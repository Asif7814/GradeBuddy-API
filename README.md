# GradeBuddy API

GradeBuddy is a comprehensive academic tool that helps students track their grades, manage courses, and calculate their GPA. With features like assignment tracking, goal setting, and performance analytics, GradeBuddy makes it easy to stay on top of your academic journey, all in a user-friendly and intuitive interface.

## Project Status: 🚧 Work in Progress (WIP)

## Features

-   **User Authentication**: Secure login and registration with Google OAuth.
-   **Grade Tracking**: Keep track of your grades across courses and assignments.
-   **GPA Calculation**: Automatically calculate and display your GPA.
-   **Course Management**: Add, edit, and organize your courses by semester.
-   **Assignment Tracking**: Input and track assignments, exams, and projects.
-   **Kanban and Calendar Views**: Visualize your workload in a Kanban board or calendar format.
-   **Goal Setting**: Set academic goals and track your progress.
-   **Performance Analytics**: Analyze trends in your grades and performance.

## Technologies Used

-   **Backend**: Node.js, Express.js, MongoDB
-   **Authentication**: Google OAuth
-   **Deployment**: Render

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Asif7814/gradebuddy.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd gradebuddy
    ```

3. **Install dependencies:**

    ```bash
    npm i
    ```

4. **Set up environment variables:**

-   Create a .env file in the root directory with the following:

    ```bash
    MONGODB_URI=your_mongodb_uri

    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    SESSION_SECRET=your_session_secret
    ```

5. **Run the application:**

    ```bash
    npm run start OR npm run dev
    ```

## API Endpoints

### Authentication

-   **POST /auth/google**: Authenticate using Google OAuth

### Semesters

-   **GET /semesters**: Retrieve all semesters for the authenticated user
-   **POST /semesters**: Create a new semester

### Courses

-   **GET /courses**: Retrieve all courses for a specific semester
-   **POST /courses**: Add a new course to a semester

### Deliverables

-   **GET /deliverables**: Retrieve all deliverables for a specific course
-   **POST /deliverables**: Add a new deliverable to a course

## Contact

Created by [Asif Ashadullah](https://www.linkedin.com/in/asifashadullah/) - feel free to contact me!
