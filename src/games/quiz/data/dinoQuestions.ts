import { QuizQuestion } from '../../../types';

export const dinoQuestions: QuizQuestion[] = [
  // Dinosaur Types
  {
    id: 'q1',
    category: 'types',
    question: 'Which dinosaur had three horns on its head?',
    options: ['T-Rex', 'Triceratops', 'Stegosaurus', 'Brachiosaurus'],
    correctAnswer: 1,
    difficulty: 'easy',
    imageUrl: 'quiz/triceratops.png',
    explanation: 'Triceratops means "three-horned face"! It had two long horns above its eyes and one on its nose.',
    dinosaurId: 'triceratops',
  },
  {
    id: 'q2',
    category: 'types',
    question: 'Which dinosaur had plates on its back?',
    options: ['Stegosaurus', 'T-Rex', 'Velociraptor', 'Diplodocus'],
    correctAnswer: 0,
    difficulty: 'easy',
    imageUrl: 'quiz/stegosaurus.png',
    explanation: 'Stegosaurus had large bony plates along its back for protection and temperature control!',
    dinosaurId: 'stegosaurus',
  },

  // Dinosaur Diets
  {
    id: 'q3',
    category: 'diets',
    question: 'Was T-Rex a herbivore or carnivore?',
    options: ['Herbivore', 'Carnivore', 'Both', "Didn't eat"],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'T-Rex was a carnivore! It ate meat and hunted other dinosaurs with its powerful jaws.',
    dinosaurId: 'trex',
  },
  {
    id: 'q4',
    category: 'diets',
    question: 'What did Brachiosaurus eat?',
    options: ['Other dinosaurs', 'Leaves from tall trees', 'Fish', 'Rocks'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Brachiosaurus was a herbivore with a long neck that helped it reach leaves from tall trees!',
    dinosaurId: 'brachiosaurus',
  },
  {
    id: 'q5',
    category: 'diets',
    question: 'Which of these dinosaurs was a plant-eater?',
    options: ['Velociraptor', 'Spinosaurus', 'Triceratops', 'Allosaurus'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Triceratops was a herbivore that ate plants. The others were all carnivores!',
    dinosaurId: 'triceratops',
  },

  // Dinosaur Sizes
  {
    id: 'q6',
    category: 'sizes',
    question: 'Which was the biggest dinosaur?',
    options: ['T-Rex', 'Brachiosaurus', 'Velociraptor', 'Stegosaurus'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Brachiosaurus was one of the biggest dinosaurs, weighing up to 80 tons!',
    dinosaurId: 'brachiosaurus',
  },
  {
    id: 'q7',
    category: 'sizes',
    question: 'Which dinosaur was about the size of a chicken?',
    options: ['T-Rex', 'Brachiosaurus', 'Velociraptor', 'Triceratops'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Velociraptor was actually quite small, about the size of a large turkey!',
    dinosaurId: 'velociraptor',
  },

  // Dinosaur Features
  {
    id: 'q8',
    category: 'features',
    question: 'Which dinosaur had a club on its tail?',
    options: ['Ankylosaurus', 'T-Rex', 'Pterodactyl', 'Iguanodon'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'Ankylosaurus had a heavy club on its tail that it used to defend itself from predators!',
    dinosaurId: 'ankylosaurus',
  },
  {
    id: 'q9',
    category: 'features',
    question: 'Which dinosaur had a sail on its back?',
    options: ['T-Rex', 'Spinosaurus', 'Stegosaurus', 'Diplodocus'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Spinosaurus had a large sail on its back that might have helped control its body temperature!',
    dinosaurId: 'spinosaurus',
  },
  {
    id: 'q10',
    category: 'features',
    question: 'What special feature did Parasaurolophus have?',
    options: ['Sharp teeth', 'Long crest on head', 'Wings', 'Spikes on tail'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Parasaurolophus had a long, hollow crest on its head that it used to make loud sounds!',
    dinosaurId: 'parasaurolophus',
  },

  // Prehistoric Times
  {
    id: 'q11',
    category: 'prehistoric-times',
    question: 'When did dinosaurs live on Earth?',
    options: ['100 years ago', 'Millions of years ago', 'Last week', '1000 years ago'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Dinosaurs lived millions of years ago, from about 230 to 66 million years ago!',
  },
  {
    id: 'q12',
    category: 'prehistoric-times',
    question: 'What happened to the dinosaurs?',
    options: ['They went extinct', 'They became birds', 'Both are true', 'They went to space'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Most dinosaurs went extinct 66 million years ago, but some evolved into modern birds!',
  },

  // Dinosaur Babies
  {
    id: 'q13',
    category: 'babies',
    question: 'How were baby dinosaurs born?',
    options: ['From eggs', 'Live birth', 'From plants', 'They appeared magically'],
    correctAnswer: 0,
    difficulty: 'easy',
    explanation: 'Dinosaurs laid eggs, just like birds and reptiles do today!',
  },
  {
    id: 'q14',
    category: 'babies',
    question: 'What do we call scientists who study dinosaurs?',
    options: ['Geologists', 'Paleontologists', 'Zoologists', 'Astronauts'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Paleontologists are scientists who study fossils and ancient life, including dinosaurs!',
  },

  // Fun Facts
  {
    id: 'q15',
    category: 'fun-facts',
    question: 'How many teeth did T-Rex have?',
    options: ['10', 'About 50', 'Over 100', 'None'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'T-Rex had about 50 to 60 thick, sharp teeth - some as long as bananas!',
    dinosaurId: 'trex',
  },
  {
    id: 'q16',
    category: 'fun-facts',
    question: 'Which dinosaur had the longest tail?',
    options: ['Diplodocus', 'T-Rex', 'Velociraptor', 'Triceratops'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'Diplodocus had an incredibly long tail - longer than a school bus!',
    dinosaurId: 'diplodocus',
  },
  {
    id: 'q17',
    category: 'fun-facts',
    question: 'Could Pterodactyl actually fly?',
    options: ['No', 'Yes', 'Only downhill', 'Only in space'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Yes! Pterodactyl was a flying reptile with wings made of skin, like a bat.',
    dinosaurId: 'pterodactyl',
  },
  {
    id: 'q18',
    category: 'fun-facts',
    question: 'What does "Dinosaur" mean?',
    options: ['Big lizard', 'Terrible lizard', 'Scary monster', 'Ancient animal'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Dinosaur means "terrible lizard" from the Greek words "deinos" (terrible) and "sauros" (lizard)!',
  },
  {
    id: 'q19',
    category: 'types',
    question: 'Which dinosaur was covered in armor?',
    options: ['T-Rex', 'Ankylosaurus', 'Diplodocus', 'Pterodactyl'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Ankylosaurus was like a tank! It was covered in bony armor plates for protection.',
    dinosaurId: 'ankylosaurus',
  },
  {
    id: 'q20',
    category: 'fun-facts',
    question: 'Which dinosaur could swim?',
    options: ['Stegosaurus', 'T-Rex', 'Spinosaurus', 'Triceratops'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Spinosaurus was an excellent swimmer and spent lots of time in water catching fish!',
    dinosaurId: 'spinosaurus',
  },
];

// Helper functions
export const getQuestionsByCategory = (category: QuizQuestion['category']) => {
  return dinoQuestions.filter((q) => q.category === category);
};

export const getQuestionsByDifficulty = (difficulty: QuizQuestion['difficulty']) => {
  return dinoQuestions.filter((q) => q.difficulty === difficulty);
};

export const getRandomQuestions = (count: number, difficulty?: QuizQuestion['difficulty']) => {
  const pool = difficulty ? getQuestionsByDifficulty(difficulty) : dinoQuestions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getQuestionById = (id: string) => {
  return dinoQuestions.find((q) => q.id === id);
};
