/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDietDayFoodPlan = /* GraphQL */ `
  subscription OnCreateDietDayFoodPlan(
    $filter: ModelSubscriptionDietDayFoodPlanFilterInput
  ) {
    onCreateDietDayFoodPlan(filter: $filter) {
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
export const onUpdateDietDayFoodPlan = /* GraphQL */ `
  subscription OnUpdateDietDayFoodPlan(
    $filter: ModelSubscriptionDietDayFoodPlanFilterInput
  ) {
    onUpdateDietDayFoodPlan(filter: $filter) {
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
export const onDeleteDietDayFoodPlan = /* GraphQL */ `
  subscription OnDeleteDietDayFoodPlan(
    $filter: ModelSubscriptionDietDayFoodPlanFilterInput
  ) {
    onDeleteDietDayFoodPlan(filter: $filter) {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onCreateVideo(filter: $filter) {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onUpdateVideo(filter: $filter) {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo($filter: ModelSubscriptionVideoFilterInput) {
    onDeleteVideo(filter: $filter) {
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
export const onCreateDietDays = /* GraphQL */ `
  subscription OnCreateDietDays($filter: ModelSubscriptionDietDaysFilterInput) {
    onCreateDietDays(filter: $filter) {
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
export const onUpdateDietDays = /* GraphQL */ `
  subscription OnUpdateDietDays($filter: ModelSubscriptionDietDaysFilterInput) {
    onUpdateDietDays(filter: $filter) {
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
export const onDeleteDietDays = /* GraphQL */ `
  subscription OnDeleteDietDays($filter: ModelSubscriptionDietDaysFilterInput) {
    onDeleteDietDays(filter: $filter) {
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
      owner
      __typename
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
      owner
      __typename
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
      owner
      __typename
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
      __typename
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
      __typename
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
      __typename
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
      workoutPropertiesId
      __typename
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
      workoutPropertiesId
      __typename
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
      workoutPropertiesId
      __typename
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
      __typename
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
      __typename
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
      __typename
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
      workoutUserWorkoutProgressId
      __typename
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
      workoutUserWorkoutProgressId
      __typename
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
      workoutUserWorkoutProgressId
      __typename
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
      __typename
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
      __typename
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
      __typename
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
