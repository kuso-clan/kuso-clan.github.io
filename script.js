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
        if (tabFocus >= tabs.length)
          tabFocus = 0;
      } else if (e.keyCode === 37) {
        tabFocus--;
        if (tabFocus < 0)
          tabFocus = tabs.length - 1;
      }

      tabs[tabFocus].setAttribute('tabindex', 0);
      tabs[tabFocus].focus();
    }
  });
});

// on load
window.addEventListener("load", function() {
  let hidebutton = document.getElementsByTagName("button")[22];
  if( this.innerWidth < 490 )
    hidebutton.style.display = "none";
  else
    hidebutton.style.display = "block";
});
// on resize
window.addEventListener("resize", function() {
  let hidebutton = document.getElementsByTagName("button")[22];
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