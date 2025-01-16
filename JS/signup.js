function signup(){
    event.preventDefault();
    const userName = document.getElementById("name").value;
    const userId = document.getElementById("id").value;
    const userPw1 = document.getElementById("pw1").value;
    const userPw2 = document.getElementById("pw2").value;

    if(userPw1===userPw2){
        sessionStorage.setItem('name',userName);
        sessionStorage.setItem('userId',userId);
        sessionStorage.setItem('userPw',userPw1);
        // window.location.href = "main.html";
    }
    else{
        alert("비밀번호가 일치하지 않습니다..");
        location.reload();
    }
}