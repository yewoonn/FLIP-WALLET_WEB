document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const errorMessage = document.getElementById("errorMessage");
  
    // 비밀번호 확인 입력 시 실시간 검사
    confirmPasswordInput.addEventListener("input", () => {
      if (passwordInput.value !== confirmPasswordInput.value) {
        // 비밀번호가 일치하지 않을 때
        confirmPasswordInput.classList.add("error");
        errorMessage.style.display = "block";
      } else {
        // 비밀번호가 일치할 때
        confirmPasswordInput.classList.remove("error");
        errorMessage.style.display = "none";
      }
    });
  
    // 폼 제출 시 검사
    form.addEventListener("submit", (event) => {
      if (passwordInput.value !== confirmPasswordInput.value) {
        // 비밀번호가 일치하지 않을 때 폼 제출 막기
        event.preventDefault();
        confirmPasswordInput.classList.add("error");
        errorMessage.style.display = "block";
      } else {
        // 비밀번호가 일치하면 setSemiGoal.html로 이동
        event.preventDefault(); // 폼의 기본 동작 막기
        window.location.href = "setSemiGoal.html"; // 페이지 이동
      }
    });
  });
  