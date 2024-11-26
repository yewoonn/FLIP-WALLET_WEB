
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");

  
    // 직접 입력 버튼 클릭 이벤트
    loginButton.addEventListener("click", () => {
        window.location.href = "showMyRecord.html"; // 페이지 이동
    });
  });