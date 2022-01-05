const toogleMenu = () => {
   const menu = document.getElementById('navMenu');
   menu.style.transform = (menu.style.transform === '') ? 'translateX(0%)' : '';
}

document.getElementById('btnOpenMenu').addEventListener('click', toogleMenu);
document.getElementById('btnCloseMenu').addEventListener('click', toogleMenu)