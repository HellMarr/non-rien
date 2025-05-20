# Auto Audio Player

A simple React application that automatically plays an audio file when the page loads.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your audio file:
   - Place your audio file in the `public` directory
   - Name it `audio.mp3` or update the `src` attribute in `AutoAudio.tsx`

## Development

Run the development server:
```bash
npm run dev
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Deploy

The `vercel.json` configuration file is already set up for proper routing.

## Note

Make sure your audio file is in a web-compatible format (MP3, WAV, etc.) and is placed in the `public` directory.
