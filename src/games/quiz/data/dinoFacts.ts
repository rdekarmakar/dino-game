// Fun dinosaur facts for educational purposes

export const dinoFacts = [
  "🦕 The word 'dinosaur' comes from Greek words meaning 'terrible lizard'!",
  "🦖 T-Rex could bite with a force of 12,800 pounds - stronger than any living animal!",
  "🥚 Some dinosaur eggs were as big as basketballs!",
  "🦴 Paleontologists have found over 700 different species of dinosaurs so far!",
  "🌎 Dinosaurs lived on every continent, including Antarctica!",
  "🐦 Modern birds are actually descendants of dinosaurs!",
  "👃 T-Rex had an amazing sense of smell - better than a bloodhound!",
  "🦕 The biggest dinosaurs could weigh as much as 10 elephants!",
  "⚡ Some dinosaurs could run as fast as a car on a highway!",
  "🧠 Stegosaurus had a brain the size of a walnut, even though it was huge!",
  "🎨 Scientists think some dinosaurs had colorful feathers!",
  "👂 Parasaurolophus could make sounds louder than a trumpet!",
  "🦎 The smallest dinosaur was only the size of a chicken!",
  "⏰ Dinosaurs ruled Earth for over 165 million years!",
  "🌟 A new dinosaur species is discovered about once every two weeks!",
  "🦷 Some dinosaurs grew new teeth throughout their lives!",
  "👀 Triceratops had one of the largest skulls of any land animal!",
  "🌊 Spinosaurus spent most of its time in water like a crocodile!",
  "🏃 Velociraptor was smart and hunted in packs like wolves!",
  "☄️ An asteroid impact likely caused the extinction of dinosaurs 66 million years ago!",
];

export const getRandomFact = (): string => {
  return dinoFacts[Math.floor(Math.random() * dinoFacts.length)];
};

export const getFactsByCount = (count: number): string[] => {
  const shuffled = [...dinoFacts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, dinoFacts.length));
};

// Encouraging messages for correct answers
export const encouragingMessages = [
  "Dino-mite! 🦕",
  "Roar-some! 🦖",
  "T-Riffic! 🌟",
  "You're a paleontologist! 🦴",
  "Jurassic genius! 🧠",
  "Prehistoric perfection! ✨",
  "Dino expert! 🎯",
  "Fossil fantastic! 💎",
  "Cretaceous champion! 🏆",
  "Triassic triumph! 🎉",
];

export const tryAgainMessages = [
  "Don't give up! 💪",
  "Try again, explorer! 🔍",
  "You're learning! 📚",
  "Keep trying! 🌟",
  "Almost there! 🎯",
  "Practice makes perfect! ⭐",
  "You can do it! 💫",
  "Keep going! 🚀",
];

export const getRandomEncouragingMessage = (): string => {
  return encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
};

export const getRandomTryAgainMessage = (): string => {
  return tryAgainMessages[Math.floor(Math.random() * tryAgainMessages.length)];
};
