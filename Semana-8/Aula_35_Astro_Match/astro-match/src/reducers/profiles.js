const initialState = {
  id: '',
  name: '',
  photo: '',
  bio: '',
  age: '',
}

const profiles = (state = initialState, action) => {

  switch (action.type) {
    case "SHOW_NEW_PROFILE":
      const profileToBeShown = {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        photo: action.payload.photo,
        bio: action.payload.bio,
        age: action.payload.age,
      }
      return profileToBeShown;
    default:
      return null
  }
}

export default profiles
