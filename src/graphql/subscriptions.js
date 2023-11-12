/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onCreateVideo(filter: $filter) {
      id
      title
      description
      duration
      Exercises {
        items {
          id
          videoID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      VideoUrl
      thumbnailUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onUpdateVideo(filter: $filter) {
      id
      title
      description
      duration
      Exercises {
        items {
          id
          videoID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      VideoUrl
      thumbnailUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo($filter: ModelSubscriptionVideoFilterInput) {
    onDeleteVideo(filter: $filter) {
      id
      title
      description
      duration
      Exercises {
        items {
          id
          videoID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      VideoUrl
      thumbnailUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDietDayDetails = /* GraphQL */ `
  subscription OnCreateDietDayDetails(
    $filter: ModelSubscriptionDietDayDetailsFilterInput
  ) {
    onCreateDietDayDetails(filter: $filter) {
      id
      time
      goal
      content
      protein
      quarge
      recipe
      dietdaysID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDietDayDetails = /* GraphQL */ `
  subscription OnUpdateDietDayDetails(
    $filter: ModelSubscriptionDietDayDetailsFilterInput
  ) {
    onUpdateDietDayDetails(filter: $filter) {
      id
      time
      goal
      content
      protein
      quarge
      recipe
      dietdaysID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDietDayDetails = /* GraphQL */ `
  subscription OnDeleteDietDayDetails(
    $filter: ModelSubscriptionDietDayDetailsFilterInput
  ) {
    onDeleteDietDayDetails(filter: $filter) {
      id
      time
      goal
      content
      protein
      quarge
      recipe
      dietdaysID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDietDays = /* GraphQL */ `
  subscription OnCreateDietDays($filter: ModelSubscriptionDietDaysFilterInput) {
    onCreateDietDays(filter: $filter) {
      id
      day
      title
      DietDayDetails {
        items {
          id
          time
          goal
          content
          protein
          quarge
          recipe
          dietdaysID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      description
      dietrecipeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDietDays = /* GraphQL */ `
  subscription OnUpdateDietDays($filter: ModelSubscriptionDietDaysFilterInput) {
    onUpdateDietDays(filter: $filter) {
      id
      day
      title
      DietDayDetails {
        items {
          id
          time
          goal
          content
          protein
          quarge
          recipe
          dietdaysID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      description
      dietrecipeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDietDays = /* GraphQL */ `
  subscription OnDeleteDietDays($filter: ModelSubscriptionDietDaysFilterInput) {
    onDeleteDietDays(filter: $filter) {
      id
      day
      title
      DietDayDetails {
        items {
          id
          time
          goal
          content
          protein
          quarge
          recipe
          dietdaysID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      description
      dietrecipeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDietRecipeProgress = /* GraphQL */ `
  subscription OnCreateDietRecipeProgress(
    $filter: ModelSubscriptionDietRecipeProgressFilterInput
  ) {
    onCreateDietRecipeProgress(filter: $filter) {
      id
      startDate
      description
      comment
      DietRecipe {
        id
        name
        gender
        recipeName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        Diets {
          nextToken
          startedAt
        }
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userID
      isPaused
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      dietRecipeProgressDietRecipeId
    }
  }
`;
export const onUpdateDietRecipeProgress = /* GraphQL */ `
  subscription OnUpdateDietRecipeProgress(
    $filter: ModelSubscriptionDietRecipeProgressFilterInput
  ) {
    onUpdateDietRecipeProgress(filter: $filter) {
      id
      startDate
      description
      comment
      DietRecipe {
        id
        name
        gender
        recipeName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        Diets {
          nextToken
          startedAt
        }
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userID
      isPaused
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      dietRecipeProgressDietRecipeId
    }
  }
`;
export const onDeleteDietRecipeProgress = /* GraphQL */ `
  subscription OnDeleteDietRecipeProgress(
    $filter: ModelSubscriptionDietRecipeProgressFilterInput
  ) {
    onDeleteDietRecipeProgress(filter: $filter) {
      id
      startDate
      description
      comment
      DietRecipe {
        id
        name
        gender
        recipeName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        Diets {
          nextToken
          startedAt
        }
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userID
      isPaused
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      dietRecipeProgressDietRecipeId
    }
  }
`;
export const onCreateDietRecipe = /* GraphQL */ `
  subscription OnCreateDietRecipe(
    $filter: ModelSubscriptionDietRecipeFilterInput
  ) {
    onCreateDietRecipe(filter: $filter) {
      id
      name
      gender
      recipeName
      description
      imageUrl
      onboardingImageUrl
      backgroundColor
      Diets {
        items {
          id
          day
          title
          description
          dietrecipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDietRecipe = /* GraphQL */ `
  subscription OnUpdateDietRecipe(
    $filter: ModelSubscriptionDietRecipeFilterInput
  ) {
    onUpdateDietRecipe(filter: $filter) {
      id
      name
      gender
      recipeName
      description
      imageUrl
      onboardingImageUrl
      backgroundColor
      Diets {
        items {
          id
          day
          title
          description
          dietrecipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDietRecipe = /* GraphQL */ `
  subscription OnDeleteDietRecipe(
    $filter: ModelSubscriptionDietRecipeFilterInput
  ) {
    onDeleteDietRecipe(filter: $filter) {
      id
      name
      gender
      recipeName
      description
      imageUrl
      onboardingImageUrl
      backgroundColor
      Diets {
        items {
          id
          day
          title
          description
          dietrecipeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTrainingType = /* GraphQL */ `
  subscription OnCreateTrainingType(
    $filter: ModelSubscriptionTrainingTypeFilterInput
  ) {
    onCreateTrainingType(filter: $filter) {
      id
      name
      gender
      menuName
      description
      imageUrl
      onboardingImageUrl
      backgroundColor
      exercises {
        items {
          id
          trainingTypeID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          trainingTypeID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          trainingTypeID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          trainingTypeID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          trainingTypeID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTrainingType = /* GraphQL */ `
  subscription OnUpdateTrainingType(
    $filter: ModelSubscriptionTrainingTypeFilterInput
  ) {
    onUpdateTrainingType(filter: $filter) {
      id
      name
      gender
      menuName
      description
      imageUrl
      onboardingImageUrl
      backgroundColor
      exercises {
        items {
          id
          trainingTypeID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          trainingTypeID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          trainingTypeID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          trainingTypeID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          trainingTypeID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTrainingType = /* GraphQL */ `
  subscription OnDeleteTrainingType(
    $filter: ModelSubscriptionTrainingTypeFilterInput
  ) {
    onDeleteTrainingType(filter: $filter) {
      id
      name
      gender
      menuName
      description
      imageUrl
      onboardingImageUrl
      backgroundColor
      exercises {
        items {
          id
          trainingTypeID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          trainingTypeID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          trainingTypeID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          trainingTypeID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          trainingTypeID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateMuscleGroup = /* GraphQL */ `
  subscription OnCreateMuscleGroup(
    $filter: ModelSubscriptionMuscleGroupFilterInput
  ) {
    onCreateMuscleGroup(filter: $filter) {
      id
      name
      backgroundColor
      specialBackgroundColor
      imageUrl
      exercises {
        items {
          id
          muscleGroupID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          muscleGroupID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          muscleGroupID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          muscleGroupID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          muscleGroupID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMuscleGroup = /* GraphQL */ `
  subscription OnUpdateMuscleGroup(
    $filter: ModelSubscriptionMuscleGroupFilterInput
  ) {
    onUpdateMuscleGroup(filter: $filter) {
      id
      name
      backgroundColor
      specialBackgroundColor
      imageUrl
      exercises {
        items {
          id
          muscleGroupID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          muscleGroupID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          muscleGroupID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          muscleGroupID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          muscleGroupID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMuscleGroup = /* GraphQL */ `
  subscription OnDeleteMuscleGroup(
    $filter: ModelSubscriptionMuscleGroupFilterInput
  ) {
    onDeleteMuscleGroup(filter: $filter) {
      id
      name
      backgroundColor
      specialBackgroundColor
      imageUrl
      exercises {
        items {
          id
          muscleGroupID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          muscleGroupID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          muscleGroupID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          muscleGroupID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          muscleGroupID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOnboarding = /* GraphQL */ `
  subscription OnCreateOnboarding(
    $filter: ModelSubscriptionOnboardingFilterInput
    $owner: String
  ) {
    onCreateOnboarding(filter: $filter, owner: $owner) {
      id
      imageUrl
      description
      isDisplay
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateOnboarding = /* GraphQL */ `
  subscription OnUpdateOnboarding(
    $filter: ModelSubscriptionOnboardingFilterInput
    $owner: String
  ) {
    onUpdateOnboarding(filter: $filter, owner: $owner) {
      id
      imageUrl
      description
      isDisplay
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteOnboarding = /* GraphQL */ `
  subscription OnDeleteOnboarding(
    $filter: ModelSubscriptionOnboardingFilterInput
    $owner: String
  ) {
    onDeleteOnboarding(filter: $filter, owner: $owner) {
      id
      imageUrl
      description
      isDisplay
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateEquipment = /* GraphQL */ `
  subscription OnCreateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onCreateEquipment(filter: $filter) {
      id
      name
      imageUrl
      backgroundColor
      exercises {
        items {
          id
          equipmentID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEquipment = /* GraphQL */ `
  subscription OnUpdateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onUpdateEquipment(filter: $filter) {
      id
      name
      imageUrl
      backgroundColor
      exercises {
        items {
          id
          equipmentID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEquipment = /* GraphQL */ `
  subscription OnDeleteEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onDeleteEquipment(filter: $filter) {
      id
      name
      imageUrl
      backgroundColor
      exercises {
        items {
          id
          equipmentID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
      id
      title
      thumbnailUrl
      imageUrl
      oneCycleDuration
      views
      likes
      dislikes
      description
      backgroundColor
      level
      exerciseExtension1
      exerciseExtension2
      exerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      tags {
        items {
          id
          exerciseID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      videos {
        items {
          id
          videoID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          exerciseID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          exerciseID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingtypes {
        items {
          id
          trainingTypeID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      musclegroups {
        items {
          id
          muscleGroupID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      equipments {
        items {
          id
          equipmentID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      coachs {
        items {
          id
          exerciseID
          coachID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseExerciseItemId
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
      id
      title
      thumbnailUrl
      imageUrl
      oneCycleDuration
      views
      likes
      dislikes
      description
      backgroundColor
      level
      exerciseExtension1
      exerciseExtension2
      exerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      tags {
        items {
          id
          exerciseID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      videos {
        items {
          id
          videoID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          exerciseID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          exerciseID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingtypes {
        items {
          id
          trainingTypeID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      musclegroups {
        items {
          id
          muscleGroupID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      equipments {
        items {
          id
          equipmentID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      coachs {
        items {
          id
          exerciseID
          coachID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseExerciseItemId
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
      id
      title
      thumbnailUrl
      imageUrl
      oneCycleDuration
      views
      likes
      dislikes
      description
      backgroundColor
      level
      exerciseExtension1
      exerciseExtension2
      exerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      tags {
        items {
          id
          exerciseID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      videos {
        items {
          id
          videoID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          exerciseID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          exerciseID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingtypes {
        items {
          id
          trainingTypeID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      musclegroups {
        items {
          id
          muscleGroupID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      equipments {
        items {
          id
          equipmentID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      coachs {
        items {
          id
          exerciseID
          coachID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseExerciseItemId
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      category
      title
      caption
      readMinutes
      image
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      category
      title
      caption
      readMinutes
      image
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      category
      title
      caption
      readMinutes
      image
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
    }
  }
`;
export const onCreateCoach = /* GraphQL */ `
  subscription OnCreateCoach($filter: ModelSubscriptionCoachFilterInput) {
    onCreateCoach(filter: $filter) {
      id
      username
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      backgroundImageUrl
      presentationVideoUrl
      bio
      exercises {
        items {
          id
          exerciseID
          coachID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          coachID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          coachID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      coachUserId
    }
  }
`;
export const onUpdateCoach = /* GraphQL */ `
  subscription OnUpdateCoach($filter: ModelSubscriptionCoachFilterInput) {
    onUpdateCoach(filter: $filter) {
      id
      username
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      backgroundImageUrl
      presentationVideoUrl
      bio
      exercises {
        items {
          id
          exerciseID
          coachID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          coachID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          coachID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      coachUserId
    }
  }
`;
export const onDeleteCoach = /* GraphQL */ `
  subscription OnDeleteCoach($filter: ModelSubscriptionCoachFilterInput) {
    onDeleteCoach(filter: $filter) {
      id
      username
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      backgroundImageUrl
      presentationVideoUrl
      bio
      exercises {
        items {
          id
          exerciseID
          coachID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workouts {
        items {
          id
          coachID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          coachID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      coachUserId
    }
  }
`;
export const onCreateExerciseItem = /* GraphQL */ `
  subscription OnCreateExerciseItem(
    $filter: ModelSubscriptionExerciseItemFilterInput
  ) {
    onCreateExerciseItem(filter: $filter) {
      id
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      sets
      workoutTime
      restTime
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutExerciseItemsId
      challengeExerciseItemsId
      exerciseItemExerciseId
    }
  }
`;
export const onUpdateExerciseItem = /* GraphQL */ `
  subscription OnUpdateExerciseItem(
    $filter: ModelSubscriptionExerciseItemFilterInput
  ) {
    onUpdateExerciseItem(filter: $filter) {
      id
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      sets
      workoutTime
      restTime
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutExerciseItemsId
      challengeExerciseItemsId
      exerciseItemExerciseId
    }
  }
`;
export const onDeleteExerciseItem = /* GraphQL */ `
  subscription OnDeleteExerciseItem(
    $filter: ModelSubscriptionExerciseItemFilterInput
  ) {
    onDeleteExerciseItem(filter: $filter) {
      id
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      sets
      workoutTime
      restTime
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutExerciseItemsId
      challengeExerciseItemsId
      exerciseItemExerciseId
    }
  }
`;
export const onCreateNewsShownToUser = /* GraphQL */ `
  subscription OnCreateNewsShownToUser(
    $filter: ModelSubscriptionNewsShownToUserFilterInput
  ) {
    onCreateNewsShownToUser(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      news {
        id
        type
        title
        description
        videoUrl
        groupID
        headerText
        bannerImageUrl
        imageUrl
        contentHtml
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      newsShownToUserUserId
      newsShownToUserNewsId
    }
  }
`;
export const onUpdateNewsShownToUser = /* GraphQL */ `
  subscription OnUpdateNewsShownToUser(
    $filter: ModelSubscriptionNewsShownToUserFilterInput
  ) {
    onUpdateNewsShownToUser(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      news {
        id
        type
        title
        description
        videoUrl
        groupID
        headerText
        bannerImageUrl
        imageUrl
        contentHtml
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      newsShownToUserUserId
      newsShownToUserNewsId
    }
  }
`;
export const onDeleteNewsShownToUser = /* GraphQL */ `
  subscription OnDeleteNewsShownToUser(
    $filter: ModelSubscriptionNewsShownToUserFilterInput
  ) {
    onDeleteNewsShownToUser(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      news {
        id
        type
        title
        description
        videoUrl
        groupID
        headerText
        bannerImageUrl
        imageUrl
        contentHtml
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      newsShownToUserUserId
      newsShownToUserNewsId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      givenName
      displayName
      surname
      gender
      mail
      mobile
      weight
      height
      backgroundColor
      specialBackgroundColor
      imageUrl
      age
      userType
      goalTrainingTypes {
        items {
          id
          trainingTypeID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      goalMuscleGroups {
        items {
          id
          muscleGroupID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      recipes {
        items {
          id
          name
          gender
          recipeName
          description
          imageUrl
          onboardingImageUrl
          backgroundColor
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DietRecipeProgresses {
        items {
          id
          startDate
          description
          comment
          userID
          isPaused
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          dietRecipeProgressDietRecipeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      givenName
      displayName
      surname
      gender
      mail
      mobile
      weight
      height
      backgroundColor
      specialBackgroundColor
      imageUrl
      age
      userType
      goalTrainingTypes {
        items {
          id
          trainingTypeID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      goalMuscleGroups {
        items {
          id
          muscleGroupID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      recipes {
        items {
          id
          name
          gender
          recipeName
          description
          imageUrl
          onboardingImageUrl
          backgroundColor
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DietRecipeProgresses {
        items {
          id
          startDate
          description
          comment
          userID
          isPaused
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          dietRecipeProgressDietRecipeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      givenName
      displayName
      surname
      gender
      mail
      mobile
      weight
      height
      backgroundColor
      specialBackgroundColor
      imageUrl
      age
      userType
      goalTrainingTypes {
        items {
          id
          trainingTypeID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      goalMuscleGroups {
        items {
          id
          muscleGroupID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      recipes {
        items {
          id
          name
          gender
          recipeName
          description
          imageUrl
          onboardingImageUrl
          backgroundColor
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      DietRecipeProgresses {
        items {
          id
          startDate
          description
          comment
          userID
          isPaused
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          dietRecipeProgressDietRecipeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNews = /* GraphQL */ `
  subscription OnCreateNews($filter: ModelSubscriptionNewsFilterInput) {
    onCreateNews(filter: $filter) {
      id
      type
      title
      description
      videoUrl
      groupID
      headerText
      bannerImageUrl
      imageUrl
      contentHtml
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNews = /* GraphQL */ `
  subscription OnUpdateNews($filter: ModelSubscriptionNewsFilterInput) {
    onUpdateNews(filter: $filter) {
      id
      type
      title
      description
      videoUrl
      groupID
      headerText
      bannerImageUrl
      imageUrl
      contentHtml
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNews = /* GraphQL */ `
  subscription OnDeleteNews($filter: ModelSubscriptionNewsFilterInput) {
    onDeleteNews(filter: $filter) {
      id
      type
      title
      description
      videoUrl
      groupID
      headerText
      bannerImageUrl
      imageUrl
      contentHtml
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onCreateProgram(filter: $filter) {
      id
      name
      imageUrl
      homepageImageUrl
      backgroundColor
      description
      duration
      level
      workouts {
        items {
          id
          programID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      muscleGroups {
        items {
          id
          muscleGroupID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onUpdateProgram(filter: $filter) {
      id
      name
      imageUrl
      homepageImageUrl
      backgroundColor
      description
      duration
      level
      workouts {
        items {
          id
          programID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      muscleGroups {
        items {
          id
          muscleGroupID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
    onDeleteProgram(filter: $filter) {
      id
      name
      imageUrl
      homepageImageUrl
      backgroundColor
      description
      duration
      level
      workouts {
        items {
          id
          programID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      muscleGroups {
        items {
          id
          muscleGroupID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          programID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onCreateWorkout(filter: $filter) {
      id
      title
      description
      url
      headerImage
      backgroundColor
      imageUrl
      headerDescription
      duration
      numberofExercises
      level
      equipment
      calories
      muscleGroups {
        items {
          id
          muscleGroupID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          programID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          workoutID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      exerciseItems {
        items {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        nextToken
        startedAt
      }
      exercises {
        items {
          id
          exerciseID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      properties {
        items {
          id
          langu
          text
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutPropertiesId
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        imageUrl
        headerImageUrl
        description
        backgroundColor
        isFavorite
        workouts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      authorCoach {
        items {
          id
          coachID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorUser {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userWorkoutProgress {
        items {
          id
          userId
          completedExercises
          progress
          isCompleted
          workoutId
          workoutName
          workoutExerciseCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutUserWorkoutProgressId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryWorkoutsId
      workoutAuthorUserId
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onUpdateWorkout(filter: $filter) {
      id
      title
      description
      url
      headerImage
      backgroundColor
      imageUrl
      headerDescription
      duration
      numberofExercises
      level
      equipment
      calories
      muscleGroups {
        items {
          id
          muscleGroupID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          programID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          workoutID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      exerciseItems {
        items {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        nextToken
        startedAt
      }
      exercises {
        items {
          id
          exerciseID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      properties {
        items {
          id
          langu
          text
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutPropertiesId
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        imageUrl
        headerImageUrl
        description
        backgroundColor
        isFavorite
        workouts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      authorCoach {
        items {
          id
          coachID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorUser {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userWorkoutProgress {
        items {
          id
          userId
          completedExercises
          progress
          isCompleted
          workoutId
          workoutName
          workoutExerciseCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutUserWorkoutProgressId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryWorkoutsId
      workoutAuthorUserId
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onDeleteWorkout(filter: $filter) {
      id
      title
      description
      url
      headerImage
      backgroundColor
      imageUrl
      headerDescription
      duration
      numberofExercises
      level
      equipment
      calories
      muscleGroups {
        items {
          id
          muscleGroupID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      programs {
        items {
          id
          programID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          workoutID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      exerciseItems {
        items {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        nextToken
        startedAt
      }
      exercises {
        items {
          id
          exerciseID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      properties {
        items {
          id
          langu
          text
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutPropertiesId
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        imageUrl
        headerImageUrl
        description
        backgroundColor
        isFavorite
        workouts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      authorCoach {
        items {
          id
          coachID
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorUser {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userWorkoutProgress {
        items {
          id
          userId
          completedExercises
          progress
          isCompleted
          workoutId
          workoutName
          workoutExerciseCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutUserWorkoutProgressId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryWorkoutsId
      workoutAuthorUserId
    }
  }
`;
export const onCreateChallenge = /* GraphQL */ `
  subscription OnCreateChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onCreateChallenge(filter: $filter) {
      id
      name
      imageUrl
      homepageImageUrl
      backgroundColor
      description
      duration
      level
      workouts {
        items {
          id
          workoutID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      exerciseItems {
        items {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        nextToken
        startedAt
      }
      exercises {
        items {
          id
          exerciseID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      muscleGroups {
        items {
          id
          muscleGroupID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorCoach {
        items {
          id
          coachID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorUser {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      challengeAuthorUserId
    }
  }
`;
export const onUpdateChallenge = /* GraphQL */ `
  subscription OnUpdateChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onUpdateChallenge(filter: $filter) {
      id
      name
      imageUrl
      homepageImageUrl
      backgroundColor
      description
      duration
      level
      workouts {
        items {
          id
          workoutID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      exerciseItems {
        items {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        nextToken
        startedAt
      }
      exercises {
        items {
          id
          exerciseID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      muscleGroups {
        items {
          id
          muscleGroupID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorCoach {
        items {
          id
          coachID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorUser {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      challengeAuthorUserId
    }
  }
`;
export const onDeleteChallenge = /* GraphQL */ `
  subscription OnDeleteChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onDeleteChallenge(filter: $filter) {
      id
      name
      imageUrl
      homepageImageUrl
      backgroundColor
      description
      duration
      level
      workouts {
        items {
          id
          workoutID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      exerciseItems {
        items {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        nextToken
        startedAt
      }
      exercises {
        items {
          id
          exerciseID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      muscleGroups {
        items {
          id
          muscleGroupID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      trainingTypes {
        items {
          id
          trainingTypeID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorCoach {
        items {
          id
          coachID
          challengeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      authorUser {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      challengeAuthorUserId
    }
  }
`;
export const onCreateWorkoutProperties = /* GraphQL */ `
  subscription OnCreateWorkoutProperties(
    $filter: ModelSubscriptionWorkoutPropertiesFilterInput
  ) {
    onCreateWorkoutProperties(filter: $filter) {
      id
      langu
      text
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutPropertiesId
    }
  }
`;
export const onUpdateWorkoutProperties = /* GraphQL */ `
  subscription OnUpdateWorkoutProperties(
    $filter: ModelSubscriptionWorkoutPropertiesFilterInput
  ) {
    onUpdateWorkoutProperties(filter: $filter) {
      id
      langu
      text
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutPropertiesId
    }
  }
`;
export const onDeleteWorkoutProperties = /* GraphQL */ `
  subscription OnDeleteWorkoutProperties(
    $filter: ModelSubscriptionWorkoutPropertiesFilterInput
  ) {
    onDeleteWorkoutProperties(filter: $filter) {
      id
      langu
      text
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutPropertiesId
    }
  }
`;
export const onCreateUserWorkoutHistory = /* GraphQL */ `
  subscription OnCreateUserWorkoutHistory(
    $filter: ModelSubscriptionUserWorkoutHistoryFilterInput
  ) {
    onCreateUserWorkoutHistory(filter: $filter) {
      id
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastExercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      lastExerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      progress
      createdAt
      description
      exerciseCount
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWorkoutHistoryWorkoutId
      userWorkoutHistoryUserId
      userWorkoutHistoryLastExerciseId
      userWorkoutHistoryLastExerciseItemId
    }
  }
`;
export const onUpdateUserWorkoutHistory = /* GraphQL */ `
  subscription OnUpdateUserWorkoutHistory(
    $filter: ModelSubscriptionUserWorkoutHistoryFilterInput
  ) {
    onUpdateUserWorkoutHistory(filter: $filter) {
      id
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastExercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      lastExerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      progress
      createdAt
      description
      exerciseCount
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWorkoutHistoryWorkoutId
      userWorkoutHistoryUserId
      userWorkoutHistoryLastExerciseId
      userWorkoutHistoryLastExerciseItemId
    }
  }
`;
export const onDeleteUserWorkoutHistory = /* GraphQL */ `
  subscription OnDeleteUserWorkoutHistory(
    $filter: ModelSubscriptionUserWorkoutHistoryFilterInput
  ) {
    onDeleteUserWorkoutHistory(filter: $filter) {
      id
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastExercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      lastExerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      progress
      createdAt
      description
      exerciseCount
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWorkoutHistoryWorkoutId
      userWorkoutHistoryUserId
      userWorkoutHistoryLastExerciseId
      userWorkoutHistoryLastExerciseItemId
    }
  }
`;
export const onCreateUserChallengeHistory = /* GraphQL */ `
  subscription OnCreateUserChallengeHistory(
    $filter: ModelSubscriptionUserChallengeHistoryFilterInput
  ) {
    onCreateUserChallengeHistory(filter: $filter) {
      id
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      progress
      createdAt
      description
      exerciseCount
      exerciseDuraionInSeconds
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userChallengeHistoryChallengeId
      userChallengeHistoryUserId
    }
  }
`;
export const onUpdateUserChallengeHistory = /* GraphQL */ `
  subscription OnUpdateUserChallengeHistory(
    $filter: ModelSubscriptionUserChallengeHistoryFilterInput
  ) {
    onUpdateUserChallengeHistory(filter: $filter) {
      id
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      progress
      createdAt
      description
      exerciseCount
      exerciseDuraionInSeconds
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userChallengeHistoryChallengeId
      userChallengeHistoryUserId
    }
  }
`;
export const onDeleteUserChallengeHistory = /* GraphQL */ `
  subscription OnDeleteUserChallengeHistory(
    $filter: ModelSubscriptionUserChallengeHistoryFilterInput
  ) {
    onDeleteUserChallengeHistory(filter: $filter) {
      id
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      progress
      createdAt
      description
      exerciseCount
      exerciseDuraionInSeconds
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userChallengeHistoryChallengeId
      userChallengeHistoryUserId
    }
  }
`;
export const onCreateUserProgramHistory = /* GraphQL */ `
  subscription OnCreateUserProgramHistory(
    $filter: ModelSubscriptionUserProgramHistoryFilterInput
  ) {
    onCreateUserProgramHistory(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastWorkout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      lastExerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      progress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProgramHistoryUserId
      userProgramHistoryProgramId
      userProgramHistoryLastWorkoutId
      userProgramHistoryLastExerciseItemId
    }
  }
`;
export const onUpdateUserProgramHistory = /* GraphQL */ `
  subscription OnUpdateUserProgramHistory(
    $filter: ModelSubscriptionUserProgramHistoryFilterInput
  ) {
    onUpdateUserProgramHistory(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastWorkout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      lastExerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      progress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProgramHistoryUserId
      userProgramHistoryProgramId
      userProgramHistoryLastWorkoutId
      userProgramHistoryLastExerciseItemId
    }
  }
`;
export const onDeleteUserProgramHistory = /* GraphQL */ `
  subscription OnDeleteUserProgramHistory(
    $filter: ModelSubscriptionUserProgramHistoryFilterInput
  ) {
    onDeleteUserProgramHistory(filter: $filter) {
      id
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastWorkout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      lastExerciseItem {
        id
        exercise {
          id
          title
          thumbnailUrl
          imageUrl
          oneCycleDuration
          views
          likes
          dislikes
          description
          backgroundColor
          level
          exerciseExtension1
          exerciseExtension2
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
      }
      progress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProgramHistoryUserId
      userProgramHistoryProgramId
      userProgramHistoryLastWorkoutId
      userProgramHistoryLastExerciseItemId
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      imageUrl
      headerImageUrl
      description
      backgroundColor
      isFavorite
      workouts {
        items {
          id
          title
          description
          url
          headerImage
          backgroundColor
          imageUrl
          headerDescription
          duration
          numberofExercises
          level
          equipment
          calories
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryWorkoutsId
          workoutAuthorUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      imageUrl
      headerImageUrl
      description
      backgroundColor
      isFavorite
      workouts {
        items {
          id
          title
          description
          url
          headerImage
          backgroundColor
          imageUrl
          headerDescription
          duration
          numberofExercises
          level
          equipment
          calories
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryWorkoutsId
          workoutAuthorUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      imageUrl
      headerImageUrl
      description
      backgroundColor
      isFavorite
      workouts {
        items {
          id
          title
          description
          url
          headerImage
          backgroundColor
          imageUrl
          headerDescription
          duration
          numberofExercises
          level
          equipment
          calories
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryWorkoutsId
          workoutAuthorUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
      id
      name
      title
      subtitle
      imageUrl
      headerImageUrl
      description
      htmlContent
      backgroundColor
      isFavorite
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
      id
      name
      title
      subtitle
      imageUrl
      headerImageUrl
      description
      htmlContent
      backgroundColor
      isFavorite
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
      id
      name
      title
      subtitle
      imageUrl
      headerImageUrl
      description
      htmlContent
      backgroundColor
      isFavorite
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      id
      label
      exercises {
        items {
          id
          exerciseID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      id
      label
      exercises {
        items {
          id
          exerciseID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      id
      label
      exercises {
        items {
          id
          exerciseID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserWorkoutProgress = /* GraphQL */ `
  subscription OnCreateUserWorkoutProgress(
    $filter: ModelSubscriptionUserWorkoutProgressFilterInput
  ) {
    onCreateUserWorkoutProgress(filter: $filter) {
      id
      userId
      completedExercises
      progress
      isCompleted
      workoutId
      workoutName
      workoutExerciseCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutUserWorkoutProgressId
    }
  }
`;
export const onUpdateUserWorkoutProgress = /* GraphQL */ `
  subscription OnUpdateUserWorkoutProgress(
    $filter: ModelSubscriptionUserWorkoutProgressFilterInput
  ) {
    onUpdateUserWorkoutProgress(filter: $filter) {
      id
      userId
      completedExercises
      progress
      isCompleted
      workoutId
      workoutName
      workoutExerciseCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutUserWorkoutProgressId
    }
  }
`;
export const onDeleteUserWorkoutProgress = /* GraphQL */ `
  subscription OnDeleteUserWorkoutProgress(
    $filter: ModelSubscriptionUserWorkoutProgressFilterInput
  ) {
    onDeleteUserWorkoutProgress(filter: $filter) {
      id
      userId
      completedExercises
      progress
      isCompleted
      workoutId
      workoutName
      workoutExerciseCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workoutUserWorkoutProgressId
    }
  }
`;
export const onCreateUserProgramProgress = /* GraphQL */ `
  subscription OnCreateUserProgramProgress(
    $filter: ModelSubscriptionUserProgramProgressFilterInput
  ) {
    onCreateUserProgramProgress(filter: $filter) {
      id
      username
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserProgramProgress = /* GraphQL */ `
  subscription OnUpdateUserProgramProgress(
    $filter: ModelSubscriptionUserProgramProgressFilterInput
  ) {
    onUpdateUserProgramProgress(filter: $filter) {
      id
      username
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserProgramProgress = /* GraphQL */ `
  subscription OnDeleteUserProgramProgress(
    $filter: ModelSubscriptionUserProgramProgressFilterInput
  ) {
    onDeleteUserProgramProgress(filter: $filter) {
      id
      username
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateVideoExercise = /* GraphQL */ `
  subscription OnCreateVideoExercise(
    $filter: ModelSubscriptionVideoExerciseFilterInput
  ) {
    onCreateVideoExercise(filter: $filter) {
      id
      videoID
      exerciseID
      video {
        id
        title
        description
        duration
        Exercises {
          nextToken
          startedAt
        }
        VideoUrl
        thumbnailUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateVideoExercise = /* GraphQL */ `
  subscription OnUpdateVideoExercise(
    $filter: ModelSubscriptionVideoExerciseFilterInput
  ) {
    onUpdateVideoExercise(filter: $filter) {
      id
      videoID
      exerciseID
      video {
        id
        title
        description
        duration
        Exercises {
          nextToken
          startedAt
        }
        VideoUrl
        thumbnailUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteVideoExercise = /* GraphQL */ `
  subscription OnDeleteVideoExercise(
    $filter: ModelSubscriptionVideoExerciseFilterInput
  ) {
    onDeleteVideoExercise(filter: $filter) {
      id
      videoID
      exerciseID
      video {
        id
        title
        description
        duration
        Exercises {
          nextToken
          startedAt
        }
        VideoUrl
        thumbnailUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTrainingTypeExercise = /* GraphQL */ `
  subscription OnCreateTrainingTypeExercise(
    $filter: ModelSubscriptionTrainingTypeExerciseFilterInput
  ) {
    onCreateTrainingTypeExercise(filter: $filter) {
      id
      trainingTypeID
      exerciseID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTrainingTypeExercise = /* GraphQL */ `
  subscription OnUpdateTrainingTypeExercise(
    $filter: ModelSubscriptionTrainingTypeExerciseFilterInput
  ) {
    onUpdateTrainingTypeExercise(filter: $filter) {
      id
      trainingTypeID
      exerciseID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTrainingTypeExercise = /* GraphQL */ `
  subscription OnDeleteTrainingTypeExercise(
    $filter: ModelSubscriptionTrainingTypeExerciseFilterInput
  ) {
    onDeleteTrainingTypeExercise(filter: $filter) {
      id
      trainingTypeID
      exerciseID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserGoalTrainingTypes = /* GraphQL */ `
  subscription OnCreateUserGoalTrainingTypes(
    $filter: ModelSubscriptionUserGoalTrainingTypesFilterInput
  ) {
    onCreateUserGoalTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      userID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserGoalTrainingTypes = /* GraphQL */ `
  subscription OnUpdateUserGoalTrainingTypes(
    $filter: ModelSubscriptionUserGoalTrainingTypesFilterInput
  ) {
    onUpdateUserGoalTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      userID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserGoalTrainingTypes = /* GraphQL */ `
  subscription OnDeleteUserGoalTrainingTypes(
    $filter: ModelSubscriptionUserGoalTrainingTypesFilterInput
  ) {
    onDeleteUserGoalTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      userID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateWorkoutTrainingTypes = /* GraphQL */ `
  subscription OnCreateWorkoutTrainingTypes(
    $filter: ModelSubscriptionWorkoutTrainingTypesFilterInput
  ) {
    onCreateWorkoutTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      workoutID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateWorkoutTrainingTypes = /* GraphQL */ `
  subscription OnUpdateWorkoutTrainingTypes(
    $filter: ModelSubscriptionWorkoutTrainingTypesFilterInput
  ) {
    onUpdateWorkoutTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      workoutID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteWorkoutTrainingTypes = /* GraphQL */ `
  subscription OnDeleteWorkoutTrainingTypes(
    $filter: ModelSubscriptionWorkoutTrainingTypesFilterInput
  ) {
    onDeleteWorkoutTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      workoutID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProgramTrainingTypes = /* GraphQL */ `
  subscription OnCreateProgramTrainingTypes(
    $filter: ModelSubscriptionProgramTrainingTypesFilterInput
  ) {
    onCreateProgramTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      programID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProgramTrainingTypes = /* GraphQL */ `
  subscription OnUpdateProgramTrainingTypes(
    $filter: ModelSubscriptionProgramTrainingTypesFilterInput
  ) {
    onUpdateProgramTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      programID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProgramTrainingTypes = /* GraphQL */ `
  subscription OnDeleteProgramTrainingTypes(
    $filter: ModelSubscriptionProgramTrainingTypesFilterInput
  ) {
    onDeleteProgramTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      programID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChallengeTrainingTypes = /* GraphQL */ `
  subscription OnCreateChallengeTrainingTypes(
    $filter: ModelSubscriptionChallengeTrainingTypesFilterInput
  ) {
    onCreateChallengeTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      challengeID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChallengeTrainingTypes = /* GraphQL */ `
  subscription OnUpdateChallengeTrainingTypes(
    $filter: ModelSubscriptionChallengeTrainingTypesFilterInput
  ) {
    onUpdateChallengeTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      challengeID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChallengeTrainingTypes = /* GraphQL */ `
  subscription OnDeleteChallengeTrainingTypes(
    $filter: ModelSubscriptionChallengeTrainingTypesFilterInput
  ) {
    onDeleteChallengeTrainingTypes(filter: $filter) {
      id
      trainingTypeID
      challengeID
      trainingType {
        id
        name
        gender
        menuName
        description
        imageUrl
        onboardingImageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateMuscleGroupExercise = /* GraphQL */ `
  subscription OnCreateMuscleGroupExercise(
    $filter: ModelSubscriptionMuscleGroupExerciseFilterInput
  ) {
    onCreateMuscleGroupExercise(filter: $filter) {
      id
      muscleGroupID
      exerciseID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMuscleGroupExercise = /* GraphQL */ `
  subscription OnUpdateMuscleGroupExercise(
    $filter: ModelSubscriptionMuscleGroupExerciseFilterInput
  ) {
    onUpdateMuscleGroupExercise(filter: $filter) {
      id
      muscleGroupID
      exerciseID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMuscleGroupExercise = /* GraphQL */ `
  subscription OnDeleteMuscleGroupExercise(
    $filter: ModelSubscriptionMuscleGroupExerciseFilterInput
  ) {
    onDeleteMuscleGroupExercise(filter: $filter) {
      id
      muscleGroupID
      exerciseID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserGoalMuscleGroups = /* GraphQL */ `
  subscription OnCreateUserGoalMuscleGroups(
    $filter: ModelSubscriptionUserGoalMuscleGroupsFilterInput
  ) {
    onCreateUserGoalMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      userID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserGoalMuscleGroups = /* GraphQL */ `
  subscription OnUpdateUserGoalMuscleGroups(
    $filter: ModelSubscriptionUserGoalMuscleGroupsFilterInput
  ) {
    onUpdateUserGoalMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      userID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserGoalMuscleGroups = /* GraphQL */ `
  subscription OnDeleteUserGoalMuscleGroups(
    $filter: ModelSubscriptionUserGoalMuscleGroupsFilterInput
  ) {
    onDeleteUserGoalMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      userID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        username
        givenName
        displayName
        surname
        gender
        mail
        mobile
        weight
        height
        backgroundColor
        specialBackgroundColor
        imageUrl
        age
        userType
        goalTrainingTypes {
          nextToken
          startedAt
        }
        goalMuscleGroups {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        DietRecipeProgresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateWorkoutMusleGroups = /* GraphQL */ `
  subscription OnCreateWorkoutMusleGroups(
    $filter: ModelSubscriptionWorkoutMusleGroupsFilterInput
  ) {
    onCreateWorkoutMusleGroups(filter: $filter) {
      id
      muscleGroupID
      workoutID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateWorkoutMusleGroups = /* GraphQL */ `
  subscription OnUpdateWorkoutMusleGroups(
    $filter: ModelSubscriptionWorkoutMusleGroupsFilterInput
  ) {
    onUpdateWorkoutMusleGroups(filter: $filter) {
      id
      muscleGroupID
      workoutID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteWorkoutMusleGroups = /* GraphQL */ `
  subscription OnDeleteWorkoutMusleGroups(
    $filter: ModelSubscriptionWorkoutMusleGroupsFilterInput
  ) {
    onDeleteWorkoutMusleGroups(filter: $filter) {
      id
      muscleGroupID
      workoutID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProgramMuscleGroups = /* GraphQL */ `
  subscription OnCreateProgramMuscleGroups(
    $filter: ModelSubscriptionProgramMuscleGroupsFilterInput
  ) {
    onCreateProgramMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      programID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProgramMuscleGroups = /* GraphQL */ `
  subscription OnUpdateProgramMuscleGroups(
    $filter: ModelSubscriptionProgramMuscleGroupsFilterInput
  ) {
    onUpdateProgramMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      programID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProgramMuscleGroups = /* GraphQL */ `
  subscription OnDeleteProgramMuscleGroups(
    $filter: ModelSubscriptionProgramMuscleGroupsFilterInput
  ) {
    onDeleteProgramMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      programID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChallengeMuscleGroups = /* GraphQL */ `
  subscription OnCreateChallengeMuscleGroups(
    $filter: ModelSubscriptionChallengeMuscleGroupsFilterInput
  ) {
    onCreateChallengeMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      challengeID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChallengeMuscleGroups = /* GraphQL */ `
  subscription OnUpdateChallengeMuscleGroups(
    $filter: ModelSubscriptionChallengeMuscleGroupsFilterInput
  ) {
    onUpdateChallengeMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      challengeID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChallengeMuscleGroups = /* GraphQL */ `
  subscription OnDeleteChallengeMuscleGroups(
    $filter: ModelSubscriptionChallengeMuscleGroupsFilterInput
  ) {
    onDeleteChallengeMuscleGroups(filter: $filter) {
      id
      muscleGroupID
      challengeID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        exercises {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEquipmentExercise = /* GraphQL */ `
  subscription OnCreateEquipmentExercise(
    $filter: ModelSubscriptionEquipmentExerciseFilterInput
  ) {
    onCreateEquipmentExercise(filter: $filter) {
      id
      equipmentID
      exerciseID
      equipment {
        id
        name
        imageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEquipmentExercise = /* GraphQL */ `
  subscription OnUpdateEquipmentExercise(
    $filter: ModelSubscriptionEquipmentExerciseFilterInput
  ) {
    onUpdateEquipmentExercise(filter: $filter) {
      id
      equipmentID
      exerciseID
      equipment {
        id
        name
        imageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEquipmentExercise = /* GraphQL */ `
  subscription OnDeleteEquipmentExercise(
    $filter: ModelSubscriptionEquipmentExerciseFilterInput
  ) {
    onDeleteEquipmentExercise(filter: $filter) {
      id
      equipmentID
      exerciseID
      equipment {
        id
        name
        imageUrl
        backgroundColor
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTagExercise = /* GraphQL */ `
  subscription OnCreateTagExercise(
    $filter: ModelSubscriptionTagExerciseFilterInput
  ) {
    onCreateTagExercise(filter: $filter) {
      id
      exerciseID
      tagID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      tag {
        id
        label
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTagExercise = /* GraphQL */ `
  subscription OnUpdateTagExercise(
    $filter: ModelSubscriptionTagExerciseFilterInput
  ) {
    onUpdateTagExercise(filter: $filter) {
      id
      exerciseID
      tagID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      tag {
        id
        label
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTagExercise = /* GraphQL */ `
  subscription OnDeleteTagExercise(
    $filter: ModelSubscriptionTagExerciseFilterInput
  ) {
    onDeleteTagExercise(filter: $filter) {
      id
      exerciseID
      tagID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      tag {
        id
        label
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChallengeExercise = /* GraphQL */ `
  subscription OnCreateChallengeExercise(
    $filter: ModelSubscriptionChallengeExerciseFilterInput
  ) {
    onCreateChallengeExercise(filter: $filter) {
      id
      exerciseID
      challengeID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChallengeExercise = /* GraphQL */ `
  subscription OnUpdateChallengeExercise(
    $filter: ModelSubscriptionChallengeExerciseFilterInput
  ) {
    onUpdateChallengeExercise(filter: $filter) {
      id
      exerciseID
      challengeID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChallengeExercise = /* GraphQL */ `
  subscription OnDeleteChallengeExercise(
    $filter: ModelSubscriptionChallengeExerciseFilterInput
  ) {
    onDeleteChallengeExercise(filter: $filter) {
      id
      exerciseID
      challengeID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateWorkoutExercise = /* GraphQL */ `
  subscription OnCreateWorkoutExercise(
    $filter: ModelSubscriptionWorkoutExerciseFilterInput
  ) {
    onCreateWorkoutExercise(filter: $filter) {
      id
      exerciseID
      workoutID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateWorkoutExercise = /* GraphQL */ `
  subscription OnUpdateWorkoutExercise(
    $filter: ModelSubscriptionWorkoutExerciseFilterInput
  ) {
    onUpdateWorkoutExercise(filter: $filter) {
      id
      exerciseID
      workoutID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteWorkoutExercise = /* GraphQL */ `
  subscription OnDeleteWorkoutExercise(
    $filter: ModelSubscriptionWorkoutExerciseFilterInput
  ) {
    onDeleteWorkoutExercise(filter: $filter) {
      id
      exerciseID
      workoutID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCoachExercise = /* GraphQL */ `
  subscription OnCreateCoachExercise(
    $filter: ModelSubscriptionCoachExerciseFilterInput
  ) {
    onCreateCoachExercise(filter: $filter) {
      id
      exerciseID
      coachID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCoachExercise = /* GraphQL */ `
  subscription OnUpdateCoachExercise(
    $filter: ModelSubscriptionCoachExerciseFilterInput
  ) {
    onUpdateCoachExercise(filter: $filter) {
      id
      exerciseID
      coachID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCoachExercise = /* GraphQL */ `
  subscription OnDeleteCoachExercise(
    $filter: ModelSubscriptionCoachExerciseFilterInput
  ) {
    onDeleteCoachExercise(filter: $filter) {
      id
      exerciseID
      coachID
      exercise {
        id
        title
        thumbnailUrl
        imageUrl
        oneCycleDuration
        views
        likes
        dislikes
        description
        backgroundColor
        level
        exerciseExtension1
        exerciseExtension2
        exerciseItem {
          id
          sets
          workoutTime
          restTime
          order
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workoutExerciseItemsId
          challengeExerciseItemsId
          exerciseItemExerciseId
        }
        tags {
          nextToken
          startedAt
        }
        videos {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        trainingtypes {
          nextToken
          startedAt
        }
        musclegroups {
          nextToken
          startedAt
        }
        equipments {
          nextToken
          startedAt
        }
        coachs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseExerciseItemId
      }
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCoachWorkouts = /* GraphQL */ `
  subscription OnCreateCoachWorkouts(
    $filter: ModelSubscriptionCoachWorkoutsFilterInput
  ) {
    onCreateCoachWorkouts(filter: $filter) {
      id
      coachID
      workoutID
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCoachWorkouts = /* GraphQL */ `
  subscription OnUpdateCoachWorkouts(
    $filter: ModelSubscriptionCoachWorkoutsFilterInput
  ) {
    onUpdateCoachWorkouts(filter: $filter) {
      id
      coachID
      workoutID
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCoachWorkouts = /* GraphQL */ `
  subscription OnDeleteCoachWorkouts(
    $filter: ModelSubscriptionCoachWorkoutsFilterInput
  ) {
    onDeleteCoachWorkouts(filter: $filter) {
      id
      coachID
      workoutID
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCoachChallenges = /* GraphQL */ `
  subscription OnCreateCoachChallenges(
    $filter: ModelSubscriptionCoachChallengesFilterInput
  ) {
    onCreateCoachChallenges(filter: $filter) {
      id
      coachID
      challengeID
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCoachChallenges = /* GraphQL */ `
  subscription OnUpdateCoachChallenges(
    $filter: ModelSubscriptionCoachChallengesFilterInput
  ) {
    onUpdateCoachChallenges(filter: $filter) {
      id
      coachID
      challengeID
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCoachChallenges = /* GraphQL */ `
  subscription OnDeleteCoachChallenges(
    $filter: ModelSubscriptionCoachChallengesFilterInput
  ) {
    onDeleteCoachChallenges(filter: $filter) {
      id
      coachID
      challengeID
      coach {
        id
        username
        user {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        backgroundImageUrl
        presentationVideoUrl
        bio
        exercises {
          nextToken
          startedAt
        }
        workouts {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        coachUserId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProgramWorkouts = /* GraphQL */ `
  subscription OnCreateProgramWorkouts(
    $filter: ModelSubscriptionProgramWorkoutsFilterInput
  ) {
    onCreateProgramWorkouts(filter: $filter) {
      id
      programID
      workoutID
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProgramWorkouts = /* GraphQL */ `
  subscription OnUpdateProgramWorkouts(
    $filter: ModelSubscriptionProgramWorkoutsFilterInput
  ) {
    onUpdateProgramWorkouts(filter: $filter) {
      id
      programID
      workoutID
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProgramWorkouts = /* GraphQL */ `
  subscription OnDeleteProgramWorkouts(
    $filter: ModelSubscriptionProgramWorkoutsFilterInput
  ) {
    onDeleteProgramWorkouts(filter: $filter) {
      id
      programID
      workoutID
      program {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChallengeWorkouts = /* GraphQL */ `
  subscription OnCreateChallengeWorkouts(
    $filter: ModelSubscriptionChallengeWorkoutsFilterInput
  ) {
    onCreateChallengeWorkouts(filter: $filter) {
      id
      workoutID
      challengeID
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChallengeWorkouts = /* GraphQL */ `
  subscription OnUpdateChallengeWorkouts(
    $filter: ModelSubscriptionChallengeWorkoutsFilterInput
  ) {
    onUpdateChallengeWorkouts(filter: $filter) {
      id
      workoutID
      challengeID
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChallengeWorkouts = /* GraphQL */ `
  subscription OnDeleteChallengeWorkouts(
    $filter: ModelSubscriptionChallengeWorkoutsFilterInput
  ) {
    onDeleteChallengeWorkouts(filter: $filter) {
      id
      workoutID
      challengeID
      workout {
        id
        title
        description
        url
        headerImage
        backgroundColor
        imageUrl
        headerDescription
        duration
        numberofExercises
        level
        equipment
        calories
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        programs {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        properties {
          nextToken
          startedAt
        }
        category {
          id
          name
          imageUrl
          headerImageUrl
          description
          backgroundColor
          isFavorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userWorkoutProgress {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryWorkoutsId
        workoutAuthorUserId
      }
      challenge {
        id
        name
        imageUrl
        homepageImageUrl
        backgroundColor
        description
        duration
        level
        workouts {
          nextToken
          startedAt
        }
        exerciseItems {
          nextToken
          startedAt
        }
        exercises {
          nextToken
          startedAt
        }
        muscleGroups {
          nextToken
          startedAt
        }
        trainingTypes {
          nextToken
          startedAt
        }
        authorCoach {
          nextToken
          startedAt
        }
        authorUser {
          id
          username
          givenName
          displayName
          surname
          gender
          mail
          mobile
          weight
          height
          backgroundColor
          specialBackgroundColor
          imageUrl
          age
          userType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeAuthorUserId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
