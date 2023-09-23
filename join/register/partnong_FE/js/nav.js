const navContainer = document.getElementById("navContainer");
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 성공적으로 파일을 불러올 때 파일 내용을 출력합니다.
        navContainer.innerHTML = xhr.responseText;
    }
};

xhr.open("GET", "nav.html", true);
xhr.send();


// 경고창 생성 추가합니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.addEventListener("DOMContentLoaded", function() {
    const chatLink = document.getElementById('chatLink');
chatLink.addEventListener('click', function (event) {
    event.preventDefault();
    alert("추후 지원예정입니다!");
});

const marketLink = document.getElementById('marketLink');
marketLink.addEventListener('click', function (event) {
    event.preventDefault();
    alert("추후 지원예정입니다!");
});
});


// 로그인 체크
function isUserLoggedIn() {
    if (localStorage.getItem('token') != null) {
        return true;
    }
    else { return false; }
}


// 로그인 상태 확인
var loginCheckElement = document.getElementById("login-check");
if (loginCheckElement) {
    if (isUserLoggedIn()) {
        // 로그인 상태인 경우
        loginCheckElement.textContent = "마이페이지";
        window.location.href = 'http://localhost:8081/mypage'
    } else {
        // 로그인 상태가 아닌 경우
        loginCheckElement.textContent = "로그인";
        window.location.href = '로그인 url작성해주세요'
    }
}
