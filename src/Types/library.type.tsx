export interface ILibrary {
  id: number;
  name: string;
  image: string;
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  muscleGroups: string[];
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
