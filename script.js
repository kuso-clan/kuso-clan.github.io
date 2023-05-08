window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // Add a click event handler to each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener('keydown', e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute('tabindex', -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute('tabindex', 0);
      tabs[tabFocus].focus();
    }
  });
});

// check for window resize
window.addEventListener("resize", function() {
  let akiobutton = document.getElementsByTagName("button")[20];
  if( this.innerWidth < 489 )
    akiobutton.style.display = "none";
  else
    akiobutton.style.display = "block";
});

// check window size on load
window.addEventListener("load", function() {
  let akiobutton = document.getElementsByTagName("button")[20];
  if( this.innerWidth < 489 )
    akiobutton.style.display = "none";
  else
    akiobutton.style.display = "block";
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // Remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute('aria-selected', false));

  // Set this tab as selected
  target.setAttribute('aria-selected', true);

  // Hide all tab panels
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute('hidden', true));

  // Show the selected panel
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
