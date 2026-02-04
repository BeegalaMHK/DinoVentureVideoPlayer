# DinoVenture Video Player 🎬

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

DinoVenture is a premium, gesture-driven video player application built with React, Framer Motion, and Tailwind CSS. It offers a seamless "Picture-in-App" experience, allowing users to browse content while watching videos.

## ✨ Key Features

- **Full-Page Video Player**: An immersive full-screen playback experience with dynamic metadata display.
- **Gesture-Based Navigation**:
  - **To-Minimize**: Drag down on the video container (>150px) to instantly dock it into a mini-player.
  - **Swipe-up Related Videos**: Drag up from the bottom (>120px) to reveal a list of related videos.
- **Picture-in-App (Mini-Player)**: A persistent floating player that allows continued viewing while browsing the feed.
  - **Restore**: Easily return to full-screen view.
  - **Close**: Dismiss the mini-player.
- **YouTube Integration**: Powered by `react-player` with automatic URL cleaning for maximum compatibility.
- **Responsive Sidebar**: Categorized navigation that auto-collapses on mobile for more screen real estate.
- **Mobile-First Design**: A sophisticated dark-themed layout optimized for touch interaction.

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx             # Top bar with search & logo
│   │   └── Sidebar.jsx            # Category-based navigation
│   ├── CustomVideoPlayer.jsx      # Core playback logic & YouTube wrapper
│   ├── FullPlayer.jsx             # Full-screen view with gesture handling
│   ├── MiniPlayer.jsx             # Persistent floating player
│   ├── RelatedList.jsx            # Drawer for related content
│   ├── VideoCard.jsx              # Individual video grid item
│   └── VideoFeed.jsx              # Home feed with filtering & search
├── context/
│   └── DatasetContext.jsx         # Global state for video data
├── constant/
│   └── dataset.js                 # Categorized video data source
├── App.jsx                        # Root component & state orchestration
└── main.jsx                       # Entry point
```

## 🚀 Technologies Used

- **React**: Modern component-based architecture.
- **Framer Motion**: Advanced gesture handling and buttery-smooth animations.
- **Tailwind CSS**: Utility-first styling for a premium dark interface.
- **ReactPlayer**: Versatile video playback engine.
- **Lucide React**: High-quality SVG icons.
- **Vite**: Modern build tool for rapid development.

## 🛠️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd DinoVentureVideoPlayer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🔧 Recent Improvements

- **Fixed Sidebar Prop Error**: Resolved a crash when clicking sidebar categories by correctly passing state setters.
- **Optimized Mobile Playback**: Integrated `muted` support (optional) and optimized `playsinline` attributes to ensure seamless autoplay across different mobile browsers.
- **State Persistence**: Improved video state handling between full-screen and mini-player modes.

---

Built with ❤️ for a premium viewing experience.
