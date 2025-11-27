import { Dinosaur } from '../../../types';

// Dinosaur data for the memory matching game
export const dinosaurs: Dinosaur[] = [
  {
    id: 'trex',
    name: 'T-Rex',
    scientificName: 'Tyrannosaurus Rex',
    type: 'carnivore',
    imageUrl: 'dinosaurs/trex.png',
    fact: 'T-Rex had teeth as long as bananas and could bite with the force of three cars!',
    height: '12-20 feet',
    length: '40 feet',
    weight: '9 tons',
    period: 'Late Cretaceous (68-66 million years ago)',
    diet: 'Carnivore - ate other dinosaurs',
  },
  {
    id: 'triceratops',
    name: 'Triceratops',
    scientificName: 'Triceratops horridus',
    type: 'herbivore',
    imageUrl: 'dinosaurs/triceratops.png',
    fact: 'Triceratops had three horns and a large frill to protect itself from predators like T-Rex!',
    height: '10 feet',
    length: '30 feet',
    weight: '12 tons',
    period: 'Late Cretaceous (68-66 million years ago)',
    diet: 'Herbivore - ate plants',
  },
  {
    id: 'stegosaurus',
    name: 'Stegosaurus',
    scientificName: 'Stegosaurus stenops',
    type: 'herbivore',
    imageUrl: 'dinosaurs/stegosaurus.png',
    fact: 'Stegosaurus had plates on its back and spikes on its tail for protection!',
    height: '14 feet',
    length: '30 feet',
    weight: '5 tons',
    period: 'Late Jurassic (155-150 million years ago)',
    diet: 'Herbivore - ate low-growing plants',
  },
  {
    id: 'brachiosaurus',
    name: 'Brachiosaurus',
    scientificName: 'Brachiosaurus altithorax',
    type: 'herbivore',
    imageUrl: 'dinosaurs/brachiosaurus.png',
    fact: 'Brachiosaurus was one of the tallest dinosaurs - as tall as a 4-story building!',
    height: '40-50 feet',
    length: '85 feet',
    weight: '80 tons',
    period: 'Late Jurassic (154-153 million years ago)',
    diet: 'Herbivore - ate leaves from tall trees',
  },
  {
    id: 'pterodactyl',
    name: 'Pterodactyl',
    scientificName: 'Pterodactylus antiquus',
    type: 'flying',
    imageUrl: 'dinosaurs/pterodactyl.png',
    fact: 'Pterodactyl was a flying reptile with wings made of skin, like a bat!',
    height: '1-3 feet',
    length: '3-6 feet wingspan',
    weight: '4-10 pounds',
    period: 'Late Jurassic (150-145 million years ago)',
    diet: 'Carnivore - ate fish and small animals',
  },
  {
    id: 'velociraptor',
    name: 'Velociraptor',
    scientificName: 'Velociraptor mongoliensis',
    type: 'carnivore',
    imageUrl: 'dinosaurs/velociraptor.png',
    fact: 'Velociraptor was fast and smart, hunting in packs like wolves!',
    height: '2 feet',
    length: '6 feet',
    weight: '33 pounds',
    period: 'Late Cretaceous (75-71 million years ago)',
    diet: 'Carnivore - hunted small dinosaurs',
  },
  {
    id: 'ankylosaurus',
    name: 'Ankylosaurus',
    scientificName: 'Ankylosaurus magniventris',
    type: 'herbivore',
    imageUrl: 'dinosaurs/ankylosaurus.png',
    fact: 'Ankylosaurus was covered in armor and had a club tail to defend itself!',
    height: '5.5 feet',
    length: '20-25 feet',
    weight: '8 tons',
    period: 'Late Cretaceous (68-66 million years ago)',
    diet: 'Herbivore - ate low-growing plants',
  },
  {
    id: 'parasaurolophus',
    name: 'Parasaurolophus',
    scientificName: 'Parasaurolophus walkeri',
    type: 'herbivore',
    imageUrl: 'dinosaurs/parasaurolophus.png',
    fact: 'Parasaurolophus had a long crest on its head that it used to make loud sounds!',
    height: '16 feet',
    length: '33 feet',
    weight: '4 tons',
    period: 'Late Cretaceous (76-73 million years ago)',
    diet: 'Herbivore - ate plants and leaves',
  },
  {
    id: 'diplodocus',
    name: 'Diplodocus',
    scientificName: 'Diplodocus longus',
    type: 'herbivore',
    imageUrl: 'dinosaurs/diplodocus.png',
    fact: 'Diplodocus had the longest tail of any dinosaur - longer than a school bus!',
    height: '16 feet',
    length: '90 feet',
    weight: '15 tons',
    period: 'Late Jurassic (154-152 million years ago)',
    diet: 'Herbivore - ate plants and leaves',
  },
  {
    id: 'spinosaurus',
    name: 'Spinosaurus',
    scientificName: 'Spinosaurus aegyptiacus',
    type: 'carnivore',
    imageUrl: 'dinosaurs/spinosaurus.png',
    fact: 'Spinosaurus had a giant sail on its back and could swim to catch fish!',
    height: '18 feet',
    length: '50 feet',
    weight: '10 tons',
    period: 'Middle Cretaceous (112-97 million years ago)',
    diet: 'Carnivore - ate fish and other dinosaurs',
  },
  {
    id: 'allosaurus',
    name: 'Allosaurus',
    scientificName: 'Allosaurus fragilis',
    type: 'carnivore',
    imageUrl: 'dinosaurs/allosaurus.png',
    fact: 'Allosaurus was the T-Rex of the Jurassic period - a fierce predator!',
    height: '8-10 feet',
    length: '28 feet',
    weight: '2.5 tons',
    period: 'Late Jurassic (155-145 million years ago)',
    diet: 'Carnivore - hunted other dinosaurs',
  },
  {
    id: 'iguanodon',
    name: 'Iguanodon',
    scientificName: 'Iguanodon bernissartensis',
    type: 'herbivore',
    imageUrl: 'dinosaurs/iguanodon.png',
    fact: 'Iguanodon had a spike on each thumb that it used for defense!',
    height: '9 feet',
    length: '33 feet',
    weight: '4 tons',
    period: 'Early Cretaceous (126-125 million years ago)',
    diet: 'Herbivore - ate plants and fruits',
  },
];

// Helper functions to filter dinosaurs by type
export const getDinosaursByType = (type: Dinosaur['type']): Dinosaur[] => {
  return dinosaurs.filter((dino) => dino.type === type);
};

export const getRandomDinosaurs = (count: number): Dinosaur[] => {
  const shuffled = [...dinosaurs].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, dinosaurs.length));
};

export const getDinosaurById = (id: string): Dinosaur | undefined => {
  return dinosaurs.find((dino) => dino.id === id);
};

// Dinosaur sets for different difficulty levels
export const easyDinosaurs = dinosaurs.slice(0, 6); // 6 pairs = 12 cards
export const mediumDinosaurs = dinosaurs.slice(0, 8); // 8 pairs = 16 cards
export const hardDinosaurs = dinosaurs; // 12 pairs = 24 cards
