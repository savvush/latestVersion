import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum UserType {
  REGULAR = "REGULAR",
  TRAINER = "TRAINER",
  ADMIN = "ADMIN",
  RESERVED = "RESERVED"
}

export enum Level {
  BEGINNER = "BEGINNER",
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
  RESERVED = "RESERVED"
}

export enum ProgressIndicator {
  NOT_REGISTERED = "NOT_REGISTERED",
  REGISTERED = "REGISTERED",
  NOT_ENROLLED = "NOT_ENROLLED",
  ENROLLED = "ENROLLED",
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  RESERVED = "RESERVED"
}

export enum NewsType {
  PUBLIC = "PUBLIC",
  GROUP = "GROUP",
  RESERVED = "RESERVED",
  VIDEO = "VIDEO",
  IMAGE = "IMAGE"
}

type EagerUserData = {
  readonly name?: string | null;
  readonly workoutName?: string | null;
  readonly exerciseCount?: number | null;
  readonly watchedExercise?: number | null;
}

type LazyUserData = {
  readonly name?: string | null;
  readonly workoutName?: string | null;
  readonly exerciseCount?: number | null;
  readonly watchedExercise?: number | null;
}

export declare type UserData = LazyLoading extends LazyLoadingDisabled ? EagerUserData : LazyUserData

export declare const UserData: (new (init: ModelInit<UserData>) => UserData)

type VideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DietDayDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DietDaysMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DietRecipeProgressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DietRecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrainingTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MuscleGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OnboardingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EquipmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoachMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExerciseItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NewsShownToUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProgramMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChallengeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutPropertiesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserWorkoutHistoryMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserChallengeHistoryMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserProgramHistoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserWorkoutProgressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserProgramProgressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideoExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrainingTypeExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserGoalTrainingTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutTrainingTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProgramTrainingTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChallengeTrainingTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MuscleGroupExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserGoalMuscleGroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutMusleGroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProgramMuscleGroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChallengeMuscleGroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EquipmentExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChallengeExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoachExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoachWorkoutsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoachChallengesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProgramWorkoutsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChallengeWorkoutsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerVideo = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly duration?: string | null;
  readonly Exercises?: (VideoExercise | null)[] | null;
  readonly VideoUrl?: string | null;
  readonly thumbnailUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideo = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly duration?: string | null;
  readonly Exercises: AsyncCollection<VideoExercise>;
  readonly VideoUrl?: string | null;
  readonly thumbnailUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Video = LazyLoading extends LazyLoadingDisabled ? EagerVideo : LazyVideo

export declare const Video: (new (init: ModelInit<Video, VideoMetaData>) => Video) & {
  copyOf(source: Video, mutator: (draft: MutableModel<Video, VideoMetaData>) => MutableModel<Video, VideoMetaData> | void): Video;
}

type EagerDietDayDetails = {
  readonly id: string;
  readonly time?: string | null;
  readonly goal?: string | null;
  readonly content?: string | null;
  readonly protein?: string | null;
  readonly quarge?: string | null;
  readonly recipe?: string | null;
  readonly dietdaysID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDietDayDetails = {
  readonly id: string;
  readonly time?: string | null;
  readonly goal?: string | null;
  readonly content?: string | null;
  readonly protein?: string | null;
  readonly quarge?: string | null;
  readonly recipe?: string | null;
  readonly dietdaysID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DietDayDetails = LazyLoading extends LazyLoadingDisabled ? EagerDietDayDetails : LazyDietDayDetails

export declare const DietDayDetails: (new (init: ModelInit<DietDayDetails, DietDayDetailsMetaData>) => DietDayDetails) & {
  copyOf(source: DietDayDetails, mutator: (draft: MutableModel<DietDayDetails, DietDayDetailsMetaData>) => MutableModel<DietDayDetails, DietDayDetailsMetaData> | void): DietDayDetails;
}

type EagerDietDays = {
  readonly id: string;
  readonly day?: number | null;
  readonly title?: string | null;
  readonly DietDayDetails?: (DietDayDetails | null)[] | null;
  readonly description?: string | null;
  readonly dietrecipeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDietDays = {
  readonly id: string;
  readonly day?: number | null;
  readonly title?: string | null;
  readonly DietDayDetails: AsyncCollection<DietDayDetails>;
  readonly description?: string | null;
  readonly dietrecipeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DietDays = LazyLoading extends LazyLoadingDisabled ? EagerDietDays : LazyDietDays

export declare const DietDays: (new (init: ModelInit<DietDays, DietDaysMetaData>) => DietDays) & {
  copyOf(source: DietDays, mutator: (draft: MutableModel<DietDays, DietDaysMetaData>) => MutableModel<DietDays, DietDaysMetaData> | void): DietDays;
}

type EagerDietRecipeProgress = {
  readonly id: string;
  readonly startDate?: string | null;
  readonly description?: string | null;
  readonly comment?: string | null;
  readonly DietRecipe?: DietRecipe | null;
  readonly userID: string;
  readonly isPaused?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dietRecipeProgressDietRecipeId?: string | null;
}

type LazyDietRecipeProgress = {
  readonly id: string;
  readonly startDate?: string | null;
  readonly description?: string | null;
  readonly comment?: string | null;
  readonly DietRecipe: AsyncItem<DietRecipe | undefined>;
  readonly userID: string;
  readonly isPaused?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dietRecipeProgressDietRecipeId?: string | null;
}

export declare type DietRecipeProgress = LazyLoading extends LazyLoadingDisabled ? EagerDietRecipeProgress : LazyDietRecipeProgress

export declare const DietRecipeProgress: (new (init: ModelInit<DietRecipeProgress, DietRecipeProgressMetaData>) => DietRecipeProgress) & {
  copyOf(source: DietRecipeProgress, mutator: (draft: MutableModel<DietRecipeProgress, DietRecipeProgressMetaData>) => MutableModel<DietRecipeProgress, DietRecipeProgressMetaData> | void): DietRecipeProgress;
}

type EagerDietRecipe = {
  readonly id: string;
  readonly name: string;
  readonly gender?: string | null;
  readonly recipeName: string;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly onboardingImageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly Diets?: (DietDays | null)[] | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDietRecipe = {
  readonly id: string;
  readonly name: string;
  readonly gender?: string | null;
  readonly recipeName: string;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly onboardingImageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly Diets: AsyncCollection<DietDays>;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DietRecipe = LazyLoading extends LazyLoadingDisabled ? EagerDietRecipe : LazyDietRecipe

export declare const DietRecipe: (new (init: ModelInit<DietRecipe, DietRecipeMetaData>) => DietRecipe) & {
  copyOf(source: DietRecipe, mutator: (draft: MutableModel<DietRecipe, DietRecipeMetaData>) => MutableModel<DietRecipe, DietRecipeMetaData> | void): DietRecipe;
}

type EagerTrainingType = {
  readonly id: string;
  readonly name: string;
  readonly gender?: string | null;
  readonly menuName: string;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly onboardingImageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly exercises?: (TrainingTypeExercise | null)[] | null;
  readonly users?: (UserGoalTrainingTypes | null)[] | null;
  readonly workouts?: (WorkoutTrainingTypes | null)[] | null;
  readonly programs?: (ProgramTrainingTypes | null)[] | null;
  readonly challenges?: (ChallengeTrainingTypes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrainingType = {
  readonly id: string;
  readonly name: string;
  readonly gender?: string | null;
  readonly menuName: string;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly onboardingImageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly exercises: AsyncCollection<TrainingTypeExercise>;
  readonly users: AsyncCollection<UserGoalTrainingTypes>;
  readonly workouts: AsyncCollection<WorkoutTrainingTypes>;
  readonly programs: AsyncCollection<ProgramTrainingTypes>;
  readonly challenges: AsyncCollection<ChallengeTrainingTypes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrainingType = LazyLoading extends LazyLoadingDisabled ? EagerTrainingType : LazyTrainingType

export declare const TrainingType: (new (init: ModelInit<TrainingType, TrainingTypeMetaData>) => TrainingType) & {
  copyOf(source: TrainingType, mutator: (draft: MutableModel<TrainingType, TrainingTypeMetaData>) => MutableModel<TrainingType, TrainingTypeMetaData> | void): TrainingType;
}

type EagerMuscleGroup = {
  readonly id: string;
  readonly name: string;
  readonly backgroundColor?: string | null;
  readonly specialBackgroundColor?: string | null;
  readonly imageUrl?: string | null;
  readonly exercises?: (MuscleGroupExercise | null)[] | null;
  readonly users?: (UserGoalMuscleGroups | null)[] | null;
  readonly workouts?: (WorkoutMusleGroups | null)[] | null;
  readonly programs?: (ProgramMuscleGroups | null)[] | null;
  readonly challenges?: (ChallengeMuscleGroups | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMuscleGroup = {
  readonly id: string;
  readonly name: string;
  readonly backgroundColor?: string | null;
  readonly specialBackgroundColor?: string | null;
  readonly imageUrl?: string | null;
  readonly exercises: AsyncCollection<MuscleGroupExercise>;
  readonly users: AsyncCollection<UserGoalMuscleGroups>;
  readonly workouts: AsyncCollection<WorkoutMusleGroups>;
  readonly programs: AsyncCollection<ProgramMuscleGroups>;
  readonly challenges: AsyncCollection<ChallengeMuscleGroups>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MuscleGroup = LazyLoading extends LazyLoadingDisabled ? EagerMuscleGroup : LazyMuscleGroup

export declare const MuscleGroup: (new (init: ModelInit<MuscleGroup, MuscleGroupMetaData>) => MuscleGroup) & {
  copyOf(source: MuscleGroup, mutator: (draft: MutableModel<MuscleGroup, MuscleGroupMetaData>) => MutableModel<MuscleGroup, MuscleGroupMetaData> | void): MuscleGroup;
}

type EagerOnboarding = {
  readonly id: string;
  readonly imageUrl?: string | null;
  readonly description?: string | null;
  readonly isDisplay?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOnboarding = {
  readonly id: string;
  readonly imageUrl?: string | null;
  readonly description?: string | null;
  readonly isDisplay?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Onboarding = LazyLoading extends LazyLoadingDisabled ? EagerOnboarding : LazyOnboarding

export declare const Onboarding: (new (init: ModelInit<Onboarding, OnboardingMetaData>) => Onboarding) & {
  copyOf(source: Onboarding, mutator: (draft: MutableModel<Onboarding, OnboardingMetaData>) => MutableModel<Onboarding, OnboardingMetaData> | void): Onboarding;
}

type EagerEquipment = {
  readonly id: string;
  readonly name: string;
  readonly imageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly exercises?: (EquipmentExercise | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipment = {
  readonly id: string;
  readonly name: string;
  readonly imageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly exercises: AsyncCollection<EquipmentExercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Equipment = LazyLoading extends LazyLoadingDisabled ? EagerEquipment : LazyEquipment

export declare const Equipment: (new (init: ModelInit<Equipment, EquipmentMetaData>) => Equipment) & {
  copyOf(source: Equipment, mutator: (draft: MutableModel<Equipment, EquipmentMetaData>) => MutableModel<Equipment, EquipmentMetaData> | void): Equipment;
}

type EagerExercise = {
  readonly id: string;
  readonly title?: string | null;
  readonly thumbnailUrl?: string | null;
  readonly imageUrl?: string | null;
  readonly oneCycleDuration?: number | null;
  readonly views?: number | null;
  readonly likes?: number | null;
  readonly dislikes?: number | null;
  readonly description?: string | null;
  readonly backgroundColor?: string | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly exerciseExtension1?: string | null;
  readonly exerciseExtension2?: string | null;
  readonly exerciseItem?: ExerciseItem | null;
  readonly tags?: (TagExercise | null)[] | null;
  readonly videos?: (VideoExercise | null)[] | null;
  readonly challenges?: (ChallengeExercise | null)[] | null;
  readonly workouts?: (WorkoutExercise | null)[] | null;
  readonly trainingtypes?: TrainingTypeExercise[] | null;
  readonly musclegroups?: MuscleGroupExercise[] | null;
  readonly equipments?: EquipmentExercise[] | null;
  readonly coachs?: CoachExercise[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExercise = {
  readonly id: string;
  readonly title?: string | null;
  readonly thumbnailUrl?: string | null;
  readonly imageUrl?: string | null;
  readonly oneCycleDuration?: number | null;
  readonly views?: number | null;
  readonly likes?: number | null;
  readonly dislikes?: number | null;
  readonly description?: string | null;
  readonly backgroundColor?: string | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly exerciseExtension1?: string | null;
  readonly exerciseExtension2?: string | null;
  readonly exerciseItem: AsyncItem<ExerciseItem | undefined>;
  readonly tags: AsyncCollection<TagExercise>;
  readonly videos: AsyncCollection<VideoExercise>;
  readonly challenges: AsyncCollection<ChallengeExercise>;
  readonly workouts: AsyncCollection<WorkoutExercise>;
  readonly trainingtypes: AsyncCollection<TrainingTypeExercise>;
  readonly musclegroups: AsyncCollection<MuscleGroupExercise>;
  readonly equipments: AsyncCollection<EquipmentExercise>;
  readonly coachs: AsyncCollection<CoachExercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Exercise = LazyLoading extends LazyLoadingDisabled ? EagerExercise : LazyExercise

export declare const Exercise: (new (init: ModelInit<Exercise, ExerciseMetaData>) => Exercise) & {
  copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise, ExerciseMetaData>) => MutableModel<Exercise, ExerciseMetaData> | void): Exercise;
}

type EagerPost = {
  readonly id: string;
  readonly user?: User | null;
  readonly category?: string | null;
  readonly title?: string | null;
  readonly caption?: string | null;
  readonly readMinutes?: number | null;
  readonly image?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postUserId?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly category?: string | null;
  readonly title?: string | null;
  readonly caption?: string | null;
  readonly readMinutes?: number | null;
  readonly image?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postUserId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerCoach = {
  readonly id: string;
  readonly username: string;
  readonly user?: User | null;
  readonly backgroundImageUrl?: string | null;
  readonly presentationVideoUrl?: string | null;
  readonly bio?: string | null;
  readonly exercises?: (CoachExercise | null)[] | null;
  readonly workouts?: (CoachWorkouts | null)[] | null;
  readonly challenges?: (CoachChallenges | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly coachUserId?: string | null;
}

type LazyCoach = {
  readonly id: string;
  readonly username: string;
  readonly user: AsyncItem<User | undefined>;
  readonly backgroundImageUrl?: string | null;
  readonly presentationVideoUrl?: string | null;
  readonly bio?: string | null;
  readonly exercises: AsyncCollection<CoachExercise>;
  readonly workouts: AsyncCollection<CoachWorkouts>;
  readonly challenges: AsyncCollection<CoachChallenges>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly coachUserId?: string | null;
}

export declare type Coach = LazyLoading extends LazyLoadingDisabled ? EagerCoach : LazyCoach

export declare const Coach: (new (init: ModelInit<Coach, CoachMetaData>) => Coach) & {
  copyOf(source: Coach, mutator: (draft: MutableModel<Coach, CoachMetaData>) => MutableModel<Coach, CoachMetaData> | void): Coach;
}

type EagerExerciseItem = {
  readonly id: string;
  readonly exercise?: Exercise | null;
  readonly sets: number;
  readonly workoutTime: number;
  readonly restTime: number;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseItemExerciseId?: string | null;
  readonly workoutExerciseItemsId?: string | null;
  readonly challengeExerciseItemsId?: string | null;
}

type LazyExerciseItem = {
  readonly id: string;
  readonly exercise: AsyncItem<Exercise | undefined>;
  readonly sets: number;
  readonly workoutTime: number;
  readonly restTime: number;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseItemExerciseId?: string | null;
  readonly workoutExerciseItemsId?: string | null;
  readonly challengeExerciseItemsId?: string | null;
}

export declare type ExerciseItem = LazyLoading extends LazyLoadingDisabled ? EagerExerciseItem : LazyExerciseItem

export declare const ExerciseItem: (new (init: ModelInit<ExerciseItem, ExerciseItemMetaData>) => ExerciseItem) & {
  copyOf(source: ExerciseItem, mutator: (draft: MutableModel<ExerciseItem, ExerciseItemMetaData>) => MutableModel<ExerciseItem, ExerciseItemMetaData> | void): ExerciseItem;
}

type EagerNewsShownToUser = {
  readonly id: string;
  readonly user?: User | null;
  readonly news?: News | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly newsShownToUserUserId?: string | null;
  readonly newsShownToUserNewsId?: string | null;
}

type LazyNewsShownToUser = {
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly news: AsyncItem<News | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly newsShownToUserUserId?: string | null;
  readonly newsShownToUserNewsId?: string | null;
}

export declare type NewsShownToUser = LazyLoading extends LazyLoadingDisabled ? EagerNewsShownToUser : LazyNewsShownToUser

export declare const NewsShownToUser: (new (init: ModelInit<NewsShownToUser, NewsShownToUserMetaData>) => NewsShownToUser) & {
  copyOf(source: NewsShownToUser, mutator: (draft: MutableModel<NewsShownToUser, NewsShownToUserMetaData>) => MutableModel<NewsShownToUser, NewsShownToUserMetaData> | void): NewsShownToUser;
}

type EagerUser = {
  readonly id: string;
  readonly username: string;
  readonly givenName?: string | null;
  readonly displayName?: string | null;
  readonly surname?: string | null;
  readonly gender?: string | null;
  readonly mail?: string | null;
  readonly mobile?: string | null;
  readonly weight?: string | null;
  readonly height?: string | null;
  readonly backgroundColor?: string | null;
  readonly specialBackgroundColor?: string | null;
  readonly imageUrl?: string | null;
  readonly age?: string | null;
  readonly userType?: UserType | keyof typeof UserType | null;
  readonly goalTrainingTypes?: (UserGoalTrainingTypes | null)[] | null;
  readonly goalMuscleGroups?: (UserGoalMuscleGroups | null)[] | null;
  readonly recipes?: (DietRecipe | null)[] | null;
  readonly DietRecipeProgresses?: (DietRecipeProgress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly username: string;
  readonly givenName?: string | null;
  readonly displayName?: string | null;
  readonly surname?: string | null;
  readonly gender?: string | null;
  readonly mail?: string | null;
  readonly mobile?: string | null;
  readonly weight?: string | null;
  readonly height?: string | null;
  readonly backgroundColor?: string | null;
  readonly specialBackgroundColor?: string | null;
  readonly imageUrl?: string | null;
  readonly age?: string | null;
  readonly userType?: UserType | keyof typeof UserType | null;
  readonly goalTrainingTypes: AsyncCollection<UserGoalTrainingTypes>;
  readonly goalMuscleGroups: AsyncCollection<UserGoalMuscleGroups>;
  readonly recipes: AsyncCollection<DietRecipe>;
  readonly DietRecipeProgresses: AsyncCollection<DietRecipeProgress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerNews = {
  readonly id: string;
  readonly type?: NewsType | keyof typeof NewsType | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly videoUrl?: string | null;
  readonly groupID?: string | null;
  readonly headerText?: string | null;
  readonly bannerImageUrl?: string | null;
  readonly imageUrl?: string | null;
  readonly contentHtml?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNews = {
  readonly id: string;
  readonly type?: NewsType | keyof typeof NewsType | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly videoUrl?: string | null;
  readonly groupID?: string | null;
  readonly headerText?: string | null;
  readonly bannerImageUrl?: string | null;
  readonly imageUrl?: string | null;
  readonly contentHtml?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type News = LazyLoading extends LazyLoadingDisabled ? EagerNews : LazyNews

export declare const News: (new (init: ModelInit<News, NewsMetaData>) => News) & {
  copyOf(source: News, mutator: (draft: MutableModel<News, NewsMetaData>) => MutableModel<News, NewsMetaData> | void): News;
}

type EagerProgram = {
  readonly id: string;
  readonly name?: string | null;
  readonly imageUrl?: string | null;
  readonly homepageImageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly description?: string | null;
  readonly duration?: string | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly workouts?: (ProgramWorkouts | null)[] | null;
  readonly muscleGroups?: (ProgramMuscleGroups | null)[] | null;
  readonly trainingTypes?: (ProgramTrainingTypes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgram = {
  readonly id: string;
  readonly name?: string | null;
  readonly imageUrl?: string | null;
  readonly homepageImageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly description?: string | null;
  readonly duration?: string | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly workouts: AsyncCollection<ProgramWorkouts>;
  readonly muscleGroups: AsyncCollection<ProgramMuscleGroups>;
  readonly trainingTypes: AsyncCollection<ProgramTrainingTypes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Program = LazyLoading extends LazyLoadingDisabled ? EagerProgram : LazyProgram

export declare const Program: (new (init: ModelInit<Program, ProgramMetaData>) => Program) & {
  copyOf(source: Program, mutator: (draft: MutableModel<Program, ProgramMetaData>) => MutableModel<Program, ProgramMetaData> | void): Program;
}

type EagerWorkout = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly headerImage?: string | null;
  readonly backgroundColor?: string | null;
  readonly imageUrl?: string | null;
  readonly headerDescription?: string | null;
  readonly duration?: number | null;
  readonly numberofExercises?: number | null;
  readonly level?: string | null;
  readonly equipment?: string | null;
  readonly calories?: string | null;
  readonly muscleGroups?: (WorkoutMusleGroups | null)[] | null;
  readonly trainingTypes?: (WorkoutTrainingTypes | null)[] | null;
  readonly programs?: (ProgramWorkouts | null)[] | null;
  readonly challenges?: (ChallengeWorkouts | null)[] | null;
  readonly exerciseItems?: (ExerciseItem | null)[] | null;
  readonly exercises?: (WorkoutExercise | null)[] | null;
  readonly properties?: (WorkoutProperties | null)[] | null;
  readonly category?: Category | null;
  readonly authorCoach?: (CoachWorkouts | null)[] | null;
  readonly authorUser?: User | null;
  readonly userWorkoutProgress?: (UserWorkoutProgress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workoutAuthorUserId?: string | null;
}

type LazyWorkout = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly headerImage?: string | null;
  readonly backgroundColor?: string | null;
  readonly imageUrl?: string | null;
  readonly headerDescription?: string | null;
  readonly duration?: number | null;
  readonly numberofExercises?: number | null;
  readonly level?: string | null;
  readonly equipment?: string | null;
  readonly calories?: string | null;
  readonly muscleGroups: AsyncCollection<WorkoutMusleGroups>;
  readonly trainingTypes: AsyncCollection<WorkoutTrainingTypes>;
  readonly programs: AsyncCollection<ProgramWorkouts>;
  readonly challenges: AsyncCollection<ChallengeWorkouts>;
  readonly exerciseItems: AsyncCollection<ExerciseItem>;
  readonly exercises: AsyncCollection<WorkoutExercise>;
  readonly properties: AsyncCollection<WorkoutProperties>;
  readonly category: AsyncItem<Category | undefined>;
  readonly authorCoach: AsyncCollection<CoachWorkouts>;
  readonly authorUser: AsyncItem<User | undefined>;
  readonly userWorkoutProgress: AsyncCollection<UserWorkoutProgress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workoutAuthorUserId?: string | null;
}

export declare type Workout = LazyLoading extends LazyLoadingDisabled ? EagerWorkout : LazyWorkout

export declare const Workout: (new (init: ModelInit<Workout, WorkoutMetaData>) => Workout) & {
  copyOf(source: Workout, mutator: (draft: MutableModel<Workout, WorkoutMetaData>) => MutableModel<Workout, WorkoutMetaData> | void): Workout;
}

type EagerChallenge = {
  readonly id: string;
  readonly name?: string | null;
  readonly imageUrl?: string | null;
  readonly homepageImageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly description?: string | null;
  readonly duration?: string | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly workouts?: (ChallengeWorkouts | null)[] | null;
  readonly exerciseItems?: (ExerciseItem | null)[] | null;
  readonly exercises?: (ChallengeExercise | null)[] | null;
  readonly muscleGroups?: (ChallengeMuscleGroups | null)[] | null;
  readonly trainingTypes?: (ChallengeTrainingTypes | null)[] | null;
  readonly authorCoach?: (CoachChallenges | null)[] | null;
  readonly authorUser?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly challengeAuthorUserId?: string | null;
}

type LazyChallenge = {
  readonly id: string;
  readonly name?: string | null;
  readonly imageUrl?: string | null;
  readonly homepageImageUrl?: string | null;
  readonly backgroundColor?: string | null;
  readonly description?: string | null;
  readonly duration?: string | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly workouts: AsyncCollection<ChallengeWorkouts>;
  readonly exerciseItems: AsyncCollection<ExerciseItem>;
  readonly exercises: AsyncCollection<ChallengeExercise>;
  readonly muscleGroups: AsyncCollection<ChallengeMuscleGroups>;
  readonly trainingTypes: AsyncCollection<ChallengeTrainingTypes>;
  readonly authorCoach: AsyncCollection<CoachChallenges>;
  readonly authorUser: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly challengeAuthorUserId?: string | null;
}

export declare type Challenge = LazyLoading extends LazyLoadingDisabled ? EagerChallenge : LazyChallenge

export declare const Challenge: (new (init: ModelInit<Challenge, ChallengeMetaData>) => Challenge) & {
  copyOf(source: Challenge, mutator: (draft: MutableModel<Challenge, ChallengeMetaData>) => MutableModel<Challenge, ChallengeMetaData> | void): Challenge;
}

type EagerWorkoutProperties = {
  readonly id: string;
  readonly langu?: string | null;
  readonly text?: string | null;
  readonly icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workoutPropertiesId?: string | null;
}

type LazyWorkoutProperties = {
  readonly id: string;
  readonly langu?: string | null;
  readonly text?: string | null;
  readonly icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workoutPropertiesId?: string | null;
}

export declare type WorkoutProperties = LazyLoading extends LazyLoadingDisabled ? EagerWorkoutProperties : LazyWorkoutProperties

export declare const WorkoutProperties: (new (init: ModelInit<WorkoutProperties, WorkoutPropertiesMetaData>) => WorkoutProperties) & {
  copyOf(source: WorkoutProperties, mutator: (draft: MutableModel<WorkoutProperties, WorkoutPropertiesMetaData>) => MutableModel<WorkoutProperties, WorkoutPropertiesMetaData> | void): WorkoutProperties;
}

type EagerUserWorkoutHistory = {
  readonly id: string;
  readonly workout?: Workout | null;
  readonly user?: User | null;
  readonly lastExercise?: Exercise | null;
  readonly lastExerciseItem?: ExerciseItem | null;
  readonly progress?: ProgressIndicator | keyof typeof ProgressIndicator | null;
  readonly createdAt: string;
  readonly description?: string | null;
  readonly exerciseCount?: number | null;
  readonly updatedAt?: string | null;
  readonly userWorkoutHistoryWorkoutId?: string | null;
  readonly userWorkoutHistoryUserId?: string | null;
  readonly userWorkoutHistoryLastExerciseId?: string | null;
  readonly userWorkoutHistoryLastExerciseItemId?: string | null;
}

type LazyUserWorkoutHistory = {
  readonly id: string;
  readonly workout: AsyncItem<Workout | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly lastExercise: AsyncItem<Exercise | undefined>;
  readonly lastExerciseItem: AsyncItem<ExerciseItem | undefined>;
  readonly progress?: ProgressIndicator | keyof typeof ProgressIndicator | null;
  readonly createdAt: string;
  readonly description?: string | null;
  readonly exerciseCount?: number | null;
  readonly updatedAt?: string | null;
  readonly userWorkoutHistoryWorkoutId?: string | null;
  readonly userWorkoutHistoryUserId?: string | null;
  readonly userWorkoutHistoryLastExerciseId?: string | null;
  readonly userWorkoutHistoryLastExerciseItemId?: string | null;
}

export declare type UserWorkoutHistory = LazyLoading extends LazyLoadingDisabled ? EagerUserWorkoutHistory : LazyUserWorkoutHistory

export declare const UserWorkoutHistory: (new (init: ModelInit<UserWorkoutHistory, UserWorkoutHistoryMetaData>) => UserWorkoutHistory) & {
  copyOf(source: UserWorkoutHistory, mutator: (draft: MutableModel<UserWorkoutHistory, UserWorkoutHistoryMetaData>) => MutableModel<UserWorkoutHistory, UserWorkoutHistoryMetaData> | void): UserWorkoutHistory;
}

type EagerUserChallengeHistory = {
  readonly id: string;
  readonly challenge?: Challenge | null;
  readonly user?: User | null;
  readonly progress?: ProgressIndicator | keyof typeof ProgressIndicator | null;
  readonly createdAt: string;
  readonly description?: string | null;
  readonly exerciseCount?: number | null;
  readonly exerciseDuraionInSeconds?: number | null;
  readonly updatedAt?: string | null;
  readonly userChallengeHistoryChallengeId?: string | null;
  readonly userChallengeHistoryUserId?: string | null;
}

type LazyUserChallengeHistory = {
  readonly id: string;
  readonly challenge: AsyncItem<Challenge | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly progress?: ProgressIndicator | keyof typeof ProgressIndicator | null;
  readonly createdAt: string;
  readonly description?: string | null;
  readonly exerciseCount?: number | null;
  readonly exerciseDuraionInSeconds?: number | null;
  readonly updatedAt?: string | null;
  readonly userChallengeHistoryChallengeId?: string | null;
  readonly userChallengeHistoryUserId?: string | null;
}

export declare type UserChallengeHistory = LazyLoading extends LazyLoadingDisabled ? EagerUserChallengeHistory : LazyUserChallengeHistory

export declare const UserChallengeHistory: (new (init: ModelInit<UserChallengeHistory, UserChallengeHistoryMetaData>) => UserChallengeHistory) & {
  copyOf(source: UserChallengeHistory, mutator: (draft: MutableModel<UserChallengeHistory, UserChallengeHistoryMetaData>) => MutableModel<UserChallengeHistory, UserChallengeHistoryMetaData> | void): UserChallengeHistory;
}

type EagerUserProgramHistory = {
  readonly id: string;
  readonly user?: User | null;
  readonly program?: Program | null;
  readonly lastWorkout?: Workout | null;
  readonly lastExerciseItem?: ExerciseItem | null;
  readonly progress?: ProgressIndicator | keyof typeof ProgressIndicator | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProgramHistoryUserId?: string | null;
  readonly userProgramHistoryProgramId?: string | null;
  readonly userProgramHistoryLastWorkoutId?: string | null;
  readonly userProgramHistoryLastExerciseItemId?: string | null;
}

type LazyUserProgramHistory = {
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly program: AsyncItem<Program | undefined>;
  readonly lastWorkout: AsyncItem<Workout | undefined>;
  readonly lastExerciseItem: AsyncItem<ExerciseItem | undefined>;
  readonly progress?: ProgressIndicator | keyof typeof ProgressIndicator | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProgramHistoryUserId?: string | null;
  readonly userProgramHistoryProgramId?: string | null;
  readonly userProgramHistoryLastWorkoutId?: string | null;
  readonly userProgramHistoryLastExerciseItemId?: string | null;
}

export declare type UserProgramHistory = LazyLoading extends LazyLoadingDisabled ? EagerUserProgramHistory : LazyUserProgramHistory

export declare const UserProgramHistory: (new (init: ModelInit<UserProgramHistory, UserProgramHistoryMetaData>) => UserProgramHistory) & {
  copyOf(source: UserProgramHistory, mutator: (draft: MutableModel<UserProgramHistory, UserProgramHistoryMetaData>) => MutableModel<UserProgramHistory, UserProgramHistoryMetaData> | void): UserProgramHistory;
}

type EagerCategory = {
  readonly id: string;
  readonly name?: string | null;
  readonly imageUrl?: string | null;
  readonly headerImageUrl?: string | null;
  readonly description?: string | null;
  readonly backgroundColor?: string | null;
  readonly isFavorite?: boolean | null;
  readonly workouts?: (Workout | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly id: string;
  readonly name?: string | null;
  readonly imageUrl?: string | null;
  readonly headerImageUrl?: string | null;
  readonly description?: string | null;
  readonly backgroundColor?: string | null;
  readonly isFavorite?: boolean | null;
  readonly workouts: AsyncCollection<Workout>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category, CategoryMetaData>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

type EagerBlog = {
  readonly id: string;
  readonly name?: string | null;
  readonly title?: string | null;
  readonly subtitle?: string | null;
  readonly imageUrl?: string | null;
  readonly headerImageUrl?: string | null;
  readonly description?: string | null;
  readonly htmlContent?: string | null;
  readonly backgroundColor?: string | null;
  readonly isFavorite?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly id: string;
  readonly name?: string | null;
  readonly title?: string | null;
  readonly subtitle?: string | null;
  readonly imageUrl?: string | null;
  readonly headerImageUrl?: string | null;
  readonly description?: string | null;
  readonly htmlContent?: string | null;
  readonly backgroundColor?: string | null;
  readonly isFavorite?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog, BlogMetaData>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}

type EagerTag = {
  readonly id: string;
  readonly label: string;
  readonly exercises?: (TagExercise | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly id: string;
  readonly label: string;
  readonly exercises: AsyncCollection<TagExercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag, TagMetaData>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

type EagerUserWorkoutProgress = {
  readonly id: string;
  readonly userId: string;
  readonly completedExercises: string[];
  readonly progress: number;
  readonly isCompleted: boolean;
  readonly workoutId?: string | null;
  readonly workoutName?: string | null;
  readonly workoutExerciseCount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workoutUserWorkoutProgressId?: string | null;
}

type LazyUserWorkoutProgress = {
  readonly id: string;
  readonly userId: string;
  readonly completedExercises: string[];
  readonly progress: number;
  readonly isCompleted: boolean;
  readonly workoutId?: string | null;
  readonly workoutName?: string | null;
  readonly workoutExerciseCount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workoutUserWorkoutProgressId?: string | null;
}

export declare type UserWorkoutProgress = LazyLoading extends LazyLoadingDisabled ? EagerUserWorkoutProgress : LazyUserWorkoutProgress

export declare const UserWorkoutProgress: (new (init: ModelInit<UserWorkoutProgress, UserWorkoutProgressMetaData>) => UserWorkoutProgress) & {
  copyOf(source: UserWorkoutProgress, mutator: (draft: MutableModel<UserWorkoutProgress, UserWorkoutProgressMetaData>) => MutableModel<UserWorkoutProgress, UserWorkoutProgressMetaData> | void): UserWorkoutProgress;
}

type EagerUserProgramProgress = {
  readonly id: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProgramProgress = {
  readonly id: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProgramProgress = LazyLoading extends LazyLoadingDisabled ? EagerUserProgramProgress : LazyUserProgramProgress

export declare const UserProgramProgress: (new (init: ModelInit<UserProgramProgress, UserProgramProgressMetaData>) => UserProgramProgress) & {
  copyOf(source: UserProgramProgress, mutator: (draft: MutableModel<UserProgramProgress, UserProgramProgressMetaData>) => MutableModel<UserProgramProgress, UserProgramProgressMetaData> | void): UserProgramProgress;
}

type EagerVideoExercise = {
  readonly id: string;
  readonly video: Video;
  readonly exercise: Exercise;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoExercise = {
  readonly id: string;
  readonly video: AsyncItem<Video>;
  readonly exercise: AsyncItem<Exercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoExercise = LazyLoading extends LazyLoadingDisabled ? EagerVideoExercise : LazyVideoExercise

export declare const VideoExercise: (new (init: ModelInit<VideoExercise, VideoExerciseMetaData>) => VideoExercise) & {
  copyOf(source: VideoExercise, mutator: (draft: MutableModel<VideoExercise, VideoExerciseMetaData>) => MutableModel<VideoExercise, VideoExerciseMetaData> | void): VideoExercise;
}

type EagerTrainingTypeExercise = {
  readonly id: string;
  readonly trainingType: TrainingType;
  readonly exercise: Exercise;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrainingTypeExercise = {
  readonly id: string;
  readonly trainingType: AsyncItem<TrainingType>;
  readonly exercise: AsyncItem<Exercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrainingTypeExercise = LazyLoading extends LazyLoadingDisabled ? EagerTrainingTypeExercise : LazyTrainingTypeExercise

export declare const TrainingTypeExercise: (new (init: ModelInit<TrainingTypeExercise, TrainingTypeExerciseMetaData>) => TrainingTypeExercise) & {
  copyOf(source: TrainingTypeExercise, mutator: (draft: MutableModel<TrainingTypeExercise, TrainingTypeExerciseMetaData>) => MutableModel<TrainingTypeExercise, TrainingTypeExerciseMetaData> | void): TrainingTypeExercise;
}

type EagerUserGoalTrainingTypes = {
  readonly id: string;
  readonly trainingType: TrainingType;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserGoalTrainingTypes = {
  readonly id: string;
  readonly trainingType: AsyncItem<TrainingType>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserGoalTrainingTypes = LazyLoading extends LazyLoadingDisabled ? EagerUserGoalTrainingTypes : LazyUserGoalTrainingTypes

export declare const UserGoalTrainingTypes: (new (init: ModelInit<UserGoalTrainingTypes, UserGoalTrainingTypesMetaData>) => UserGoalTrainingTypes) & {
  copyOf(source: UserGoalTrainingTypes, mutator: (draft: MutableModel<UserGoalTrainingTypes, UserGoalTrainingTypesMetaData>) => MutableModel<UserGoalTrainingTypes, UserGoalTrainingTypesMetaData> | void): UserGoalTrainingTypes;
}

type EagerWorkoutTrainingTypes = {
  readonly id: string;
  readonly trainingType: TrainingType;
  readonly workout: Workout;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkoutTrainingTypes = {
  readonly id: string;
  readonly trainingType: AsyncItem<TrainingType>;
  readonly workout: AsyncItem<Workout>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WorkoutTrainingTypes = LazyLoading extends LazyLoadingDisabled ? EagerWorkoutTrainingTypes : LazyWorkoutTrainingTypes

export declare const WorkoutTrainingTypes: (new (init: ModelInit<WorkoutTrainingTypes, WorkoutTrainingTypesMetaData>) => WorkoutTrainingTypes) & {
  copyOf(source: WorkoutTrainingTypes, mutator: (draft: MutableModel<WorkoutTrainingTypes, WorkoutTrainingTypesMetaData>) => MutableModel<WorkoutTrainingTypes, WorkoutTrainingTypesMetaData> | void): WorkoutTrainingTypes;
}

type EagerProgramTrainingTypes = {
  readonly id: string;
  readonly trainingType: TrainingType;
  readonly program: Program;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramTrainingTypes = {
  readonly id: string;
  readonly trainingType: AsyncItem<TrainingType>;
  readonly program: AsyncItem<Program>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgramTrainingTypes = LazyLoading extends LazyLoadingDisabled ? EagerProgramTrainingTypes : LazyProgramTrainingTypes

export declare const ProgramTrainingTypes: (new (init: ModelInit<ProgramTrainingTypes, ProgramTrainingTypesMetaData>) => ProgramTrainingTypes) & {
  copyOf(source: ProgramTrainingTypes, mutator: (draft: MutableModel<ProgramTrainingTypes, ProgramTrainingTypesMetaData>) => MutableModel<ProgramTrainingTypes, ProgramTrainingTypesMetaData> | void): ProgramTrainingTypes;
}

type EagerChallengeTrainingTypes = {
  readonly id: string;
  readonly trainingType: TrainingType;
  readonly challenge: Challenge;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChallengeTrainingTypes = {
  readonly id: string;
  readonly trainingType: AsyncItem<TrainingType>;
  readonly challenge: AsyncItem<Challenge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChallengeTrainingTypes = LazyLoading extends LazyLoadingDisabled ? EagerChallengeTrainingTypes : LazyChallengeTrainingTypes

export declare const ChallengeTrainingTypes: (new (init: ModelInit<ChallengeTrainingTypes, ChallengeTrainingTypesMetaData>) => ChallengeTrainingTypes) & {
  copyOf(source: ChallengeTrainingTypes, mutator: (draft: MutableModel<ChallengeTrainingTypes, ChallengeTrainingTypesMetaData>) => MutableModel<ChallengeTrainingTypes, ChallengeTrainingTypesMetaData> | void): ChallengeTrainingTypes;
}

type EagerMuscleGroupExercise = {
  readonly id: string;
  readonly muscleGroup: MuscleGroup;
  readonly exercise: Exercise;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMuscleGroupExercise = {
  readonly id: string;
  readonly muscleGroup: AsyncItem<MuscleGroup>;
  readonly exercise: AsyncItem<Exercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MuscleGroupExercise = LazyLoading extends LazyLoadingDisabled ? EagerMuscleGroupExercise : LazyMuscleGroupExercise

export declare const MuscleGroupExercise: (new (init: ModelInit<MuscleGroupExercise, MuscleGroupExerciseMetaData>) => MuscleGroupExercise) & {
  copyOf(source: MuscleGroupExercise, mutator: (draft: MutableModel<MuscleGroupExercise, MuscleGroupExerciseMetaData>) => MutableModel<MuscleGroupExercise, MuscleGroupExerciseMetaData> | void): MuscleGroupExercise;
}

type EagerUserGoalMuscleGroups = {
  readonly id: string;
  readonly muscleGroup: MuscleGroup;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserGoalMuscleGroups = {
  readonly id: string;
  readonly muscleGroup: AsyncItem<MuscleGroup>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserGoalMuscleGroups = LazyLoading extends LazyLoadingDisabled ? EagerUserGoalMuscleGroups : LazyUserGoalMuscleGroups

export declare const UserGoalMuscleGroups: (new (init: ModelInit<UserGoalMuscleGroups, UserGoalMuscleGroupsMetaData>) => UserGoalMuscleGroups) & {
  copyOf(source: UserGoalMuscleGroups, mutator: (draft: MutableModel<UserGoalMuscleGroups, UserGoalMuscleGroupsMetaData>) => MutableModel<UserGoalMuscleGroups, UserGoalMuscleGroupsMetaData> | void): UserGoalMuscleGroups;
}

type EagerWorkoutMusleGroups = {
  readonly id: string;
  readonly muscleGroup: MuscleGroup;
  readonly workout: Workout;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkoutMusleGroups = {
  readonly id: string;
  readonly muscleGroup: AsyncItem<MuscleGroup>;
  readonly workout: AsyncItem<Workout>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WorkoutMusleGroups = LazyLoading extends LazyLoadingDisabled ? EagerWorkoutMusleGroups : LazyWorkoutMusleGroups

export declare const WorkoutMusleGroups: (new (init: ModelInit<WorkoutMusleGroups, WorkoutMusleGroupsMetaData>) => WorkoutMusleGroups) & {
  copyOf(source: WorkoutMusleGroups, mutator: (draft: MutableModel<WorkoutMusleGroups, WorkoutMusleGroupsMetaData>) => MutableModel<WorkoutMusleGroups, WorkoutMusleGroupsMetaData> | void): WorkoutMusleGroups;
}

type EagerProgramMuscleGroups = {
  readonly id: string;
  readonly muscleGroup: MuscleGroup;
  readonly program: Program;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramMuscleGroups = {
  readonly id: string;
  readonly muscleGroup: AsyncItem<MuscleGroup>;
  readonly program: AsyncItem<Program>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgramMuscleGroups = LazyLoading extends LazyLoadingDisabled ? EagerProgramMuscleGroups : LazyProgramMuscleGroups

export declare const ProgramMuscleGroups: (new (init: ModelInit<ProgramMuscleGroups, ProgramMuscleGroupsMetaData>) => ProgramMuscleGroups) & {
  copyOf(source: ProgramMuscleGroups, mutator: (draft: MutableModel<ProgramMuscleGroups, ProgramMuscleGroupsMetaData>) => MutableModel<ProgramMuscleGroups, ProgramMuscleGroupsMetaData> | void): ProgramMuscleGroups;
}

type EagerChallengeMuscleGroups = {
  readonly id: string;
  readonly muscleGroup: MuscleGroup;
  readonly challenge: Challenge;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChallengeMuscleGroups = {
  readonly id: string;
  readonly muscleGroup: AsyncItem<MuscleGroup>;
  readonly challenge: AsyncItem<Challenge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChallengeMuscleGroups = LazyLoading extends LazyLoadingDisabled ? EagerChallengeMuscleGroups : LazyChallengeMuscleGroups

export declare const ChallengeMuscleGroups: (new (init: ModelInit<ChallengeMuscleGroups, ChallengeMuscleGroupsMetaData>) => ChallengeMuscleGroups) & {
  copyOf(source: ChallengeMuscleGroups, mutator: (draft: MutableModel<ChallengeMuscleGroups, ChallengeMuscleGroupsMetaData>) => MutableModel<ChallengeMuscleGroups, ChallengeMuscleGroupsMetaData> | void): ChallengeMuscleGroups;
}

type EagerEquipmentExercise = {
  readonly id: string;
  readonly equipment: Equipment;
  readonly exercise: Exercise;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipmentExercise = {
  readonly id: string;
  readonly equipment: AsyncItem<Equipment>;
  readonly exercise: AsyncItem<Exercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipmentExercise = LazyLoading extends LazyLoadingDisabled ? EagerEquipmentExercise : LazyEquipmentExercise

export declare const EquipmentExercise: (new (init: ModelInit<EquipmentExercise, EquipmentExerciseMetaData>) => EquipmentExercise) & {
  copyOf(source: EquipmentExercise, mutator: (draft: MutableModel<EquipmentExercise, EquipmentExerciseMetaData>) => MutableModel<EquipmentExercise, EquipmentExerciseMetaData> | void): EquipmentExercise;
}

type EagerTagExercise = {
  readonly id: string;
  readonly exercise: Exercise;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTagExercise = {
  readonly id: string;
  readonly exercise: AsyncItem<Exercise>;
  readonly tag: AsyncItem<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TagExercise = LazyLoading extends LazyLoadingDisabled ? EagerTagExercise : LazyTagExercise

export declare const TagExercise: (new (init: ModelInit<TagExercise, TagExerciseMetaData>) => TagExercise) & {
  copyOf(source: TagExercise, mutator: (draft: MutableModel<TagExercise, TagExerciseMetaData>) => MutableModel<TagExercise, TagExerciseMetaData> | void): TagExercise;
}

type EagerChallengeExercise = {
  readonly id: string;
  readonly exercise: Exercise;
  readonly challenge: Challenge;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChallengeExercise = {
  readonly id: string;
  readonly exercise: AsyncItem<Exercise>;
  readonly challenge: AsyncItem<Challenge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChallengeExercise = LazyLoading extends LazyLoadingDisabled ? EagerChallengeExercise : LazyChallengeExercise

export declare const ChallengeExercise: (new (init: ModelInit<ChallengeExercise, ChallengeExerciseMetaData>) => ChallengeExercise) & {
  copyOf(source: ChallengeExercise, mutator: (draft: MutableModel<ChallengeExercise, ChallengeExerciseMetaData>) => MutableModel<ChallengeExercise, ChallengeExerciseMetaData> | void): ChallengeExercise;
}

type EagerWorkoutExercise = {
  readonly id: string;
  readonly exercise: Exercise;
  readonly workout: Workout;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkoutExercise = {
  readonly id: string;
  readonly exercise: AsyncItem<Exercise>;
  readonly workout: AsyncItem<Workout>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WorkoutExercise = LazyLoading extends LazyLoadingDisabled ? EagerWorkoutExercise : LazyWorkoutExercise

export declare const WorkoutExercise: (new (init: ModelInit<WorkoutExercise, WorkoutExerciseMetaData>) => WorkoutExercise) & {
  copyOf(source: WorkoutExercise, mutator: (draft: MutableModel<WorkoutExercise, WorkoutExerciseMetaData>) => MutableModel<WorkoutExercise, WorkoutExerciseMetaData> | void): WorkoutExercise;
}

type EagerCoachExercise = {
  readonly id: string;
  readonly exercise: Exercise;
  readonly coach: Coach;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoachExercise = {
  readonly id: string;
  readonly exercise: AsyncItem<Exercise>;
  readonly coach: AsyncItem<Coach>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CoachExercise = LazyLoading extends LazyLoadingDisabled ? EagerCoachExercise : LazyCoachExercise

export declare const CoachExercise: (new (init: ModelInit<CoachExercise, CoachExerciseMetaData>) => CoachExercise) & {
  copyOf(source: CoachExercise, mutator: (draft: MutableModel<CoachExercise, CoachExerciseMetaData>) => MutableModel<CoachExercise, CoachExerciseMetaData> | void): CoachExercise;
}

type EagerCoachWorkouts = {
  readonly id: string;
  readonly coach: Coach;
  readonly workout: Workout;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoachWorkouts = {
  readonly id: string;
  readonly coach: AsyncItem<Coach>;
  readonly workout: AsyncItem<Workout>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CoachWorkouts = LazyLoading extends LazyLoadingDisabled ? EagerCoachWorkouts : LazyCoachWorkouts

export declare const CoachWorkouts: (new (init: ModelInit<CoachWorkouts, CoachWorkoutsMetaData>) => CoachWorkouts) & {
  copyOf(source: CoachWorkouts, mutator: (draft: MutableModel<CoachWorkouts, CoachWorkoutsMetaData>) => MutableModel<CoachWorkouts, CoachWorkoutsMetaData> | void): CoachWorkouts;
}

type EagerCoachChallenges = {
  readonly id: string;
  readonly coach: Coach;
  readonly challenge: Challenge;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoachChallenges = {
  readonly id: string;
  readonly coach: AsyncItem<Coach>;
  readonly challenge: AsyncItem<Challenge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CoachChallenges = LazyLoading extends LazyLoadingDisabled ? EagerCoachChallenges : LazyCoachChallenges

export declare const CoachChallenges: (new (init: ModelInit<CoachChallenges, CoachChallengesMetaData>) => CoachChallenges) & {
  copyOf(source: CoachChallenges, mutator: (draft: MutableModel<CoachChallenges, CoachChallengesMetaData>) => MutableModel<CoachChallenges, CoachChallengesMetaData> | void): CoachChallenges;
}

type EagerProgramWorkouts = {
  readonly id: string;
  readonly program: Program;
  readonly workout: Workout;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramWorkouts = {
  readonly id: string;
  readonly program: AsyncItem<Program>;
  readonly workout: AsyncItem<Workout>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgramWorkouts = LazyLoading extends LazyLoadingDisabled ? EagerProgramWorkouts : LazyProgramWorkouts

export declare const ProgramWorkouts: (new (init: ModelInit<ProgramWorkouts, ProgramWorkoutsMetaData>) => ProgramWorkouts) & {
  copyOf(source: ProgramWorkouts, mutator: (draft: MutableModel<ProgramWorkouts, ProgramWorkoutsMetaData>) => MutableModel<ProgramWorkouts, ProgramWorkoutsMetaData> | void): ProgramWorkouts;
}

type EagerChallengeWorkouts = {
  readonly id: string;
  readonly workout: Workout;
  readonly challenge: Challenge;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChallengeWorkouts = {
  readonly id: string;
  readonly workout: AsyncItem<Workout>;
  readonly challenge: AsyncItem<Challenge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChallengeWorkouts = LazyLoading extends LazyLoadingDisabled ? EagerChallengeWorkouts : LazyChallengeWorkouts

export declare const ChallengeWorkouts: (new (init: ModelInit<ChallengeWorkouts, ChallengeWorkoutsMetaData>) => ChallengeWorkouts) & {
  copyOf(source: ChallengeWorkouts, mutator: (draft: MutableModel<ChallengeWorkouts, ChallengeWorkoutsMetaData>) => MutableModel<ChallengeWorkouts, ChallengeWorkoutsMetaData> | void): ChallengeWorkouts;
}