
export const listSimplifiedUserWorkoutHistories = /* GraphQL */ `
  query ListUserWorkoutHistories(
    $filter: ModelUserWorkoutHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserWorkoutHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userWorkoutHistoryWorkoutId
        userWorkoutHistoryLastExerciseId
        exerciseCount
      }
 
    }
  }
`;

export const listCustomUserWorkoutProgresses = /* GraphQL */ `
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
        workoutUserWorkoutProgressId
        
      }
      nextToken
    }
  }
`;

 
export const historyByDate = /* GraphQL */ `
  query HistoryByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserWorkoutHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    historyByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userWorkoutHistoryWorkoutId
        userWorkoutHistoryLastExerciseId
        exerciseCount
        description
      }
    }
  }
`;



export const listCustomUserRecipes = /* GraphQL */ `
  query ListUserRecipes(
    $filter: ModelUserRecipesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userID
        updatedAt
        id
        dietRecipeID
        _lastChangedAt
        _deleted
        _version
        createdAt
        dietRecipe {
          recipeName
          _version
          _lastChangedAt
          _deleted
          Diets {
            items {
              id
              day
              title
              description
              _version
              _lastChangedAt
              _deleted
 
            }
          }
        }
      }

    }
  }
`;



export const listCustomPrograms = /* GraphQL */ `
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
        
        }
        muscleGroups {
          items {
            updatedAt
            muscleGroup {
              updatedAt
              specialBackgroundColor
              name
              imageUrl
              id
            }
          }
        }
        createdAt
        updatedAt
 
      }
      nextToken
   
    }
  }
`;


export const getCustomWorkout = /* GraphQL */ `
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
      createdAt
      updatedAt
      categoryWorkoutsId
      workoutAuthorUserId
    }
  }
`;



export const getCustomUser = /* GraphQL */ `
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
      createdAt
      updatedAt
    }
  }
`;