A modern React application that replicates the Pixabay image search functionality, allowing users to browse and search for high-quality free images by category or keyword.

## Features

- **Image Search**: Search for images using keywords through the Pixabay API
- **Category Filtering**: Browse images by popular categories including:
  - Nature
  - People
  - Religion
  - Animals
  - Food
  - Places
  - Backgrounds
  - Science
- **Responsive Grid Layout**: Displays images in an auto-filling grid with smooth hover animations
- **Real-time Updates**: Images update instantly as you search or select categories

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Bootstrap 5.3.8 + Custom CSS
- **State Management**: React Context API
- **API**: Pixabay API

## Project Structure

```
src/
├── Components/
│   ├── Images.jsx       # Image grid display component
│   └── Navbar.jsx       # Navigation and search component
├── Context/
│   ├── PixabayContext.jsx    # Context definition
│   └── PixabayState.jsx      # Context provider with API logic
├── StyleCss/
│   └── Image.css        # Image grid and styling
├── App.jsx              # Main application component
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

## Getting Started

### Prerequisites

- HTML, CSS, JavaSCript
- ReactJS
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add your Pixabay API key:
   ```
   VITE_PIXABAY_API_KEY=your_pixabay_api_key_here
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Usage

1. **Search by Keyword**: Type in the search box to find images related to your query
2. **Filter by Category**: Click any category button to browse images in that category
3. **Hover Effects**: Images scale up on hover for better preview

## Key Components

- **Navbar**: Provides category filters and search input
- **Images**: Displays fetched images in a responsive grid
- **PixabayState**: Manages API calls and state management
- **Image.css**: Handles grid layout and image animations

## API Integration

This project uses the [Pixabay API](https://pixabay.com/api/docs/) to fetch free-to-use images. You'll need to register for an API key to run this project.

## License

This project is open source.

