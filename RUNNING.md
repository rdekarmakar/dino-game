# Running Dino Adventure Games

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the App

#### Web (Recommended for quick testing)
```bash
npm run web
```
This will start the development server and open the app in your web browser at `http://localhost:8081`

#### iOS (Requires macOS + Xcode)
```bash
npm run ios
```

#### Android (Requires Android Studio)
```bash
npm run android
```

#### All Platforms (Shows menu)
```bash
npm start
```
This will show a QR code and menu where you can choose which platform to run.

## Troubleshooting

### Network/Offline Issues
If you encounter network fetch errors, run in offline mode:
```bash
EXPO_OFFLINE=1 npm run web
```

### Clear Cache
If you experience issues, try clearing the cache:
```bash
npm start -- --clear
```

### TypeScript Errors
All TypeScript errors have been fixed in the latest commit. If you see errors, run:
```bash
npx tsc --noEmit
```

### Port Already in Use
If port 8081 is already in use:
```bash
lsof -ti:8081 | xargs kill -9  # Kill the process using port 8081
npm run web
```

## What's Included

The app includes three dinosaur-themed games:

1. **🦖 Dinosaur Runner** - Endless runner game with obstacles and power-ups
2. **🦕 Dino Memory Match** - Memory card matching game with different dinosaurs
3. **🧠 Dino Quiz** - Educational dinosaur quiz with fun facts

## System Requirements

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **For iOS**: macOS with Xcode installed
- **For Android**: Android Studio with Android SDK
- **For Web**: Any modern web browser

## Development Notes

### Recent Fixes
- Fixed `colors.secondary.lightGreen` → `colors.primary.lightGreen` in Memory Match Card component
- Fixed navigation type error in GameMenuScreen for Quiz navigation
- Fixed Card component to accept style arrays using `StyleProp<ViewStyle>`

### TypeScript
The project uses strict TypeScript mode. All type errors have been resolved.

### Architecture
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation
- **Animations**: React Native Reanimated

## Additional Resources

- See `CLAUDE.md` for detailed development guidelines
- See `PROJECT_SPEC.md` for full project specification
- See `README.md` for project overview

## Need Help?

If you encounter issues:
1. Make sure all dependencies are installed: `npm install`
2. Clear the Expo cache: `npm start -- --clear`
3. Check that Node.js is up to date: `node --version`
4. Try running in offline mode if network issues occur
5. Check the documentation files listed above

Happy coding! 🦕
