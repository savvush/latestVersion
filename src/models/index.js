// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserType = {
  "REGULAR": "REGULAR",
  "TRAINER": "TRAINER",
  "ADMIN": "ADMIN",
  "RESERVED": "RESERVED"
};

const Level = {
  "BEGINNER": "BEGINNER",
  "EASY": "EASY",
  "MEDIUM": "MEDIUM",
  "HARD": "HARD",
  "RESERVED": "RESERVED"
};

const ProgressIndicator = {
  "NOT_REGISTERED": "NOT_REGISTERED",
  "REGISTERED": "REGISTERED",
  "NOT_ENROLLED": "NOT_ENROLLED",
  "ENROLLED": "ENROLLED",
  "NOT_STARTED": "NOT_STARTED",
  "IN_PROGRESS": "IN_PROGRESS",
  "COMPLETED": "COMPLETED",
  "RESERVED": "RESERVED"
};

const NewsType = {
  "PUBLIC": "PUBLIC",
  "GROUP": "GROUP",
  "RESERVED": "RESERVED",
  "VIDEO": "VIDEO",
  "IMAGE": "IMAGE"
};

const { Video, DietDayDetails, DietDays, DietRecipeProgress, DietRecipe, TrainingType, MuscleGroup, Onboarding, Equipment, Exercise, Post, Coach, ExerciseItem, NewsShownToUser, User, News, Program, Workout, Challenge, WorkoutProperties, UserWorkoutHistory, UserChallengeHistory, UserProgramHistory, Category, Blog, Tag, UserWorkoutProgress, UserProgramProgress, VideoExercise, TrainingTypeExercise, UserGoalTrainingTypes, WorkoutTrainingTypes, ProgramTrainingTypes, ChallengeTrainingTypes, MuscleGroupExercise, UserGoalMuscleGroups, WorkoutMusleGroups, ProgramMuscleGroups, ChallengeMuscleGroups, EquipmentExercise, TagExercise, ChallengeExercise, WorkoutExercise, CoachExercise, CoachWorkouts, CoachChallenges, ProgramWorkouts, ChallengeWorkouts, UserData } = initSchema(schema);

export {
  Video,
  DietDayDetails,
  DietDays,
  DietRecipeProgress,
  DietRecipe,
  TrainingType,
  MuscleGroup,
  Onboarding,
  Equipment,
  Exercise,
  Post,
  Coach,
  ExerciseItem,
  NewsShownToUser,
  User,
  News,
  Program,
  Workout,
  Challenge,
  WorkoutProperties,
  UserWorkoutHistory,
  UserChallengeHistory,
  UserProgramHistory,
  Category,
  Blog,
  Tag,
  UserWorkoutProgress,
  UserProgramProgress,
  VideoExercise,
  TrainingTypeExercise,
  UserGoalTrainingTypes,
  WorkoutTrainingTypes,
  ProgramTrainingTypes,
  ChallengeTrainingTypes,
  MuscleGroupExercise,
  UserGoalMuscleGroups,
  WorkoutMusleGroups,
  ProgramMuscleGroups,
  ChallengeMuscleGroups,
  EquipmentExercise,
  TagExercise,
  ChallengeExercise,
  WorkoutExercise,
  CoachExercise,
  CoachWorkouts,
  CoachChallenges,
  ProgramWorkouts,
  ChallengeWorkouts,
  UserType,
  Level,
  ProgressIndicator,
  NewsType,
  UserData
};