let tabsNav = document.querySelectorAll('.tabs-nav li'),
    tabsContent = document.querySelectorAll('.tabs-content li'),
    tabName;

tabsNav.forEach( item =>{
  item.addEventListener('click', selectTabNav)
});

function selectTabNav() {
  tabsNav.forEach(item => {
    item.classList.remove('active');
  });
  this.classList.add('active');

  tabName = this.getAttribute('data-tab-name');
  selectTabContent(tabName);

}

//display active tab-content
function selectTabContent(tabName) {
  tabsContent.forEach(item =>{
    item.classList.contains(tabName) ?
    item.classList.add('tab-active') :
    item.classList.remove('tab-active');
  })
}


let sortMenu = document.querySelectorAll('.sorting>.menu li'),
    sortContant = document.querySelectorAll('.sorting>.contant li')

    sortMenu.forEach( item =>{
      item.addEventListener('click', sortchoice)
    });

    function sortchoice() {
      sortMenu.forEach( item =>{
        item.classList.remove('active-is');
      });
      this.classList.add('active-is');
    }
