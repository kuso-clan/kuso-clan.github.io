window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // click event handler for each tab
  tabs.forEach(tab => { tab.addEventListener('click', changeTabs); });
  // enable arrow nav between tabs in list
  let tabFocus = 0;

  tabList.addEventListener('keydown', e => {
    // right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute('tabindex', -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // if @ end, move to the start
        if (tabFocus >= tabs.length)
          tabFocus = 0;
        // left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // if @ start, move to the end
        if (tabFocus < 0)
          tabFocus = tabs.length - 1;
      }

      tabs[tabFocus].setAttribute('tabindex', 0);
      tabs[tabFocus].focus();
    }
  });
});

// on load
document.addEventListener("DOMContentLoaded", function() {
  let hidebutton = document.getElementsByTagName("button")[21];
  if(!hidebutton) {
    console.error("akio's button not found");
    return;
  }
  if( this.innerWidth < 490 )
    hidebutton.style.display = "none";
  else
    hidebutton.style.display = "block";
});
// on resize
window.addEventListener("resize", function() {
  let hidebutton = document.getElementsByTagName("button")[21];
  if( this.innerWidth < 490 )
    hidebutton.style.display = "none";
  else
    hidebutton.style.display = "block";
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute('aria-selected', false));

  // set this tab as selected
  target.setAttribute('aria-selected', true);

  // hide all tab panels
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute('hidden', true));

  // show the selected panel
  grandparent.parentNode
    .querySelector(`#${target.getAttribute('aria-controls')}`)
    .removeAttribute('hidden');

  // display all aria-selected tabs tabpanel in current selected outer tabpanel
  const tabPanels = grandparent.parentNode.querySelectorAll('[role="tabpanel"]');
    tabPanels.forEach(tabPanel => {
      const selectedTabs = tabPanel.querySelectorAll('[aria-selected="true"]');
      selectedTabs.forEach(selectedTab => {
        const selectedTabPanel = document.getElementById(selectedTab.getAttribute('aria-controls'));
        selectedTabPanel.removeAttribute('hidden');
      });
    }
  );  
}