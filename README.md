# 🎬 Movie Ticket Booking Platform

A full-stack web application that allows users to browse movies, select showtimes, choose seats, make secure payments, and leave reviews — all in a seamless, responsive user interface.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Google sign-in using Firebase Authentication
  - Forgot password functionality using NodeMailer

- 🎥 **Movie Listings**
  - View currently running movies and showtimes
  - Each movie has a detail page with trailer, description, ratings, and reviews

- 🪑 **Seat Booking System**
  - Real-time seat selection and blocking logic
  - Prevents double-booking once payment is successful

- 💳 **Payment Integration**
  - Razorpay payment gateway for secure and reliable transactions
  - Booking receipt generated and stored

- 💬 **User Reviews**
  - Users can post and read reviews for movies
  - Ratings and feedback stored in database

- 🎨 **UI & Responsiveness**
  - Tailwind CSS for utility-first styling
  - DaisyUI for pre-styled, responsive components
  - Fully mobile-friendly and accessible

- ⚙️ **State Management**
  - Zustand used for efficient and scalable state management (seat selection, auth, cart, etc.)

---

## 🛠 Tech Stack

| Frontend        | Backend        | Database     | Others                |
|----------------|----------------|--------------|-----------------------|
| React.js       | Node.js        | MongoDB      | Firebase Auth (Google)|
| Tailwind CSS   | Express.js     | Mongoose     | Razorpay API          |
| DaisyUI        | Nodemailer     |              | Zustand (State Mgmt)  |

---

## 📸 Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8ea11547-cbc1-4199-928d-8d6587675198" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/038d430c-2102-49b8-9dd7-76784bfe6c41" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/10f6343b-6095-4383-bfc9-78d00620af3d" />
<img width="1900" height="1078" alt="image" src="https://github.com/user-attachments/assets/e61973dc-2e29-43d4-a6b3-ff7665fcc929" />





---

## 🧑‍💻 Installation

### 1. Clone the repository
```bash
git clone https://github.com/smruthik24/Ticket_Booking.git
cd Ticket_Booking
````

### 2. Install dependencies

#### For frontend:

```bash
cd client
npm install
```

#### For backend:

```bash
cd server
npm install
```

### 3. Environment Variables

Create a `.env` file in the `server` directory and add:

```env
MONGO_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password_or_app_password
FIREBASE_API_KEY=your_firebase_api_key
```

---

## ⚙️ Running the App

### Frontend

```bash
cd client
npm run dev
```

### Backend

```bash
cd server
node index.js
```

---

## ✅ Roadmap (Future Features)

* Admin dashboard for managing movies and bookings
* Wallet system for quick refunds/cancellations
* SMS reminders for booked shows
* PDF ticket generation with QR code

---



## 🙌 Contributing

Feel free to fork this repo, suggest improvements, or raise issues.

---




