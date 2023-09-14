document.querySelector(".btn").addEventListener("click", function (event) {
    event.preventDefault();
  
    var email = document.getElementById("inputId").value;
    var password = document.getElementById("inputPassword").value;
  
    if (email && password) {
      alert(
        "로그인 버튼이 클릭되었습니다.\n아이디: " +
          email +
          "\n비밀번호: " +
          password
      );
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  });
  