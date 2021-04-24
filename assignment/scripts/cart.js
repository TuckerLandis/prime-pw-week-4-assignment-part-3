console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

/* --old addItem function --

function addItem(item){
  console.log('adding: ' + item );
  basket.push(item);
  console.log('added: ' + item);
  return true;
} // end addItem

//testing addItem
addItem('mango');
addItem('rice');
addItem('peppers');
console.log(basket);*/

function listItems(){
  console.log('Listing items in basket');
  for (let item of basket) {
    console.log(item);
  } // end loop
} // end listItems -- confirming i dont wan't a return in this function, assuming just for practice purposes?

// testing listItems without console.log() - the function logs and doesn't have
listItems();

function empty() {
  basket = [];
} // end empty -- someone in slack mentioned changing the length of the array to zero for this function, is that necessary?

// testing empty
// empty();
// console.log(basket);

const maxItems = 5;

function isFull(){
  if (basket.length < maxItems) {
    return false;
  } // end if
  else if (basket.length >= maxItems) {
    return true;
  }  // end else
} // end isFull

//testing isFull
console.log(isFull());

function addItem(item){
  console.log('adding: ' + item );
  if (isFull() === false) {
    basket.push(item);
    console.log('added: ' + item);
  } // end if
  else if (isFull()) {
    console.log('The basket is full, did not add: ' +  item);
  } // end else if
} // end addItem

// i didn't realize i was not calling my function here, because i didn't have parentheses attached. big smile when i realized it

//testing new addItem

addItem('mango');
addItem('rice');
addItem('peppers');
addItem('pancetta');
addItem('green onion');
addItem('cilantro');
console.log(basket);

function removeItem(item) {
  console.log('removing: ' + basket.indexOf(item));
  basket.splice(basket.indexOf(item), 1);
  return true;
}

//testing removeItem
console.log(basket);
removeItem('peppers');
console.log(basket);
