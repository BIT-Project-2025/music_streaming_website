let login = (event) =>{
    event.preventDefault();
    const userId = document.getElementById("id").value;
    const userPw = document.getElementById("pw").value;
    const wrongDiv = document.getElementById("wrong_msg");

    const id = localStorage.getItem("userId");
    const pw = localStorage.getItem("userPw");
    
   if(id!=null){
    if(userPw.length<6){
        wrongDiv.textContent = ('비밀번호는 6~8자리로 입력해주세요');
    }
    else if(userId===id){
        if(userPw===pw){
            if(document.getElementById("remember_id").checked){
                remember_id();
            }
            if(document.getElementById("auto_login").checked){
                remember_id_pw();
            }
            window.location.href = "main.html";
        }
        else{
            wrongDiv.textContent = "비밀번호를 잘못 입력하셨습니다."
            clear();
        }
    }
    else{
        wrongDiv.textContent = "id를 잘못 입력하셨습니다..";
        clear();
    }
   }
   else{
    wrongDiv.textContent = "등록되지 않은 id 입니다..";
    clear();
   }
}

window.onload = function(){
    const remember_id = localStorage.getItem("remember_id");
    const auto_login = localStorage.getItem("auto_login");

    if(remember_id){
        const id = localStorage.getItem("userId");
        document.getElementById("id").value = id;
        document.getElementById("remember_id").checked = true;
      }

    if(auto_login){
        const id = localStorage.getItem("userId");
        const pw = localStorage.getItem("userPw");
        document.getElementById("id").value = id;
        document.getElementById("pw").value = pw;
        document.getElementById("auto_login").checked = true;
        login(event);
    }
}

function remember_id(){
    localStorage.setItem("remember_id",true);
}

function remember_id_pw(){
    remember_id();
    localStorage.setItem("auto_login",true);
}

function clear(){
    document.getElementById("id").value = "";
    document.getElementById("pw").value = "";
}