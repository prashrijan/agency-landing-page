const menu = document.querySelector('.menu-btn')
const sideBar = document.querySelector('.sidebar-nav')
const heading = document.querySelector('.heading')

menu.addEventListener('click', () => {
    sideBar.classList.toggle('visible');
    heading.style.display = heading.style.display === 'none' ? 'flex' : 'none   '
    
})