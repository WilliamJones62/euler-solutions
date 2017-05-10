main();

function main() {
  var yesterdaysOrders = [
        {
            id: 1,
            orderLines: [
                { itemName: "Item 01", quantity: 1 },
                { itemName: "Item 02", quantity: 3 },
                { itemName: "Item 03", quantity: 25 },
                { itemName: "Item 04", quantity: 12 },
            ],
        },
        {
            id: 2,
            orderLines: [
                { itemName: "Item 01", quantity: 1 },
                { itemName: "Item 08", quantity: 42 },
                { itemName: "Item 09", quantity: 13 },
                { itemName: "Item 12", quantity: 37 },
            ],
        },
        {
            id: 3,
            orderLines: [
                { itemName: "Item 12", quantity: 16 },
            ],
        },
        {
            id: 4,
            orderLines: [
                { itemName: "Item 10", quantity: 11 },
                { itemName: "Item 11", quantity: 10 },
            ],
        },
        {
            id: 5,
            orderLines: [
                { itemName: "Item 06", quantity: 7 },
                { itemName: "Item 07", quantity: 2 },
                { itemName: "Item 12", quantity: 14 },
            ],
        },
        {
            id: 6,
            orderLines: [
                { itemName: "Item 05", quantity: 17 },
            ],
        },
        {
            id: 7,
            orderLines: [
                { itemName: "Item 03", quantity: 5 },
                { itemName: "Item 07", quantity: 2 },
            ],
        },
        {
            id: 8,
            orderLines: [
                { itemName: "Item 02", quantity: 13 },
                { itemName: "Item 07", quantity: 7 },
                { itemName: "Item 09", quantity: 2 },
            ],
        },
        {
            id: 9,
            orderLines: [
                { itemName: "Item 01", quantity: 4 },
                { itemName: "Item 06", quantity: 17 },
                { itemName: "Item 07", quantity: 3 },
            ],
        },
        {
            id: 10,
            orderLines: [
                { itemName: "Item 11", quantity: 12 },
                { itemName: "Item 12", quantity: 1 },
            ],
        },
    ];
  // create an array containing the itemName and the total quantity of that item picked yesterday
  var yesterdaysTotals = combineQuantities(yesterdaysOrders;
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
  console.log(shelfName);
  console.log(itemName);
}
