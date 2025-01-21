// -------------------슬라이드
let currentIndex = 0;
const slides = document.querySelectorAll('.img-slide');
const totalSlides = slides.length;
const slider = document.querySelector('.img-slider');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function changeSlide() {
    const newTransformValue = -currentIndex * 100;
    slider.style.transform = `translateX(${newTransformValue}%)`;
}

// 오른쪽 화살표 버튼 클릭
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    changeSlide();
});

// 왼쪽 화살표 버튼 클릭
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    changeSlide();
});

// -------------------사이드 바
const side_bar = document.getElementById('scrollButton');

function scrollToTop() {
    window.scrollTo({
        top: 10,
        left: 0,
        behavior: 'smooth',
    });
}

  side_bar.style.opacity = 0;
  side_bar.style.transition = 'opacity 0.3s ease'; // 부드러운 효과 추가
window.addEventListener('scroll', () =>{
    if (window.scrollY > 300) {
        side_bar.style.opacity = 1;  // 스크롤이 100px 이상일 때 사이드 바가 나타남
        side_bar.addEventListener('click', scrollToTop)
    }
    else {
        side_bar.style.opacity = 0;  // 스크롤이 100px 미만일 때 사이드 바가 사라짐
        side_bar.removeEventListener('click', scrollToTop);
    }
});
  // -------------------차트 데이터
  const songs = [
    {
        "id":1,
        "title":"HOME SWEET HOME",
        "singer":"G-DRAGON"
    },
    {
        "id":2,
        "title":"Whiplash",
        "singer":"easpa"
    },
    {
        "id":3,
        "title":"나는 반딧불",
        "singer":"황가람"
    },
    {
        "id":4,
        "title":"APT.",
        "singer":"로제 (ROSÉ), Bruno Mars"
    }
    ,
    {
        "id":5,
        "title":"toxic till the end",
        "singer":"로제 (ROSÉ)"
    },
    {
        "id":6,
        "title":"REBEL HEART",
        "singer":"IVE (아이브)"
    }
    ,
    {
        "id":7,
        "title":"Drowning",
        "singer":"WOODZ"
    },
    {
        "id":8,
        "title":"HAPPY",
        "singer":"DAY6 (데이식스)"
    }
    ,
    {
        "id":9,
        "title":"오늘만 I LOVE YOU",
        "singer":"BOYNEXTDOOR"
    },
    {
        "id":10,
        "title":"Power",
        "singer":"G-DRAGON"
    }
    ]
  // -------------------차트
  // 차트 추가
  const chart = document.querySelector(".rank__menu");
  
  for(let i=1;i<=10;i++){
    let space = "";
    const li  = document.createElement('li');
    li.classList.add("chart_list");
    if(i%2===0){
        li.style.backgroundColor = 'white';
    }
    li.innerHTML = `${i}<img src="images/chart_image${i}.jpg">
                        <span class="song_title">${songs[i-1].title}</span>
                        <span class="song_artist">${songs[i-1].singer}</span>
                        <span class="song_start" onclick="music_start(event)"><i class="fa-solid fa-play"></i></span>`
    chart.appendChild(li);
  }
  // --------------------로그인 메뉴
  const login = sessionStorage.getItem('login');
  const navbar__menu = document.querySelector('.navbar__menu');
  
  navbar__menu.innerHTML = '';

  if (login==='true') { // 로그인 상태가 'true'일 경우
    const menu_li = document.createElement('li');
    menu_li.innerHTML = '<a href="#" onclick="logout()">로그아웃</a>';
    navbar__menu.appendChild(menu_li);
  } else { // 로그인되지 않은 상태일 경우
    const login_li = document.createElement('li');
    login_li.innerHTML = '<a href="login.html">로그인</a>';
    navbar__menu.appendChild(login_li);

    const signup_li = document.createElement('li');
    signup_li.innerHTML = '<a href="signup.html">회원가입</a>';
    navbar__menu.appendChild(signup_li);
  }

  function logout(){
    sessionStorage.setItem('login','false');
    location.reload(true);
  }

  // -----------------------다크 모드
  const toggle = document.getElementById('dark_mode');
  const text = document.getElementById('dark_mode_text');
  
  toggle.addEventListener('change',() =>{
    const body = document.body;

    body.style.transition = 'background-color 0.5s ease';

    if(toggle.checked){
        body.style.backgroundColor = '#ffffff';
    }
    else{
        body.style.backgroundColor = '#263343';
    }
  });