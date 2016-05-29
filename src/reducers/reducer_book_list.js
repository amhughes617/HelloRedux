const todo = (state, action) => {
  switch (action.type) {
    case action.type:
      return {
        title: action.payload.title,
        pages: action.payload.pages
      }
    default:
      return state;
  }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            console.log("reducer: ");
            console.log(state.concat([action.payload]));
            return [
              ...state,
              todo(undefined, action)
            ];
        default:
            return state;
    }
}

const initialState =
    [
        { title: 'Javascript: The Good Parts', pages: 101 },
        { title: 'Harry Potter', pages: 39 },
        { title: 'The Dark Tower', pages: 85 },
        { title: 'Eloquent Ruby', pages: 1 }
    ];
