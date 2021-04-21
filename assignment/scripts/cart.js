console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ) {
  console.log( 'in addItem', item );
  basket.push( item );
  return true;
} //end addItem

//testing addItem
console.log('Basket: ' + basket);
console.log('adding peppers (expect true)');
addItem('peppers');
addItem('mango');
addItem('rice');
console.log('Basket: ' + basket);

function listItems( array ) {
  console.log( 'in listItems', array );
  for (let item of array) {
    console.log(item);
  } // end loop
} // end listItems

//testing listItems
listItems(basket);
// why can't i 'console.log(listItems(basket));' here?
// ah because there is no return?

function empty() {
  basket = [];
  return 'emptied';
} //end empty

// testing empty
empty();
console.log(basket);

const maxItems = 5;

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } //end if
  else {
    return true;
  } // end else
} // end isFull
