
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    console.log(this.element);
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    console.log(this.data); // print 1,2,3,4
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    console.log(this.itemElement);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());
  };

  select() {
    console.log('check this works?')
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    //console.log(links);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach( function(removeTab) {
      removeTab.className = removeTab.className.replace('tabs-link-selected', '');
    });
    //console.log(links); // removed div.tabs-link-selected !!!

    // Add a class named "tabs-link-selected" to this link
    this.element.className += ' tabs-link-selected';
    //console.log(this.element); // clicking tap works now

    // Call the select method on the item associated with this link
    this.tabItem.select();

  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
    //console.log(this.element);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    //console.log(items);

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(function(rmtab) {
      rmtab.className = rmtab.className.replace('tabs-item-selected', '');
    })
    //console.log(items);


    // Add a class named "tabs-item-selected" to this element
    this.element.className += ' tabs-item-selected';
    console.log(this.element);
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');
links.forEach( link => new TabLink(link));

var slideSource = document.getElementById('slideSource');

document.getElementById('handle').onclick = function () {
  slideSource.classList.toggle('fade');
  //console.log('work?') //works only on hard-coded data-tab="1"
}