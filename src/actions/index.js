export function selectBook(book) {
    // selectBook is an ActionCreator it returns action, an object with a type prop
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

export function addBook(book) {
  if (!book) {
    return;
  }
  console.log("action: " + book);
    return {
        type: 'ADD_BOOK',
        payload: book
    };
}
