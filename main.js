const toogleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toogleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

document.getElementById('scrollButton').addEventListener('click', () => {
    // 특정 위치로 이동
    window.scrollTo({
      top: 0,
      left: 0, 
      behavior: 'smooth', 
    });
  });
