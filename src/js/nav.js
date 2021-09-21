/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function setActivePath() {
  const currentPath = window.location.pathname;
  const navbarLinkActive = document.querySelector(
    `.navbar__link[href="${currentPath}"]`,
  );

  const navbarListItemActive = navbarLinkActive.children[0];
  navbarListItemActive.classList.toggle('navbar__list-item--active');
}
