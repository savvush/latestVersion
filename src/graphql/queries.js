/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncVideos = /* GraphQL */ `
  query SyncVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      dietdaysID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
  }
`;
export const syncDietDayDetails = /* GraphQL */ `
  query SyncDietDayDetails(
    $filter: ModelDietDayDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDietDayDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getDietDays = /* GraphQL */ `
  query GetDietDays($id: ID!) {
    getDietDays(id: $id) {
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
        DietDayDetails {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDietDays = /* GraphQL */ `
  query SyncDietDays(
    $filter: ModelDietDaysFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDietDays(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        day
        title
        DietDayDetails {
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
      nextToken
      startedAt
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
        DietRecipe {
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
  }
`;
export const syncDietRecipeProgresses = /* GraphQL */ `
  query SyncDietRecipeProgresses(
    $filter: ModelDietRecipeProgressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDietRecipeProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncDietRecipes = /* GraphQL */ `
  query SyncDietRecipes(
    $filter: ModelDietRecipeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDietRecipes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncTrainingTypes = /* GraphQL */ `
  query SyncTrainingTypes(
    $filter: ModelTrainingTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncMuscleGroups = /* GraphQL */ `
  query SyncMuscleGroups(
    $filter: ModelMuscleGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMuscleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      owner
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOnboardings = /* GraphQL */ `
  query SyncOnboardings(
    $filter: ModelOnboardingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOnboardings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncEquipment = /* GraphQL */ `
  query SyncEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipment(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncExercises = /* GraphQL */ `
  query SyncExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncCoaches = /* GraphQL */ `
  query SyncCoaches(
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
export const listExerciseItems = /* GraphQL */ `
  query ListExerciseItems(
    $filter: ModelExerciseItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncExerciseItems = /* GraphQL */ `
  query SyncExerciseItems(
    $filter: ModelExerciseItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExerciseItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncNewsShownToUsers = /* GraphQL */ `
  query SyncNewsShownToUsers(
    $filter: ModelNewsShownToUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNewsShownToUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNews = /* GraphQL */ `
  query SyncNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncPrograms = /* GraphQL */ `
  query SyncPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrograms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkouts = /* GraphQL */ `
  query SyncWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncChallenges = /* GraphQL */ `
  query SyncChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallenges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      workoutPropertiesId
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
        _version
        _deleted
        _lastChangedAt
        workoutPropertiesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWorkoutProperties = /* GraphQL */ `
  query SyncWorkoutProperties(
    $filter: ModelWorkoutPropertiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkoutProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        lastExerciseItem {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserWorkoutHistories = /* GraphQL */ `
  query SyncUserWorkoutHistories(
    $filter: ModelUserWorkoutHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserWorkoutHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        lastExerciseItem {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserChallengeHistories = /* GraphQL */ `
  query SyncUserChallengeHistories(
    $filter: ModelUserChallengeHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserChallengeHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserProgramHistories = /* GraphQL */ `
  query SyncUserProgramHistories(
    $filter: ModelUserProgramHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProgramHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBlogs = /* GraphQL */ `
  query SyncBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      workoutUserWorkoutProgressId
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
        _version
        _deleted
        _lastChangedAt
        workoutUserWorkoutProgressId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserWorkoutProgresses = /* GraphQL */ `
  query SyncUserWorkoutProgresses(
    $filter: ModelUserWorkoutProgressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserWorkoutProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        workoutUserWorkoutProgressId
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserProgramProgresses = /* GraphQL */ `
  query SyncUserProgramProgresses(
    $filter: ModelUserProgramProgressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProgramProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        video {
          id
          title
          description
          duration
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
      nextToken
      startedAt
    }
  }
`;
export const syncVideoExercises = /* GraphQL */ `
  query SyncVideoExercises(
    $filter: ModelVideoExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideoExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncTrainingTypeExercises = /* GraphQL */ `
  query SyncTrainingTypeExercises(
    $filter: ModelTrainingTypeExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainingTypeExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserGoalTrainingTypes = /* GraphQL */ `
  query SyncUserGoalTrainingTypes(
    $filter: ModelUserGoalTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserGoalTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkoutTrainingTypes = /* GraphQL */ `
  query SyncWorkoutTrainingTypes(
    $filter: ModelWorkoutTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkoutTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncProgramTrainingTypes = /* GraphQL */ `
  query SyncProgramTrainingTypes(
    $filter: ModelProgramTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgramTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncChallengeTrainingTypes = /* GraphQL */ `
  query SyncChallengeTrainingTypes(
    $filter: ModelChallengeTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallengeTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        muscleGroup {
          id
          name
          backgroundColor
          specialBackgroundColor
          imageUrl
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
      nextToken
      startedAt
    }
  }
`;
export const syncMuscleGroupExercises = /* GraphQL */ `
  query SyncMuscleGroupExercises(
    $filter: ModelMuscleGroupExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMuscleGroupExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        muscleGroup {
          id
          name
          backgroundColor
          specialBackgroundColor
          imageUrl
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserGoalMuscleGroups = /* GraphQL */ `
  query SyncUserGoalMuscleGroups(
    $filter: ModelUserGoalMuscleGroupsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserGoalMuscleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        muscleGroup {
          id
          name
          backgroundColor
          specialBackgroundColor
          imageUrl
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkoutMusleGroups = /* GraphQL */ `
  query SyncWorkoutMusleGroups(
    $filter: ModelWorkoutMusleGroupsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkoutMusleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        muscleGroup {
          id
          name
          backgroundColor
          specialBackgroundColor
          imageUrl
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
      nextToken
      startedAt
    }
  }
`;
export const syncProgramMuscleGroups = /* GraphQL */ `
  query SyncProgramMuscleGroups(
    $filter: ModelProgramMuscleGroupsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgramMuscleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        muscleGroup {
          id
          name
          backgroundColor
          specialBackgroundColor
          imageUrl
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
      nextToken
      startedAt
    }
  }
`;
export const syncChallengeMuscleGroups = /* GraphQL */ `
  query SyncChallengeMuscleGroups(
    $filter: ModelChallengeMuscleGroupsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallengeMuscleGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        equipment {
          id
          name
          imageUrl
          backgroundColor
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
      nextToken
      startedAt
    }
  }
`;
export const syncEquipmentExercises = /* GraphQL */ `
  query SyncEquipmentExercises(
    $filter: ModelEquipmentExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipmentExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        tag {
          id
          label
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
      nextToken
      startedAt
    }
  }
`;
export const syncTagExercises = /* GraphQL */ `
  query SyncTagExercises(
    $filter: ModelTagExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTagExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        tag {
          id
          label
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncChallengeExercises = /* GraphQL */ `
  query SyncChallengeExercises(
    $filter: ModelChallengeExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallengeExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkoutExercises = /* GraphQL */ `
  query SyncWorkoutExercises(
    $filter: ModelWorkoutExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkoutExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        coach {
          id
          username
          backgroundImageUrl
          presentationVideoUrl
          bio
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
      nextToken
      startedAt
    }
  }
`;
export const syncCoachExercises = /* GraphQL */ `
  query SyncCoachExercises(
    $filter: ModelCoachExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoachExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          exerciseExerciseItemId
        }
        coach {
          id
          username
          backgroundImageUrl
          presentationVideoUrl
          bio
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
      nextToken
      startedAt
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
        coach {
          id
          username
          backgroundImageUrl
          presentationVideoUrl
          bio
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
      nextToken
      startedAt
    }
  }
`;
export const syncCoachWorkouts = /* GraphQL */ `
  query SyncCoachWorkouts(
    $filter: ModelCoachWorkoutsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoachWorkouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        coach {
          id
          username
          backgroundImageUrl
          presentationVideoUrl
          bio
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
      nextToken
      startedAt
    }
  }
`;
export const syncCoachChallenges = /* GraphQL */ `
  query SyncCoachChallenges(
    $filter: ModelCoachChallengesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoachChallenges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncProgramWorkouts = /* GraphQL */ `
  query SyncProgramWorkouts(
    $filter: ModelProgramWorkoutsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgramWorkouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncChallengeWorkouts = /* GraphQL */ `
  query SyncChallengeWorkouts(
    $filter: ModelChallengeWorkoutsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallengeWorkouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
