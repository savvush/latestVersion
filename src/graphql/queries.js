/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDietDayFoodPlan = /* GraphQL */ `
  query GetDietDayFoodPlan($id: ID!) {
    getDietDayFoodPlan(id: $id) {
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
export const listDietDayFoodPlans = /* GraphQL */ `
  query ListDietDayFoodPlans(
    $filter: ModelDietDayFoodPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDietDayFoodPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        time
        target
        content
        dietdaydetailsID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDietDayDetails = /* GraphQL */ `
  query GetDietDayDetails($id: ID!) {
    getDietDayDetails(id: $id) {
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
export const listDietDayDetails = /* GraphQL */ `
  query ListDietDayDetails(
    $filter: ModelDietDayDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDietDayDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDietDays = /* GraphQL */ `
  query GetDietDays($id: ID!) {
    getDietDays(id: $id) {
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
export const listDietDays = /* GraphQL */ `
  query ListDietDays(
    $filter: ModelDietDaysFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDietDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        day
        title
        description
        dietrecipeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDietRecipeProgress = /* GraphQL */ `
  query GetDietRecipeProgress($id: ID!) {
    getDietRecipeProgress(id: $id) {
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
export const listDietRecipeProgresses = /* GraphQL */ `
  query ListDietRecipeProgresses(
    $filter: ModelDietRecipeProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDietRecipeProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startDate
        description
        comment
        userID
        isPaused
        createdAt
        updatedAt
        dietRecipeProgressDietRecipeId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDietRecipe = /* GraphQL */ `
  query GetDietRecipe($id: ID!) {
    getDietRecipe(id: $id) {
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
export const listDietRecipes = /* GraphQL */ `
  query ListDietRecipes(
    $filter: ModelDietRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDietRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTrainingType = /* GraphQL */ `
  query GetTrainingType($id: ID!) {
    getTrainingType(id: $id) {
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
export const listTrainingTypes = /* GraphQL */ `
  query ListTrainingTypes(
    $filter: ModelTrainingTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMuscleGroup = /* GraphQL */ `
  query GetMuscleGroup($id: ID!) {
    getMuscleGroup(id: $id) {
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
export const listMuscleGroups = /* GraphQL */ `
  query ListMuscleGroups(
    $filter: ModelMuscleGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMuscleGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        backgroundColor
        specialBackgroundColor
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOnboarding = /* GraphQL */ `
  query GetOnboarding($id: ID!) {
    getOnboarding(id: $id) {
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
export const listOnboardings = /* GraphQL */ `
  query ListOnboardings(
    $filter: ModelOnboardingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOnboardings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUrl
        description
        isDisplay
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEquipment = /* GraphQL */ `
  query GetEquipment($id: ID!) {
    getEquipment(id: $id) {
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
export const listEquipment = /* GraphQL */ `
  query ListEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipment(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUrl
        backgroundColor
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
      __typename
    }
  }
`;
export const getCoach = /* GraphQL */ `
  query GetCoach($id: ID!) {
    getCoach(id: $id) {
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
export const listCoaches = /* GraphQL */ `
  query ListCoaches(
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getExerciseItem = /* GraphQL */ `
  query GetExerciseItem($id: ID!) {
    getExerciseItem(id: $id) {
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
export const listExerciseItems = /* GraphQL */ `
  query ListExerciseItems(
    $filter: ModelExerciseItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getNewsShownToUser = /* GraphQL */ `
  query GetNewsShownToUser($id: ID!) {
    getNewsShownToUser(id: $id) {
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
export const listNewsShownToUsers = /* GraphQL */ `
  query ListNewsShownToUsers(
    $filter: ModelNewsShownToUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsShownToUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        newsShownToUserUserId
        newsShownToUserNewsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
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
export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
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
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
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
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        categoryWorkoutsId
        workoutAuthorUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChallenge = /* GraphQL */ `
  query GetChallenge($id: ID!) {
    getChallenge(id: $id) {
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
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getWorkoutProperties = /* GraphQL */ `
  query GetWorkoutProperties($id: ID!) {
    getWorkoutProperties(id: $id) {
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
export const listWorkoutProperties = /* GraphQL */ `
  query ListWorkoutProperties(
    $filter: ModelWorkoutPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        langu
        text
        icon
        createdAt
        updatedAt
        workoutPropertiesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserWorkoutHistory = /* GraphQL */ `
  query GetUserWorkoutHistory($id: ID!) {
    getUserWorkoutHistory(id: $id) {
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
export const listUserWorkoutHistories = /* GraphQL */ `
  query ListUserWorkoutHistories(
    $filter: ModelUserWorkoutHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserWorkoutHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
      nextToken
      __typename
    }
  }
`;
export const getUserChallengeHistory = /* GraphQL */ `
  query GetUserChallengeHistory($id: ID!) {
    getUserChallengeHistory(id: $id) {
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
export const listUserChallengeHistories = /* GraphQL */ `
  query ListUserChallengeHistories(
    $filter: ModelUserChallengeHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChallengeHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
      nextToken
      __typename
    }
  }
`;
export const getUserProgramHistory = /* GraphQL */ `
  query GetUserProgramHistory($id: ID!) {
    getUserProgramHistory(id: $id) {
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
export const listUserProgramHistories = /* GraphQL */ `
  query ListUserProgramHistories(
    $filter: ModelUserProgramHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProgramHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        progress
        createdAt
        updatedAt
        userProgramHistoryUserId
        userProgramHistoryProgramId
        userProgramHistoryLastWorkoutId
        userProgramHistoryLastExerciseItemId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserWorkoutProgress = /* GraphQL */ `
  query GetUserWorkoutProgress($id: ID!) {
    getUserWorkoutProgress(id: $id) {
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
export const listUserWorkoutProgresses = /* GraphQL */ `
  query ListUserWorkoutProgresses(
    $filter: ModelUserWorkoutProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserWorkoutProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        workoutUserWorkoutProgressId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserProgramProgress = /* GraphQL */ `
  query GetUserProgramProgress($id: ID!) {
    getUserProgramProgress(id: $id) {
      id
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserProgramProgresses = /* GraphQL */ `
  query ListUserProgramProgresses(
    $filter: ModelUserProgramProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProgramProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVideoExercise = /* GraphQL */ `
  query GetVideoExercise($id: ID!) {
    getVideoExercise(id: $id) {
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
export const listVideoExercises = /* GraphQL */ `
  query ListVideoExercises(
    $filter: ModelVideoExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoID
        exerciseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTrainingTypeExercise = /* GraphQL */ `
  query GetTrainingTypeExercise($id: ID!) {
    getTrainingTypeExercise(id: $id) {
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
export const listTrainingTypeExercises = /* GraphQL */ `
  query ListTrainingTypeExercises(
    $filter: ModelTrainingTypeExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingTypeExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        trainingTypeID
        exerciseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserGoalTrainingTypes = /* GraphQL */ `
  query GetUserGoalTrainingTypes($id: ID!) {
    getUserGoalTrainingTypes(id: $id) {
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
export const listUserGoalTrainingTypes = /* GraphQL */ `
  query ListUserGoalTrainingTypes(
    $filter: ModelUserGoalTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGoalTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        trainingTypeID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWorkoutTrainingTypes = /* GraphQL */ `
  query GetWorkoutTrainingTypes($id: ID!) {
    getWorkoutTrainingTypes(id: $id) {
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
export const listWorkoutTrainingTypes = /* GraphQL */ `
  query ListWorkoutTrainingTypes(
    $filter: ModelWorkoutTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        trainingTypeID
        workoutID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgramTrainingTypes = /* GraphQL */ `
  query GetProgramTrainingTypes($id: ID!) {
    getProgramTrainingTypes(id: $id) {
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
export const listProgramTrainingTypes = /* GraphQL */ `
  query ListProgramTrainingTypes(
    $filter: ModelProgramTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        trainingTypeID
        programID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChallengeTrainingTypes = /* GraphQL */ `
  query GetChallengeTrainingTypes($id: ID!) {
    getChallengeTrainingTypes(id: $id) {
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
export const listChallengeTrainingTypes = /* GraphQL */ `
  query ListChallengeTrainingTypes(
    $filter: ModelChallengeTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengeTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        trainingTypeID
        challengeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMuscleGroupExercise = /* GraphQL */ `
  query GetMuscleGroupExercise($id: ID!) {
    getMuscleGroupExercise(id: $id) {
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
export const listMuscleGroupExercises = /* GraphQL */ `
  query ListMuscleGroupExercises(
    $filter: ModelMuscleGroupExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMuscleGroupExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        muscleGroupID
        exerciseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserGoalMuscleGroups = /* GraphQL */ `
  query GetUserGoalMuscleGroups($id: ID!) {
    getUserGoalMuscleGroups(id: $id) {
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
export const listUserGoalMuscleGroups = /* GraphQL */ `
  query ListUserGoalMuscleGroups(
    $filter: ModelUserGoalMuscleGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGoalMuscleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        muscleGroupID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWorkoutMusleGroups = /* GraphQL */ `
  query GetWorkoutMusleGroups($id: ID!) {
    getWorkoutMusleGroups(id: $id) {
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
export const listWorkoutMusleGroups = /* GraphQL */ `
  query ListWorkoutMusleGroups(
    $filter: ModelWorkoutMusleGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutMusleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        muscleGroupID
        workoutID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgramMuscleGroups = /* GraphQL */ `
  query GetProgramMuscleGroups($id: ID!) {
    getProgramMuscleGroups(id: $id) {
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
export const listProgramMuscleGroups = /* GraphQL */ `
  query ListProgramMuscleGroups(
    $filter: ModelProgramMuscleGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramMuscleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        muscleGroupID
        programID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChallengeMuscleGroups = /* GraphQL */ `
  query GetChallengeMuscleGroups($id: ID!) {
    getChallengeMuscleGroups(id: $id) {
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
export const listChallengeMuscleGroups = /* GraphQL */ `
  query ListChallengeMuscleGroups(
    $filter: ModelChallengeMuscleGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengeMuscleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        muscleGroupID
        challengeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEquipmentExercise = /* GraphQL */ `
  query GetEquipmentExercise($id: ID!) {
    getEquipmentExercise(id: $id) {
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
export const listEquipmentExercises = /* GraphQL */ `
  query ListEquipmentExercises(
    $filter: ModelEquipmentExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipmentExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        equipmentID
        exerciseID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTagExercise = /* GraphQL */ `
  query GetTagExercise($id: ID!) {
    getTagExercise(id: $id) {
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
export const listTagExercises = /* GraphQL */ `
  query ListTagExercises(
    $filter: ModelTagExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        exerciseID
        tagID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChallengeExercise = /* GraphQL */ `
  query GetChallengeExercise($id: ID!) {
    getChallengeExercise(id: $id) {
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
export const listChallengeExercises = /* GraphQL */ `
  query ListChallengeExercises(
    $filter: ModelChallengeExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengeExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exerciseID
        challengeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWorkoutExercise = /* GraphQL */ `
  query GetWorkoutExercise($id: ID!) {
    getWorkoutExercise(id: $id) {
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
export const listWorkoutExercises = /* GraphQL */ `
  query ListWorkoutExercises(
    $filter: ModelWorkoutExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exerciseID
        workoutID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoachExercise = /* GraphQL */ `
  query GetCoachExercise($id: ID!) {
    getCoachExercise(id: $id) {
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
export const listCoachExercises = /* GraphQL */ `
  query ListCoachExercises(
    $filter: ModelCoachExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoachExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        exerciseID
        coachID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoachWorkouts = /* GraphQL */ `
  query GetCoachWorkouts($id: ID!) {
    getCoachWorkouts(id: $id) {
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
export const listCoachWorkouts = /* GraphQL */ `
  query ListCoachWorkouts(
    $filter: ModelCoachWorkoutsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoachWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coachID
        workoutID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoachChallenges = /* GraphQL */ `
  query GetCoachChallenges($id: ID!) {
    getCoachChallenges(id: $id) {
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
export const listCoachChallenges = /* GraphQL */ `
  query ListCoachChallenges(
    $filter: ModelCoachChallengesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoachChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coachID
        challengeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgramWorkouts = /* GraphQL */ `
  query GetProgramWorkouts($id: ID!) {
    getProgramWorkouts(id: $id) {
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
export const listProgramWorkouts = /* GraphQL */ `
  query ListProgramWorkouts(
    $filter: ModelProgramWorkoutsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        programID
        workoutID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChallengeWorkouts = /* GraphQL */ `
  query GetChallengeWorkouts($id: ID!) {
    getChallengeWorkouts(id: $id) {
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
export const listChallengeWorkouts = /* GraphQL */ `
  query ListChallengeWorkouts(
    $filter: ModelChallengeWorkoutsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengeWorkouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        workoutID
        challengeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
