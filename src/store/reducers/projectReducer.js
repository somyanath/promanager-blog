const initialState = {
  projects: [
    { id: '1', title: 'Pixel Art Maker', content: 'basic pixel art drawing grid' },
    { id: '2', title: 'PokeTimes', content: 'a basic blog webpage' },
    { id: '3', title: 'Todo App', content: 'basic todo app with task storing functionality' }
  ]
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.error);
      return state;
    default:
      return state
  }
}

export default projectReducer;