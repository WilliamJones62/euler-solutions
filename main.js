function main() {
  var orderRepo = new OrderRepository ();
  var yesterday = orderRepo.getYesterdaysOrders();

  // create an array containing the itemName and the total quantity of that item picked yesterday
  var yesterdaysTotals = combineQuantities(yesterday);
  var shelfItems = sortTotals(yesterdaysTotals);

  for (i = 0; i < shelfItems.length; i++) {
       displayShelfItemPair(shelfItems[i].shelfName, shelfItems[i].itemName);
  }
}

function combineQuantities(yesterday) {
  var items = [];
  var found = false;
  for (i = 0; i < yesterday.length; i++) {
    // loop through each order
    order = yesterday[i].orderLines
    for (j = 0; j < order.length; j++) {
      // loop through each order line
      found = false
      for (k = 0; k < items.length; k++) {
        // loop through each item to see if it is already in the array
        if (order[j].itemName === items[k].itemName) {
          // there is an exiting entry in the array for this item
          found = true
          items[k].quantity += order[j].quantity
          // exit the loop
          k = items.length
        }
      }
      if (!found) {
        // add the new item to the array
        items.push(order[j])
      }
    }
  }

  return items;
}

function sortTotals(totals) {
  var sortedItems = [];
  var shelves = [];
  var inserted = false;

  // load the first totals element into the sorted array
  sortedItems.push(totals[0]);

  for (i = 1; i < totals.length; i++) {
    // loop through each totals element
    currentItem = totals[i]
    inserted = false
    for (j = 0; j < sortedItems.length; j++) {
      // loop through each sortedItems element
      if (currentItem.quantity > sortedItems[j].quantity){
        // the current totals item should be stored before the current sorted item
        sortedItems.splice(j, 0, currentItem)
        j = sortedItems.length
        inserted = true
      }
    }
    if (!inserted){
      // this item has the smallest total quantity so far
      sortedItems.push(currentItem)
    }
  }

  var columnDefs = function(shelf, item){
    this.shelfName = shelf;
    this.itemName = item;
    };

  for (i = 0; i < sortedItems.length; i++) {
    // load the shelves array using the item names from the sorted totals array
    shelf = 'Shelf ' + (i + 1);
    shelves.push((new columnDefs(shelf,sortedItems[i].itemName)));
  }

  return shelves;
}

function displayShelfItemPair(shelfName, itemName) {
  var newP = document.createElement('p');
  newP.innerHTML = shelfName + "  " + itemName;

  document.body.appendChild(newP);
}
