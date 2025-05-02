# Next.js Weather App

A modern, responsive weather application built with Next.js, Redux Toolkit, Tailwind CSS, and Framer Motion. This app allows users to search for weather information by city name, view current weather conditions, and keep track of recent searches.

![Weather App Screenshot](/screenshot.png)

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **Responsive Design**: Fully responsive UI that works on all device sizes
- **Dark Mode**: Toggle between light and dark themes
- **Search History**: Keep track of previously searched cities
- **Recent Results**: Quick access to recently viewed weather data
- **Smooth Animations**: Polished user experience with Framer Motion animations
- **Error Handling**: User-friendly error messages
- **Server-Side API**: Secure API calls through Next.js API routes
- **TypeScript**: Full TypeScript implementation for type safety

## 🛠️ Technologies Used

- **Frontend**:
  - Next.js 14 (App Router)
  - React 18
  - Redux Toolkit
  - Tailwind CSS v4
  - Framer Motion
  - TypeScript

- **API**:
  - OpenWeatherMap API
  - Next.js API Routes

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18.17.0 or later
- npm or yarn
- OpenWeatherMap API key (get one at [OpenWeatherMap](https://openweathermap.org/api))

## 🚀 Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/nextjs-weather-app.git
   cd nextjs-weather-app
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Create a `.env.local` file in the root directory with your API keys:
   \`\`\`
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key
   OPENWEATHER_API_KEY=your_api_key
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🔍 Usage

1. **Search for a City**: Type a city name in the search bar and press Enter or click the search icon.
2. **View Weather Details**: See current temperature, weather conditions, humidity, wind speed, and more.
3. **Toggle Dark Mode**: Click the sun/moon icon in the header to switch between light and dark themes.
4. **View Recent Searches**: Previously searched cities appear below the search bar for quick access.

## 📁 Project Structure

\`\`\`
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
├── lib/                  # Utility functions, hooks, and Redux store
│   ├── features/         # Redux slices
│   ├── hooks.ts          # Custom hooks
│   ├── store.ts          # Redux store configuration
│   └── types/            # TypeScript types
├── public/               # Static assets
├── next.config.mjs       # Next.js configuration
└── tailwind.config.js    # Tailwind CSS configuration
\`\`\`

## 🌐 API

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. The following endpoints are used:

- Current Weather: `https://api.openweathermap.org/data/2.5/weather`

## 🔮 Future Enhancements

- 5-day weather forecast
- Geolocation support to get weather for the user's current location
- Weather maps integration
- Unit conversion (Celsius/Fahrenheit)
- Weather alerts and notifications
- More detailed weather information

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the animation library
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Lucide Icons](https://lucide.dev/) for the beautiful icons

---

Made with ❤️ by [Your Name]
