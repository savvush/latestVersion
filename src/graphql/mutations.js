/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDietDayFoodPlan = /* GraphQL */ `
  mutation CreateDietDayFoodPlan(
    $input: CreateDietDayFoodPlanInput!
    $condition: ModelDietDayFoodPlanConditionInput
  ) {
    createDietDayFoodPlan(input: $input, condition: $condition) {
      id
      time
      target
      content
      dietdaydetailsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDietDayFoodPlan = /* GraphQL */ `
  mutation UpdateDietDayFoodPlan(
    $input: UpdateDietDayFoodPlanInput!
    $condition: ModelDietDayFoodPlanConditionInput
  ) {
    updateDietDayFoodPlan(input: $input, condition: $condition) {
      id
      time
      target
      content
      dietdaydetailsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDietDayFoodPlan = /* GraphQL */ `
  mutation DeleteDietDayFoodPlan(
    $input: DeleteDietDayFoodPlanInput!
    $condition: ModelDietDayFoodPlanConditionInput
  ) {
    deleteDietDayFoodPlan(input: $input, condition: $condition) {
      id
      time
      target
      content
      dietdaydetailsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      title
      description
      duration
      Exercises {
        nextToken
        __typename
      }
      VideoUrl
      thumbnailUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      title
      description
      duration
      Exercises {
        nextToken
        __typename
      }
      VideoUrl
      thumbnailUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      title
      description
      duration
      Exercises {
        nextToken
        __typename
      }
      VideoUrl
      thumbnailUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDietDayDetails = /* GraphQL */ `
  mutation CreateDietDayDetails(
    $input: CreateDietDayDetailsInput!
    $condition: ModelDietDayDetailsConditionInput
  ) {
    createDietDayDetails(input: $input, condition: $condition) {
      id
      time
      goal
      content
      protein
      quarge
      recipe
      strMealThumb
      strTags
      strYoutube
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strIngredient11
      strIngredient12
      strIngredient13
      strIngredient14
      strIngredient15
      strIngredient16
      strIngredient17
      strIngredient18
      strIngredient19
      strIngredient20
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
      strMeasure11
      strMeasure12
      strMeasure13
      strMeasure14
      strMeasure15
      strMeasure16
      strMeasure17
      strMeasure18
      strMeasure19
      strMeasure20
      dietdaysID
      DietDayFoodPlans {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDietDayDetails = /* GraphQL */ `
  mutation UpdateDietDayDetails(
    $input: UpdateDietDayDetailsInput!
    $condition: ModelDietDayDetailsConditionInput
  ) {
    updateDietDayDetails(input: $input, condition: $condition) {
      id
      time
      goal
      content
      protein
      quarge
      recipe
      strMealThumb
      strTags
      strYoutube
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strIngredient11
      strIngredient12
      strIngredient13
      strIngredient14
      strIngredient15
      strIngredient16
      strIngredient17
      strIngredient18
      strIngredient19
      strIngredient20
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
      strMeasure11
      strMeasure12
      strMeasure13
      strMeasure14
      strMeasure15
      strMeasure16
      strMeasure17
      strMeasure18
      strMeasure19
      strMeasure20
      dietdaysID
      DietDayFoodPlans {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDietDayDetails = /* GraphQL */ `
  mutation DeleteDietDayDetails(
    $input: DeleteDietDayDetailsInput!
    $condition: ModelDietDayDetailsConditionInput
  ) {
    deleteDietDayDetails(input: $input, condition: $condition) {
      id
      time
      goal
      content
      protein
      quarge
      recipe
      strMealThumb
      strTags
      strYoutube
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strIngredient11
      strIngredient12
      strIngredient13
      strIngredient14
      strIngredient15
      strIngredient16
      strIngredient17
      strIngredient18
      strIngredient19
      strIngredient20
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
      strMeasure11
      strMeasure12
      strMeasure13
      strMeasure14
      strMeasure15
      strMeasure16
      strMeasure17
      strMeasure18
      strMeasure19
      strMeasure20
      dietdaysID
      DietDayFoodPlans {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDietDays = /* GraphQL */ `
  mutation CreateDietDays(
    $input: CreateDietDaysInput!
    $condition: ModelDietDaysConditionInput
  ) {
    createDietDays(input: $input, condition: $condition) {
      id
      day
      title
      DietDayDetails {
        nextToken
        __typename
      }
      description
      dietrecipeID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDietDays = /* GraphQL */ `
  mutation UpdateDietDays(
    $input: UpdateDietDaysInput!
    $condition: ModelDietDaysConditionInput
  ) {
    updateDietDays(input: $input, condition: $condition) {
      id
      day
      title
      DietDayDetails {
        nextToken
        __typename
      }
      description
      dietrecipeID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDietDays = /* GraphQL */ `
  mutation DeleteDietDays(
    $input: DeleteDietDaysInput!
    $condition: ModelDietDaysConditionInput
  ) {
    deleteDietDays(input: $input, condition: $condition) {
      id
      day
      title
      DietDayDetails {
        nextToken
        __typename
      }
      description
      dietrecipeID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDietRecipeProgress = /* GraphQL */ `
  mutation CreateDietRecipeProgress(
    $input: CreateDietRecipeProgressInput!
    $condition: ModelDietRecipeProgressConditionInput
  ) {
    createDietRecipeProgress(input: $input, condition: $condition) {
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
        isstarted
        backgroundColor
        userID
        createdAt
        updatedAt
        __typename
      }
      userID
      isPaused
      createdAt
      updatedAt
      dietRecipeProgressDietRecipeId
      __typename
    }
  }
`;
export const updateDietRecipeProgress = /* GraphQL */ `
  mutation UpdateDietRecipeProgress(
    $input: UpdateDietRecipeProgressInput!
    $condition: ModelDietRecipeProgressConditionInput
  ) {
    updateDietRecipeProgress(input: $input, condition: $condition) {
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
        isstarted
        backgroundColor
        userID
        createdAt
        updatedAt
        __typename
      }
      userID
      isPaused
      createdAt
      updatedAt
      dietRecipeProgressDietRecipeId
      __typename
    }
  }
`;
export const deleteDietRecipeProgress = /* GraphQL */ `
  mutation DeleteDietRecipeProgress(
    $input: DeleteDietRecipeProgressInput!
    $condition: ModelDietRecipeProgressConditionInput
  ) {
    deleteDietRecipeProgress(input: $input, condition: $condition) {
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
        isstarted
        backgroundColor
        userID
        createdAt
        updatedAt
        __typename
      }
      userID
      isPaused
      createdAt
      updatedAt
      dietRecipeProgressDietRecipeId
      __typename
    }
  }
`;
export const createDietRecipe = /* GraphQL */ `
  mutation CreateDietRecipe(
    $input: CreateDietRecipeInput!
    $condition: ModelDietRecipeConditionInput
  ) {
    createDietRecipe(input: $input, condition: $condition) {
      id
      name
      gender
      recipeName
      description
      imageUrl
      onboardingImageUrl
      isstarted
      backgroundColor
      Diets {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDietRecipe = /* GraphQL */ `
  mutation UpdateDietRecipe(
    $input: UpdateDietRecipeInput!
    $condition: ModelDietRecipeConditionInput
  ) {
    updateDietRecipe(input: $input, condition: $condition) {
      id
      name
      gender
      recipeName
      description
      imageUrl
      onboardingImageUrl
      isstarted
      backgroundColor
      Diets {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDietRecipe = /* GraphQL */ `
  mutation DeleteDietRecipe(
    $input: DeleteDietRecipeInput!
    $condition: ModelDietRecipeConditionInput
  ) {
    deleteDietRecipe(input: $input, condition: $condition) {
      id
      name
      gender
      recipeName
      description
      imageUrl
      onboardingImageUrl
      isstarted
      backgroundColor
      Diets {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTrainingType = /* GraphQL */ `
  mutation CreateTrainingType(
    $input: CreateTrainingTypeInput!
    $condition: ModelTrainingTypeConditionInput
  ) {
    createTrainingType(input: $input, condition: $condition) {
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
        __typename
      }
      users {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTrainingType = /* GraphQL */ `
  mutation UpdateTrainingType(
    $input: UpdateTrainingTypeInput!
    $condition: ModelTrainingTypeConditionInput
  ) {
    updateTrainingType(input: $input, condition: $condition) {
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
        __typename
      }
      users {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTrainingType = /* GraphQL */ `
  mutation DeleteTrainingType(
    $input: DeleteTrainingTypeInput!
    $condition: ModelTrainingTypeConditionInput
  ) {
    deleteTrainingType(input: $input, condition: $condition) {
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
        __typename
      }
      users {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMuscleGroup = /* GraphQL */ `
  mutation CreateMuscleGroup(
    $input: CreateMuscleGroupInput!
    $condition: ModelMuscleGroupConditionInput
  ) {
    createMuscleGroup(input: $input, condition: $condition) {
      id
      name
      backgroundColor
      specialBackgroundColor
      imageUrl
      exercises {
        nextToken
        __typename
      }
      users {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMuscleGroup = /* GraphQL */ `
  mutation UpdateMuscleGroup(
    $input: UpdateMuscleGroupInput!
    $condition: ModelMuscleGroupConditionInput
  ) {
    updateMuscleGroup(input: $input, condition: $condition) {
      id
      name
      backgroundColor
      specialBackgroundColor
      imageUrl
      exercises {
        nextToken
        __typename
      }
      users {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMuscleGroup = /* GraphQL */ `
  mutation DeleteMuscleGroup(
    $input: DeleteMuscleGroupInput!
    $condition: ModelMuscleGroupConditionInput
  ) {
    deleteMuscleGroup(input: $input, condition: $condition) {
      id
      name
      backgroundColor
      specialBackgroundColor
      imageUrl
      exercises {
        nextToken
        __typename
      }
      users {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOnboarding = /* GraphQL */ `
  mutation CreateOnboarding(
    $input: CreateOnboardingInput!
    $condition: ModelOnboardingConditionInput
  ) {
    createOnboarding(input: $input, condition: $condition) {
      id
      imageUrl
      description
      isDisplay
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateOnboarding = /* GraphQL */ `
  mutation UpdateOnboarding(
    $input: UpdateOnboardingInput!
    $condition: ModelOnboardingConditionInput
  ) {
    updateOnboarding(input: $input, condition: $condition) {
      id
      imageUrl
      description
      isDisplay
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteOnboarding = /* GraphQL */ `
  mutation DeleteOnboarding(
    $input: DeleteOnboardingInput!
    $condition: ModelOnboardingConditionInput
  ) {
    deleteOnboarding(input: $input, condition: $condition) {
      id
      imageUrl
      description
      isDisplay
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createEquipment = /* GraphQL */ `
  mutation CreateEquipment(
    $input: CreateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    createEquipment(input: $input, condition: $condition) {
      id
      name
      imageUrl
      backgroundColor
      exercises {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEquipment = /* GraphQL */ `
  mutation UpdateEquipment(
    $input: UpdateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    updateEquipment(input: $input, condition: $condition) {
      id
      name
      imageUrl
      backgroundColor
      exercises {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEquipment = /* GraphQL */ `
  mutation DeleteEquipment(
    $input: DeleteEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    deleteEquipment(input: $input, condition: $condition) {
      id
      name
      imageUrl
      backgroundColor
      exercises {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      tags {
        nextToken
        __typename
      }
      videos {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      trainingtypes {
        nextToken
        __typename
      }
      musclegroups {
        nextToken
        __typename
      }
      equipments {
        nextToken
        __typename
      }
      coachs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      exerciseExerciseItemId
      __typename
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      tags {
        nextToken
        __typename
      }
      videos {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      trainingtypes {
        nextToken
        __typename
      }
      musclegroups {
        nextToken
        __typename
      }
      equipments {
        nextToken
        __typename
      }
      coachs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      exerciseExerciseItemId
      __typename
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      tags {
        nextToken
        __typename
      }
      videos {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      trainingtypes {
        nextToken
        __typename
      }
      musclegroups {
        nextToken
        __typename
      }
      equipments {
        nextToken
        __typename
      }
      coachs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      exerciseExerciseItemId
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
      }
      category
      title
      caption
      readMinutes
      image
      content
      createdAt
      updatedAt
      postUserId
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
      }
      category
      title
      caption
      readMinutes
      image
      content
      createdAt
      updatedAt
      postUserId
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
      }
      category
      title
      caption
      readMinutes
      image
      content
      createdAt
      updatedAt
      postUserId
      __typename
    }
  }
`;
export const createCoach = /* GraphQL */ `
  mutation CreateCoach(
    $input: CreateCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    createCoach(input: $input, condition: $condition) {
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
        __typename
      }
      backgroundImageUrl
      presentationVideoUrl
      bio
      exercises {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      coachUserId
      __typename
    }
  }
`;
export const updateCoach = /* GraphQL */ `
  mutation UpdateCoach(
    $input: UpdateCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    updateCoach(input: $input, condition: $condition) {
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
        __typename
      }
      backgroundImageUrl
      presentationVideoUrl
      bio
      exercises {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      coachUserId
      __typename
    }
  }
`;
export const deleteCoach = /* GraphQL */ `
  mutation DeleteCoach(
    $input: DeleteCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    deleteCoach(input: $input, condition: $condition) {
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
        __typename
      }
      backgroundImageUrl
      presentationVideoUrl
      bio
      exercises {
        nextToken
        __typename
      }
      workouts {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      coachUserId
      __typename
    }
  }
`;
export const createExerciseItem = /* GraphQL */ `
  mutation CreateExerciseItem(
    $input: CreateExerciseItemInput!
    $condition: ModelExerciseItemConditionInput
  ) {
    createExerciseItem(input: $input, condition: $condition) {
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
        exerciseExerciseItemId
        __typename
      }
      sets
      workoutTime
      restTime
      order
      createdAt
      updatedAt
      workoutExerciseItemsId
      challengeExerciseItemsId
      exerciseItemExerciseId
      __typename
    }
  }
`;
export const updateExerciseItem = /* GraphQL */ `
  mutation UpdateExerciseItem(
    $input: UpdateExerciseItemInput!
    $condition: ModelExerciseItemConditionInput
  ) {
    updateExerciseItem(input: $input, condition: $condition) {
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
        exerciseExerciseItemId
        __typename
      }
      sets
      workoutTime
      restTime
      order
      createdAt
      updatedAt
      workoutExerciseItemsId
      challengeExerciseItemsId
      exerciseItemExerciseId
      __typename
    }
  }
`;
export const deleteExerciseItem = /* GraphQL */ `
  mutation DeleteExerciseItem(
    $input: DeleteExerciseItemInput!
    $condition: ModelExerciseItemConditionInput
  ) {
    deleteExerciseItem(input: $input, condition: $condition) {
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
        exerciseExerciseItemId
        __typename
      }
      sets
      workoutTime
      restTime
      order
      createdAt
      updatedAt
      workoutExerciseItemsId
      challengeExerciseItemsId
      exerciseItemExerciseId
      __typename
    }
  }
`;
export const createNewsShownToUser = /* GraphQL */ `
  mutation CreateNewsShownToUser(
    $input: CreateNewsShownToUserInput!
    $condition: ModelNewsShownToUserConditionInput
  ) {
    createNewsShownToUser(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        __typename
      }
      createdAt
      updatedAt
      newsShownToUserUserId
      newsShownToUserNewsId
      __typename
    }
  }
`;
export const updateNewsShownToUser = /* GraphQL */ `
  mutation UpdateNewsShownToUser(
    $input: UpdateNewsShownToUserInput!
    $condition: ModelNewsShownToUserConditionInput
  ) {
    updateNewsShownToUser(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        __typename
      }
      createdAt
      updatedAt
      newsShownToUserUserId
      newsShownToUserNewsId
      __typename
    }
  }
`;
export const deleteNewsShownToUser = /* GraphQL */ `
  mutation DeleteNewsShownToUser(
    $input: DeleteNewsShownToUserInput!
    $condition: ModelNewsShownToUserConditionInput
  ) {
    deleteNewsShownToUser(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        __typename
      }
      createdAt
      updatedAt
      newsShownToUserUserId
      newsShownToUserNewsId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
        __typename
      }
      goalMuscleGroups {
        nextToken
        __typename
      }
      recipes {
        nextToken
        __typename
      }
      DietRecipeProgresses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
        __typename
      }
      goalMuscleGroups {
        nextToken
        __typename
      }
      recipes {
        nextToken
        __typename
      }
      DietRecipeProgresses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
        __typename
      }
      goalMuscleGroups {
        nextToken
        __typename
      }
      recipes {
        nextToken
        __typename
      }
      DietRecipeProgresses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    createNews(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const updateNews = /* GraphQL */ `
  mutation UpdateNews(
    $input: UpdateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    updateNews(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const deleteNews = /* GraphQL */ `
  mutation DeleteNews(
    $input: DeleteNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    deleteNews(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
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
        __typename
      }
      muscleGroups {
        nextToken
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
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
        __typename
      }
      muscleGroups {
        nextToken
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
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
        __typename
      }
      muscleGroups {
        nextToken
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      exerciseItems {
        nextToken
        __typename
      }
      exercises {
        nextToken
        __typename
      }
      properties {
        nextToken
        __typename
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
        __typename
      }
      authorCoach {
        nextToken
        __typename
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
        __typename
      }
      userWorkoutProgress {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      categoryWorkoutsId
      workoutAuthorUserId
      __typename
    }
  }
`;
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      exerciseItems {
        nextToken
        __typename
      }
      exercises {
        nextToken
        __typename
      }
      properties {
        nextToken
        __typename
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
        __typename
      }
      authorCoach {
        nextToken
        __typename
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
        __typename
      }
      userWorkoutProgress {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      categoryWorkoutsId
      workoutAuthorUserId
      __typename
    }
  }
`;
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      programs {
        nextToken
        __typename
      }
      challenges {
        nextToken
        __typename
      }
      exerciseItems {
        nextToken
        __typename
      }
      exercises {
        nextToken
        __typename
      }
      properties {
        nextToken
        __typename
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
        __typename
      }
      authorCoach {
        nextToken
        __typename
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
        __typename
      }
      userWorkoutProgress {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      categoryWorkoutsId
      workoutAuthorUserId
      __typename
    }
  }
`;
export const createChallenge = /* GraphQL */ `
  mutation CreateChallenge(
    $input: CreateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    createChallenge(input: $input, condition: $condition) {
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
        __typename
      }
      exerciseItems {
        nextToken
        __typename
      }
      exercises {
        nextToken
        __typename
      }
      muscleGroups {
        nextToken
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      authorCoach {
        nextToken
        __typename
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
        __typename
      }
      createdAt
      updatedAt
      challengeAuthorUserId
      __typename
    }
  }
`;
export const updateChallenge = /* GraphQL */ `
  mutation UpdateChallenge(
    $input: UpdateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    updateChallenge(input: $input, condition: $condition) {
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
        __typename
      }
      exerciseItems {
        nextToken
        __typename
      }
      exercises {
        nextToken
        __typename
      }
      muscleGroups {
        nextToken
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      authorCoach {
        nextToken
        __typename
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
        __typename
      }
      createdAt
      updatedAt
      challengeAuthorUserId
      __typename
    }
  }
`;
export const deleteChallenge = /* GraphQL */ `
  mutation DeleteChallenge(
    $input: DeleteChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    deleteChallenge(input: $input, condition: $condition) {
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
        __typename
      }
      exerciseItems {
        nextToken
        __typename
      }
      exercises {
        nextToken
        __typename
      }
      muscleGroups {
        nextToken
        __typename
      }
      trainingTypes {
        nextToken
        __typename
      }
      authorCoach {
        nextToken
        __typename
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
        __typename
      }
      createdAt
      updatedAt
      challengeAuthorUserId
      __typename
    }
  }
`;
export const createWorkoutProperties = /* GraphQL */ `
  mutation CreateWorkoutProperties(
    $input: CreateWorkoutPropertiesInput!
    $condition: ModelWorkoutPropertiesConditionInput
  ) {
    createWorkoutProperties(input: $input, condition: $condition) {
      id
      langu
      text
      icon
      createdAt
      updatedAt
      workoutPropertiesId
      __typename
    }
  }
`;
export const updateWorkoutProperties = /* GraphQL */ `
  mutation UpdateWorkoutProperties(
    $input: UpdateWorkoutPropertiesInput!
    $condition: ModelWorkoutPropertiesConditionInput
  ) {
    updateWorkoutProperties(input: $input, condition: $condition) {
      id
      langu
      text
      icon
      createdAt
      updatedAt
      workoutPropertiesId
      __typename
    }
  }
`;
export const deleteWorkoutProperties = /* GraphQL */ `
  mutation DeleteWorkoutProperties(
    $input: DeleteWorkoutPropertiesInput!
    $condition: ModelWorkoutPropertiesConditionInput
  ) {
    deleteWorkoutProperties(input: $input, condition: $condition) {
      id
      langu
      text
      icon
      createdAt
      updatedAt
      workoutPropertiesId
      __typename
    }
  }
`;
export const createUserWorkoutHistory = /* GraphQL */ `
  mutation CreateUserWorkoutHistory(
    $input: CreateUserWorkoutHistoryInput!
    $condition: ModelUserWorkoutHistoryConditionInput
  ) {
    createUserWorkoutHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      lastExerciseItem {
        id
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      progress
      createdAt
      description
      exerciseCount
      updatedAt
      userWorkoutHistoryWorkoutId
      userWorkoutHistoryUserId
      userWorkoutHistoryLastExerciseId
      userWorkoutHistoryLastExerciseItemId
      __typename
    }
  }
`;
export const updateUserWorkoutHistory = /* GraphQL */ `
  mutation UpdateUserWorkoutHistory(
    $input: UpdateUserWorkoutHistoryInput!
    $condition: ModelUserWorkoutHistoryConditionInput
  ) {
    updateUserWorkoutHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      lastExerciseItem {
        id
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      progress
      createdAt
      description
      exerciseCount
      updatedAt
      userWorkoutHistoryWorkoutId
      userWorkoutHistoryUserId
      userWorkoutHistoryLastExerciseId
      userWorkoutHistoryLastExerciseItemId
      __typename
    }
  }
`;
export const deleteUserWorkoutHistory = /* GraphQL */ `
  mutation DeleteUserWorkoutHistory(
    $input: DeleteUserWorkoutHistoryInput!
    $condition: ModelUserWorkoutHistoryConditionInput
  ) {
    deleteUserWorkoutHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      lastExerciseItem {
        id
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      progress
      createdAt
      description
      exerciseCount
      updatedAt
      userWorkoutHistoryWorkoutId
      userWorkoutHistoryUserId
      userWorkoutHistoryLastExerciseId
      userWorkoutHistoryLastExerciseItemId
      __typename
    }
  }
`;
export const createUserChallengeHistory = /* GraphQL */ `
  mutation CreateUserChallengeHistory(
    $input: CreateUserChallengeHistoryInput!
    $condition: ModelUserChallengeHistoryConditionInput
  ) {
    createUserChallengeHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      progress
      createdAt
      description
      exerciseCount
      exerciseDuraionInSeconds
      updatedAt
      userChallengeHistoryChallengeId
      userChallengeHistoryUserId
      __typename
    }
  }
`;
export const updateUserChallengeHistory = /* GraphQL */ `
  mutation UpdateUserChallengeHistory(
    $input: UpdateUserChallengeHistoryInput!
    $condition: ModelUserChallengeHistoryConditionInput
  ) {
    updateUserChallengeHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      progress
      createdAt
      description
      exerciseCount
      exerciseDuraionInSeconds
      updatedAt
      userChallengeHistoryChallengeId
      userChallengeHistoryUserId
      __typename
    }
  }
`;
export const deleteUserChallengeHistory = /* GraphQL */ `
  mutation DeleteUserChallengeHistory(
    $input: DeleteUserChallengeHistoryInput!
    $condition: ModelUserChallengeHistoryConditionInput
  ) {
    deleteUserChallengeHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      progress
      createdAt
      description
      exerciseCount
      exerciseDuraionInSeconds
      updatedAt
      userChallengeHistoryChallengeId
      userChallengeHistoryUserId
      __typename
    }
  }
`;
export const createUserProgramHistory = /* GraphQL */ `
  mutation CreateUserProgramHistory(
    $input: CreateUserProgramHistoryInput!
    $condition: ModelUserProgramHistoryConditionInput
  ) {
    createUserProgramHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      lastExerciseItem {
        id
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      progress
      createdAt
      updatedAt
      userProgramHistoryUserId
      userProgramHistoryProgramId
      userProgramHistoryLastWorkoutId
      userProgramHistoryLastExerciseItemId
      __typename
    }
  }
`;
export const updateUserProgramHistory = /* GraphQL */ `
  mutation UpdateUserProgramHistory(
    $input: UpdateUserProgramHistoryInput!
    $condition: ModelUserProgramHistoryConditionInput
  ) {
    updateUserProgramHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      lastExerciseItem {
        id
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      progress
      createdAt
      updatedAt
      userProgramHistoryUserId
      userProgramHistoryProgramId
      userProgramHistoryLastWorkoutId
      userProgramHistoryLastExerciseItemId
      __typename
    }
  }
`;
export const deleteUserProgramHistory = /* GraphQL */ `
  mutation DeleteUserProgramHistory(
    $input: DeleteUserProgramHistoryInput!
    $condition: ModelUserProgramHistoryConditionInput
  ) {
    deleteUserProgramHistory(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      lastExerciseItem {
        id
        sets
        workoutTime
        restTime
        order
        createdAt
        updatedAt
        workoutExerciseItemsId
        challengeExerciseItemsId
        exerciseItemExerciseId
        __typename
      }
      progress
      createdAt
      updatedAt
      userProgramHistoryUserId
      userProgramHistoryProgramId
      userProgramHistoryLastWorkoutId
      userProgramHistoryLastExerciseItemId
      __typename
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      imageUrl
      headerImageUrl
      description
      backgroundColor
      isFavorite
      workouts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      imageUrl
      headerImageUrl
      description
      backgroundColor
      isFavorite
      workouts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      imageUrl
      headerImageUrl
      description
      backgroundColor
      isFavorite
      workouts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      label
      exercises {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      label
      exercises {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      label
      exercises {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserWorkoutProgress = /* GraphQL */ `
  mutation CreateUserWorkoutProgress(
    $input: CreateUserWorkoutProgressInput!
    $condition: ModelUserWorkoutProgressConditionInput
  ) {
    createUserWorkoutProgress(input: $input, condition: $condition) {
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
      workoutUserWorkoutProgressId
      __typename
    }
  }
`;
export const updateUserWorkoutProgress = /* GraphQL */ `
  mutation UpdateUserWorkoutProgress(
    $input: UpdateUserWorkoutProgressInput!
    $condition: ModelUserWorkoutProgressConditionInput
  ) {
    updateUserWorkoutProgress(input: $input, condition: $condition) {
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
      workoutUserWorkoutProgressId
      __typename
    }
  }
`;
export const deleteUserWorkoutProgress = /* GraphQL */ `
  mutation DeleteUserWorkoutProgress(
    $input: DeleteUserWorkoutProgressInput!
    $condition: ModelUserWorkoutProgressConditionInput
  ) {
    deleteUserWorkoutProgress(input: $input, condition: $condition) {
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
      workoutUserWorkoutProgressId
      __typename
    }
  }
`;
export const createUserProgramProgress = /* GraphQL */ `
  mutation CreateUserProgramProgress(
    $input: CreateUserProgramProgressInput!
    $condition: ModelUserProgramProgressConditionInput
  ) {
    createUserProgramProgress(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserProgramProgress = /* GraphQL */ `
  mutation UpdateUserProgramProgress(
    $input: UpdateUserProgramProgressInput!
    $condition: ModelUserProgramProgressConditionInput
  ) {
    updateUserProgramProgress(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserProgramProgress = /* GraphQL */ `
  mutation DeleteUserProgramProgress(
    $input: DeleteUserProgramProgressInput!
    $condition: ModelUserProgramProgressConditionInput
  ) {
    deleteUserProgramProgress(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createVideoExercise = /* GraphQL */ `
  mutation CreateVideoExercise(
    $input: CreateVideoExerciseInput!
    $condition: ModelVideoExerciseConditionInput
  ) {
    createVideoExercise(input: $input, condition: $condition) {
      id
      videoID
      exerciseID
      video {
        id
        title
        description
        duration
        VideoUrl
        thumbnailUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateVideoExercise = /* GraphQL */ `
  mutation UpdateVideoExercise(
    $input: UpdateVideoExerciseInput!
    $condition: ModelVideoExerciseConditionInput
  ) {
    updateVideoExercise(input: $input, condition: $condition) {
      id
      videoID
      exerciseID
      video {
        id
        title
        description
        duration
        VideoUrl
        thumbnailUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteVideoExercise = /* GraphQL */ `
  mutation DeleteVideoExercise(
    $input: DeleteVideoExerciseInput!
    $condition: ModelVideoExerciseConditionInput
  ) {
    deleteVideoExercise(input: $input, condition: $condition) {
      id
      videoID
      exerciseID
      video {
        id
        title
        description
        duration
        VideoUrl
        thumbnailUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTrainingTypeExercise = /* GraphQL */ `
  mutation CreateTrainingTypeExercise(
    $input: CreateTrainingTypeExerciseInput!
    $condition: ModelTrainingTypeExerciseConditionInput
  ) {
    createTrainingTypeExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTrainingTypeExercise = /* GraphQL */ `
  mutation UpdateTrainingTypeExercise(
    $input: UpdateTrainingTypeExerciseInput!
    $condition: ModelTrainingTypeExerciseConditionInput
  ) {
    updateTrainingTypeExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTrainingTypeExercise = /* GraphQL */ `
  mutation DeleteTrainingTypeExercise(
    $input: DeleteTrainingTypeExerciseInput!
    $condition: ModelTrainingTypeExerciseConditionInput
  ) {
    deleteTrainingTypeExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserGoalTrainingTypes = /* GraphQL */ `
  mutation CreateUserGoalTrainingTypes(
    $input: CreateUserGoalTrainingTypesInput!
    $condition: ModelUserGoalTrainingTypesConditionInput
  ) {
    createUserGoalTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserGoalTrainingTypes = /* GraphQL */ `
  mutation UpdateUserGoalTrainingTypes(
    $input: UpdateUserGoalTrainingTypesInput!
    $condition: ModelUserGoalTrainingTypesConditionInput
  ) {
    updateUserGoalTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserGoalTrainingTypes = /* GraphQL */ `
  mutation DeleteUserGoalTrainingTypes(
    $input: DeleteUserGoalTrainingTypesInput!
    $condition: ModelUserGoalTrainingTypesConditionInput
  ) {
    deleteUserGoalTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWorkoutTrainingTypes = /* GraphQL */ `
  mutation CreateWorkoutTrainingTypes(
    $input: CreateWorkoutTrainingTypesInput!
    $condition: ModelWorkoutTrainingTypesConditionInput
  ) {
    createWorkoutTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWorkoutTrainingTypes = /* GraphQL */ `
  mutation UpdateWorkoutTrainingTypes(
    $input: UpdateWorkoutTrainingTypesInput!
    $condition: ModelWorkoutTrainingTypesConditionInput
  ) {
    updateWorkoutTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWorkoutTrainingTypes = /* GraphQL */ `
  mutation DeleteWorkoutTrainingTypes(
    $input: DeleteWorkoutTrainingTypesInput!
    $condition: ModelWorkoutTrainingTypesConditionInput
  ) {
    deleteWorkoutTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProgramTrainingTypes = /* GraphQL */ `
  mutation CreateProgramTrainingTypes(
    $input: CreateProgramTrainingTypesInput!
    $condition: ModelProgramTrainingTypesConditionInput
  ) {
    createProgramTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgramTrainingTypes = /* GraphQL */ `
  mutation UpdateProgramTrainingTypes(
    $input: UpdateProgramTrainingTypesInput!
    $condition: ModelProgramTrainingTypesConditionInput
  ) {
    updateProgramTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgramTrainingTypes = /* GraphQL */ `
  mutation DeleteProgramTrainingTypes(
    $input: DeleteProgramTrainingTypesInput!
    $condition: ModelProgramTrainingTypesConditionInput
  ) {
    deleteProgramTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChallengeTrainingTypes = /* GraphQL */ `
  mutation CreateChallengeTrainingTypes(
    $input: CreateChallengeTrainingTypesInput!
    $condition: ModelChallengeTrainingTypesConditionInput
  ) {
    createChallengeTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChallengeTrainingTypes = /* GraphQL */ `
  mutation UpdateChallengeTrainingTypes(
    $input: UpdateChallengeTrainingTypesInput!
    $condition: ModelChallengeTrainingTypesConditionInput
  ) {
    updateChallengeTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChallengeTrainingTypes = /* GraphQL */ `
  mutation DeleteChallengeTrainingTypes(
    $input: DeleteChallengeTrainingTypesInput!
    $condition: ModelChallengeTrainingTypesConditionInput
  ) {
    deleteChallengeTrainingTypes(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMuscleGroupExercise = /* GraphQL */ `
  mutation CreateMuscleGroupExercise(
    $input: CreateMuscleGroupExerciseInput!
    $condition: ModelMuscleGroupExerciseConditionInput
  ) {
    createMuscleGroupExercise(input: $input, condition: $condition) {
      id
      muscleGroupID
      exerciseID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMuscleGroupExercise = /* GraphQL */ `
  mutation UpdateMuscleGroupExercise(
    $input: UpdateMuscleGroupExerciseInput!
    $condition: ModelMuscleGroupExerciseConditionInput
  ) {
    updateMuscleGroupExercise(input: $input, condition: $condition) {
      id
      muscleGroupID
      exerciseID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMuscleGroupExercise = /* GraphQL */ `
  mutation DeleteMuscleGroupExercise(
    $input: DeleteMuscleGroupExerciseInput!
    $condition: ModelMuscleGroupExerciseConditionInput
  ) {
    deleteMuscleGroupExercise(input: $input, condition: $condition) {
      id
      muscleGroupID
      exerciseID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserGoalMuscleGroups = /* GraphQL */ `
  mutation CreateUserGoalMuscleGroups(
    $input: CreateUserGoalMuscleGroupsInput!
    $condition: ModelUserGoalMuscleGroupsConditionInput
  ) {
    createUserGoalMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      userID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserGoalMuscleGroups = /* GraphQL */ `
  mutation UpdateUserGoalMuscleGroups(
    $input: UpdateUserGoalMuscleGroupsInput!
    $condition: ModelUserGoalMuscleGroupsConditionInput
  ) {
    updateUserGoalMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      userID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserGoalMuscleGroups = /* GraphQL */ `
  mutation DeleteUserGoalMuscleGroups(
    $input: DeleteUserGoalMuscleGroupsInput!
    $condition: ModelUserGoalMuscleGroupsConditionInput
  ) {
    deleteUserGoalMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      userID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWorkoutMusleGroups = /* GraphQL */ `
  mutation CreateWorkoutMusleGroups(
    $input: CreateWorkoutMusleGroupsInput!
    $condition: ModelWorkoutMusleGroupsConditionInput
  ) {
    createWorkoutMusleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      workoutID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWorkoutMusleGroups = /* GraphQL */ `
  mutation UpdateWorkoutMusleGroups(
    $input: UpdateWorkoutMusleGroupsInput!
    $condition: ModelWorkoutMusleGroupsConditionInput
  ) {
    updateWorkoutMusleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      workoutID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWorkoutMusleGroups = /* GraphQL */ `
  mutation DeleteWorkoutMusleGroups(
    $input: DeleteWorkoutMusleGroupsInput!
    $condition: ModelWorkoutMusleGroupsConditionInput
  ) {
    deleteWorkoutMusleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      workoutID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProgramMuscleGroups = /* GraphQL */ `
  mutation CreateProgramMuscleGroups(
    $input: CreateProgramMuscleGroupsInput!
    $condition: ModelProgramMuscleGroupsConditionInput
  ) {
    createProgramMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      programID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgramMuscleGroups = /* GraphQL */ `
  mutation UpdateProgramMuscleGroups(
    $input: UpdateProgramMuscleGroupsInput!
    $condition: ModelProgramMuscleGroupsConditionInput
  ) {
    updateProgramMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      programID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgramMuscleGroups = /* GraphQL */ `
  mutation DeleteProgramMuscleGroups(
    $input: DeleteProgramMuscleGroupsInput!
    $condition: ModelProgramMuscleGroupsConditionInput
  ) {
    deleteProgramMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      programID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChallengeMuscleGroups = /* GraphQL */ `
  mutation CreateChallengeMuscleGroups(
    $input: CreateChallengeMuscleGroupsInput!
    $condition: ModelChallengeMuscleGroupsConditionInput
  ) {
    createChallengeMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      challengeID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChallengeMuscleGroups = /* GraphQL */ `
  mutation UpdateChallengeMuscleGroups(
    $input: UpdateChallengeMuscleGroupsInput!
    $condition: ModelChallengeMuscleGroupsConditionInput
  ) {
    updateChallengeMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      challengeID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChallengeMuscleGroups = /* GraphQL */ `
  mutation DeleteChallengeMuscleGroups(
    $input: DeleteChallengeMuscleGroupsInput!
    $condition: ModelChallengeMuscleGroupsConditionInput
  ) {
    deleteChallengeMuscleGroups(input: $input, condition: $condition) {
      id
      muscleGroupID
      challengeID
      muscleGroup {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEquipmentExercise = /* GraphQL */ `
  mutation CreateEquipmentExercise(
    $input: CreateEquipmentExerciseInput!
    $condition: ModelEquipmentExerciseConditionInput
  ) {
    createEquipmentExercise(input: $input, condition: $condition) {
      id
      equipmentID
      exerciseID
      equipment {
        id
        name
        imageUrl
        backgroundColor
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEquipmentExercise = /* GraphQL */ `
  mutation UpdateEquipmentExercise(
    $input: UpdateEquipmentExerciseInput!
    $condition: ModelEquipmentExerciseConditionInput
  ) {
    updateEquipmentExercise(input: $input, condition: $condition) {
      id
      equipmentID
      exerciseID
      equipment {
        id
        name
        imageUrl
        backgroundColor
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEquipmentExercise = /* GraphQL */ `
  mutation DeleteEquipmentExercise(
    $input: DeleteEquipmentExerciseInput!
    $condition: ModelEquipmentExerciseConditionInput
  ) {
    deleteEquipmentExercise(input: $input, condition: $condition) {
      id
      equipmentID
      exerciseID
      equipment {
        id
        name
        imageUrl
        backgroundColor
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTagExercise = /* GraphQL */ `
  mutation CreateTagExercise(
    $input: CreateTagExerciseInput!
    $condition: ModelTagExerciseConditionInput
  ) {
    createTagExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTagExercise = /* GraphQL */ `
  mutation UpdateTagExercise(
    $input: UpdateTagExerciseInput!
    $condition: ModelTagExerciseConditionInput
  ) {
    updateTagExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTagExercise = /* GraphQL */ `
  mutation DeleteTagExercise(
    $input: DeleteTagExerciseInput!
    $condition: ModelTagExerciseConditionInput
  ) {
    deleteTagExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChallengeExercise = /* GraphQL */ `
  mutation CreateChallengeExercise(
    $input: CreateChallengeExerciseInput!
    $condition: ModelChallengeExerciseConditionInput
  ) {
    createChallengeExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChallengeExercise = /* GraphQL */ `
  mutation UpdateChallengeExercise(
    $input: UpdateChallengeExerciseInput!
    $condition: ModelChallengeExerciseConditionInput
  ) {
    updateChallengeExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChallengeExercise = /* GraphQL */ `
  mutation DeleteChallengeExercise(
    $input: DeleteChallengeExerciseInput!
    $condition: ModelChallengeExerciseConditionInput
  ) {
    deleteChallengeExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWorkoutExercise = /* GraphQL */ `
  mutation CreateWorkoutExercise(
    $input: CreateWorkoutExerciseInput!
    $condition: ModelWorkoutExerciseConditionInput
  ) {
    createWorkoutExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWorkoutExercise = /* GraphQL */ `
  mutation UpdateWorkoutExercise(
    $input: UpdateWorkoutExerciseInput!
    $condition: ModelWorkoutExerciseConditionInput
  ) {
    updateWorkoutExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWorkoutExercise = /* GraphQL */ `
  mutation DeleteWorkoutExercise(
    $input: DeleteWorkoutExerciseInput!
    $condition: ModelWorkoutExerciseConditionInput
  ) {
    deleteWorkoutExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCoachExercise = /* GraphQL */ `
  mutation CreateCoachExercise(
    $input: CreateCoachExerciseInput!
    $condition: ModelCoachExerciseConditionInput
  ) {
    createCoachExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCoachExercise = /* GraphQL */ `
  mutation UpdateCoachExercise(
    $input: UpdateCoachExerciseInput!
    $condition: ModelCoachExerciseConditionInput
  ) {
    updateCoachExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCoachExercise = /* GraphQL */ `
  mutation DeleteCoachExercise(
    $input: DeleteCoachExerciseInput!
    $condition: ModelCoachExerciseConditionInput
  ) {
    deleteCoachExercise(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        exerciseExerciseItemId
        __typename
      }
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCoachWorkouts = /* GraphQL */ `
  mutation CreateCoachWorkouts(
    $input: CreateCoachWorkoutsInput!
    $condition: ModelCoachWorkoutsConditionInput
  ) {
    createCoachWorkouts(input: $input, condition: $condition) {
      id
      coachID
      workoutID
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCoachWorkouts = /* GraphQL */ `
  mutation UpdateCoachWorkouts(
    $input: UpdateCoachWorkoutsInput!
    $condition: ModelCoachWorkoutsConditionInput
  ) {
    updateCoachWorkouts(input: $input, condition: $condition) {
      id
      coachID
      workoutID
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCoachWorkouts = /* GraphQL */ `
  mutation DeleteCoachWorkouts(
    $input: DeleteCoachWorkoutsInput!
    $condition: ModelCoachWorkoutsConditionInput
  ) {
    deleteCoachWorkouts(input: $input, condition: $condition) {
      id
      coachID
      workoutID
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCoachChallenges = /* GraphQL */ `
  mutation CreateCoachChallenges(
    $input: CreateCoachChallengesInput!
    $condition: ModelCoachChallengesConditionInput
  ) {
    createCoachChallenges(input: $input, condition: $condition) {
      id
      coachID
      challengeID
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCoachChallenges = /* GraphQL */ `
  mutation UpdateCoachChallenges(
    $input: UpdateCoachChallengesInput!
    $condition: ModelCoachChallengesConditionInput
  ) {
    updateCoachChallenges(input: $input, condition: $condition) {
      id
      coachID
      challengeID
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCoachChallenges = /* GraphQL */ `
  mutation DeleteCoachChallenges(
    $input: DeleteCoachChallengesInput!
    $condition: ModelCoachChallengesConditionInput
  ) {
    deleteCoachChallenges(input: $input, condition: $condition) {
      id
      coachID
      challengeID
      coach {
        id
        username
        backgroundImageUrl
        presentationVideoUrl
        bio
        createdAt
        updatedAt
        coachUserId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProgramWorkouts = /* GraphQL */ `
  mutation CreateProgramWorkouts(
    $input: CreateProgramWorkoutsInput!
    $condition: ModelProgramWorkoutsConditionInput
  ) {
    createProgramWorkouts(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProgramWorkouts = /* GraphQL */ `
  mutation UpdateProgramWorkouts(
    $input: UpdateProgramWorkoutsInput!
    $condition: ModelProgramWorkoutsConditionInput
  ) {
    updateProgramWorkouts(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProgramWorkouts = /* GraphQL */ `
  mutation DeleteProgramWorkouts(
    $input: DeleteProgramWorkoutsInput!
    $condition: ModelProgramWorkoutsConditionInput
  ) {
    deleteProgramWorkouts(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        __typename
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChallengeWorkouts = /* GraphQL */ `
  mutation CreateChallengeWorkouts(
    $input: CreateChallengeWorkoutsInput!
    $condition: ModelChallengeWorkoutsConditionInput
  ) {
    createChallengeWorkouts(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChallengeWorkouts = /* GraphQL */ `
  mutation UpdateChallengeWorkouts(
    $input: UpdateChallengeWorkoutsInput!
    $condition: ModelChallengeWorkoutsConditionInput
  ) {
    updateChallengeWorkouts(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChallengeWorkouts = /* GraphQL */ `
  mutation DeleteChallengeWorkouts(
    $input: DeleteChallengeWorkoutsInput!
    $condition: ModelChallengeWorkoutsConditionInput
  ) {
    deleteChallengeWorkouts(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
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
        createdAt
        updatedAt
        challengeAuthorUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
