const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

for (const button of tabButtons) {
  button.addEventListener('click', () => {
    const targetPanelId = button.getAttribute('aria-controls');

    for (const otherButton of tabButtons) {
      const isActive = otherButton === button;
      otherButton.classList.toggle('active', isActive);
      otherButton.setAttribute('aria-selected', isActive ? 'true' : 'false');
    }

    for (const pane of tabPanes) {
      const isMatch = pane.id === targetPanelId;
      pane.classList.toggle('active', isMatch);
      pane.hidden = !isMatch;
    }
  });
}
