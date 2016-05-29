
export default function(state = initialState, action) {
  console.log("anything pls");
    switch (action.type) {
        case 'ADD_BOOK':
            console.log("does it work");
            console.log(state.concat([action.payload]));
            return state.concat([action.payload]);
    }
    return state;
}

const  initialState =
    [
        { title: 'Javascript: The Good Parts', pages: 101 },
        { title: 'Harry Potter', pages: 39 },
        { title: 'The Dark Tower', pages: 85 },
        { title: 'Eloquent Ruby', pages: 1 }
    ];
