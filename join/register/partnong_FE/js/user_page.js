/*
json파일 예시
{
    "profileImageUrl": "https://example.com/profile.jpg",
    "email": "example@example.com",
    "age": 24
    "volunteerTime": "30",
    "numOfActivity":  "7"
}
*/
document.getElementById('email').textContent = "이메일" + lasdjsghkadfgmail.com;

// JSON 데이터를 가져오는 비동기 함수
async function fetchJsonData() {
    try {
        // JSON 데이터를 가져오는 Fetch API를 사용
        const response = await fetch('your_api_endpoint_url');
        
        if (!response.ok) {
            throw new Error('네트워크 오류: ' + response.status);
        }
        
        const data = await response.json(); // JSON 데이터 파싱
        
        // 가져온 데이터를 HTML 요소에 설정
        document.getElementById('profile-image').src = data.profileImageUrl;
        document.getElementById('email').textContent = "이메일" + data.email;
        document.getElementById('age').textContent = "연 령" + data.age;
        document.getElementById('volunteerTime').textContent = data.volunteerTime;
        document.getElementById('numOfActivity').textContent = data.numOfActivity;
    } catch (error) {
        console.error('데이터 가져오기 오류:', error);
    }
}

// 페이지 로드 후 데이터를 가져오도록 호출
fetchJsonData();

