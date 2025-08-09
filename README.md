<img width="3188" height="1202" alt="frame (3)" src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" />


# Badalink 🎯


## Basic Details
### Team Name: Byte


### Team Members
- Team Lead: Adhil P A - COLLEGE OF ENGINEERING MUNNAR
- Member 2: Mohammed Bilal P N - [COLLEGE OF ENGINEERING MUNNAR]

### Project Description
Badalink is a fun web app that does the exact opposite of a URL shortener. It transforms any boring web link into a ridiculously long, funny, and memorable sentence that still works perfectly as a shareable link.

### The Problem (that doesn't exist)
For too long, the web has been dominated by the tyranny of the URL shortener. We are told that "shorter is better," but we disagree. This obsession with digital minimalism has created a boring, soulless internet. Badalink is the solution for the brave few who believe links should be long, chaotic, and ridiculously entertaining.

### The Solution (that nobody asked for)
We have created Badalink, a revolutionary platform dedicated to fighting back against the tyranny of digital minimalism. We provide a sanctuary where links can be free, expressive, and gloriously long. By processing your URL through our "Narrative Expansion Engine," we ensure that every link you share is not just a destination, but a journey in itself. Join the movement—make your links inconveniently long and wonderfully weird.

## Technical Details
### Technologies/Components Used
For Software:
- Languages used - JavaScript,HTML5,CSS3
- Frameworks used - Node.js
- Libraries used - Express.js
- Tools used - Visual Studio Code as the primary code editor.
  Git for version control.
  GitHub for hosting the code repository.
  Render for cloud hosting and automated deployment.
  npm (Node Package Manager) for managing project dependencies.



### Implementation
For Software: The application is built with a simple but effective full-stack architecture. The backend handles all the logic for creating and redirecting links, while the frontend provides a clean user interface for interaction.

Backend (Node.js & Express.js)

Server Setup: An Express.js server is set up to listen for incoming web requests. It serves the static frontend files (HTML, CSS, JavaScript) from a public directory.

API Endpoint (/api/lengthen): When the user wants to create a new link, the frontend sends a POST request to this endpoint with the original URL.

Sentence Generation: The backend contains several arrays of words (adjectives, subjects, verbs, places, etc.). It randomly selects one word from each array and combines them to form a long, funny, story-like sentence.

URL Formatting: The generated sentence is converted into a URL-friendly "slug" by making it lowercase and replacing all spaces with hyphens.

In-Memory Storage: The server stores a mapping between the newly created path and the original URL in a simple JavaScript object that acts as a temporary, in-memory database.

Redirect Logic (/:randomPath): When a user visits a lengthened URL (e.g., badalink.onrender.com/a-clumsy-samosa-chased...), the Express server captures the path. It looks up this path in its database; if a match is found, it issues a 302 redirect to the original URL. If not, it returns a 404 Not Found error.

Frontend (Vanilla JavaScript, HTML, CSS)

User Interface: The index.html file creates a simple and clean UI with an input field and buttons. The style.css file ensures the interface is responsive and visually appealing.

API Communication: When the user clicks the "Lengthen URL" button, the frontend JavaScript uses the fetch API to send the URL to the backend.

Handling Responses: The script waits for a JSON response from the server. It then dynamically updates the webpage to either display the newly generated Badalink or show an error message if the input was invalid.

User Experience: Additional JavaScript logic handles the "Copy" button to easily copy the new link to the clipboard and the "Reset" button to clear the form for a new entry.
# Installation
To get this project running on your local machine, You will need to have Node.js and npm installed.
npm install

# Run
node server.js

### Project Documentation
For Software: The project is documented through a combination of a comprehensive README file and inline code comments, ensuring that it is easy to understand, run, and modify.

README.md: The primary source of documentation is the README.md file located in the root of the project's GitHub repository. It serves as a complete guide for anyone interacting with the project and is structured into the following sections:

Project Description: A brief, high-level overview of what Badalink is and what it does.

The Problem & Solution: Fun, narrative-driven sections that explain the humorous "problem" the app solves and how it provides a "solution."

Technical Details: A clear breakdown of the technologies, frameworks, and tools used to build the application.

Implementation: A detailed explanation of how the frontend and backend work together, including the API logic, sentence generation, and redirect handling.

Installation: Step-by-step commands for cloning the repository, installing dependencies, and running the server on a local machine.

Inline Code Comments: The server.js file is commented throughout to explain the purpose of each major code block. This includes clarifying the server setup, the logic behind the API endpoint, the sentence generation process, and the redirect mechanism, making the codebase self-documenting and easy for another developer to follow.

# Screenshots (Add at least 3)
<img width="1800" height="1169" alt="Screenshot1" src="https://github.com/user-attachments/assets/1636ff27-004b-40b1-a415-4f8864e2379c" />
Starting page of our project

<img width="1800" height="1169" alt="Screenshot2" src="https://github.com/user-attachments/assets/1727bc64-abc9-47db-b795-e35da8ea7f44" />
Copying the link to lengthen it

<img width="1800" height="1169" alt="Screenshot3" src="https://github.com/user-attachments/assets/e7364d52-33d5-4dcc-b7db-30c118be861c" />
Link after lengthen it

# Diagrams
Creating a Link
User: Submits a URL to the website.
Server: Generates a unique, funny sentence and creates a new path.
Server: Saves the mapping: new path -> original URL.
User: Receives the new, long Badalink.

Using a Link
User: Clicks on a shared Badalink.
Server: Receives the request and identifies the path.
Server: Looks up the path to find the original URL.
User: Is automatically redirected to the original URL.


### Project Demo
# Video
[(https://github.com/adxlpa/node-url-lengthener#:~:text=ScreenRecording%20(1).mp4)]
A youtube link is pasted on the website and press Strech It , now The new, long, funny URL appears below.Paste that url in browser and it will redirect it into the orginal link


## Team Contributions
- Adhil P A: Building
- Mohammed Bilal P N:  Idea and Resource Contribution 

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--25-25?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)



