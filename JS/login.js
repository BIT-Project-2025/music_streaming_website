let login = () =>{
    event.preventDefault();
    const userId = document.getElementById("id").value;
    const userPw = document.getElementById("pw").value;

    const id = sessionStorage.getItem("userId");
    const pw = sessionStorage.getItem("userPw");
    
   if(id!=null){
    if(userId===id){
        if(userPw===pw){
            alert("로그인 성공");
            window.location.href = "main.html";
        }
        else{
            alert("비밀번호를 잘못 입력하셨습니다..");
            location.reload();
        }
    }
    else{
        alert("id를 잘못 입력하셨습니다..");
        location.reload();
    }
   }
   else{
    alert("등록되지 않은 id 입니다..");
    location.reload();
   }
}