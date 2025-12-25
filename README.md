⚙️ Equipment Tracker

A simple full-stack web application to manage and track equipment details.
Built as part of an Intern Take-Home Assignment to demonstrate frontend, backend, and database integration.

🚀 Features

📋 View all equipment in a table

➕ Add new equipment

✏️ Edit existing equipment

🗑️ Delete equipment

🔍 Search equipment by name

↕️ Sort by name, type, status, or last cleaned date

📄 Pagination for large data sets

📱 Responsive UI

🧰 Tech Stack
Frontend

React (Create React App)

Axios

CSS (basic custom styling)

Backend

Node.js

Express.js

MongoDB (Mongoose)

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas


⚙️ API Endpoints
Method	Endpoint	Description
GET	/api/equipment	Get all equipment
POST	/api/equipment	Add new equipment
PUT	/api/equipment/:id	Update equipment
DELETE	/api/equipment/:id	Delete equipment
🖥️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/riteshmaurya089/EQUIPMENT-TRACKER
cd EQUIPMENT-TRACKER

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Run backend:

npm start


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

🌐 Deployed Links

Frontend (Vercel):
https://online-equipment-tracker.vercel.app

Backend (Render):
https://equipment-tracker-backen.onrender.com/api/equipment

⚠️ Important Notes

Frontend and backend are deployed separately

API calls must point to backend URL, not frontend URL

.env file is ignored using .gitignore


👨‍💻 Author

Ritesh Maurya
Full Stack Developer
React | Node.js | MongoDB
