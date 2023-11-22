


# PoshPair - Dating App

![PoshPair Logo](https://res.cloudinary.com/dqhyudo4x/image/upload/v1700645885/bk6toxqapde9pzxwmzmi.jpg)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Screens](#screens)
- [Styles](#styles)
- [Future Steps](#future-steps)
- [License](#license)

---

## Installation

To run the app locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pranjal-sharma-SDE/poshpair.git
   ```

2. **Change into the project directory:**

   ```bash
   cd poshpair
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the app:**

   ```bash
   npm start
   ```

---

## Usage

Once the app is running, access it on your device using Expo. The app enables swiping left (reject), swiping up (super like), and swiping right (like) on different cards representing individuals. If there is a high match percentage, you'll be navigated to the "MatchScreen" to view details of the matched individual.

---

## Components

### Card Component

The Card component renders swipable cards using the `react-tinder-card` library. It displays information about the individual, including their name, age, location, and an image. Buttons for rejecting, super liking, and liking the individual are also present.

### App Component

The App component serves as the entry point and includes the navigation setup, rendering the `AppNavigator` component.



## Screens

### HomeScreen

The HomeScreen is the primary screen, rendering the Card component for users to swipe through cards.

### MatchScreen

MatchScreen displays when there's a match with a high percentage, showing detailed information about the matched individual.

---

## Styles

Styling is done using a combination of Flexbox and custom styles. The styles for components are defined in the `styles` object within the respective component files.

---

## Future Steps

Consider these future steps to enhance the PoshPair app:

- **User Authentication:** Implement user authentication for account creation and login.
- **Backend Integration:** Connect the app to a backend server to store and retrieve user data and card information.
- **User Profiles:** Create user profiles with additional information and settings.
- **Chat Features:** Implement a chat feature for users who have matched.
- **Animations:** Add animations to enhance the user experience during card swiping and transitions.
- **Testing:** Conduct thorough testing on various devices to ensure a seamless user experience.

---

## License

This project is licensed under the MIT License. Feel free to use and modify the code for your own purposes.
```