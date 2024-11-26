const categories = [
    { name: "자기계발", color: "#F25B5B" },
    { name: "여가", color: "#F2815B" },
    { name: "음식", color: "#F2DE5B" },
    { name: "생활용품", color: "#B3F25B" },
    { name: "교통", color: "#5BF2A4" },
    { name: "쇼핑", color: "#5BEAF2" },
    { name: "의료", color: "#5BB8F2" },
    { name: "통신", color: "#8B5BF2" },
    { name: "여행", color: "#F25BCC" },
    { name: "이자", color: "#B3B3B3" },
    { name: "구독 서비스", color: "#463E3E" }
  ];
  

document.addEventListener("DOMContentLoaded", () => {
    const surplusInput = document.getElementById("surplus-input");
    const totalAmountDisplay = document.getElementById("total-amount");
    const submitButton = document.querySelector(".submit-button");
    const categoryList = document.querySelector(".category-list");

    // 카테고리 HTML 동적 생성
    categories.forEach((category) => {
      const categoryHTML = `
        <div class="category">
          <span class="dot" style="background-color: ${category.color};"></span>
          <span class="name">${category.name}</span>
          <div class="input-container">
            <input type="text" class="category-input" placeholder="카테고리 별 예산 입력">
            <p class="error-message" style="color: #E75C5C; font-size: 12px; display: none;">숫자만 입력 가능합니다</p>
          </div>
          <span>만원</span>
        </div>
      `;
      categoryList.insertAdjacentHTML("beforeend", categoryHTML); // HTML 추가
    });

    const categoryInputs = document.querySelectorAll(".category-input");

  
    // 총 금액 계산 함수
    function calculateTotal() {
      let total = 0;
  
      // 카테고리 입력 값 합산
      categoryInputs.forEach((input) => {
        const value = parseFloat(input.value) || 0; // 값이 없으면 0으로 처리
        total += value;
      });
  
      // 비상금 입력 값 합산
      const surplusValue = parseFloat(surplusInput.value) || 0;
      total += surplusValue;
  
      // 총 금액 표시
      totalAmountDisplay.textContent = total.toLocaleString(); // 3자리 콤마 추가
    }
  
    // 입력값 확인 함수
    function validateInput(input) {
      const value = input.value;
      const errorMessage = input.parentNode.querySelector(".error-message");
  
      // 숫자가 아닌 문자가 포함되었는지 확인
      if (/[^0-9]/.test(value)) {
        input.classList.add("error"); // 에러 스타일 추가
        input.value = value.replace(/[^0-9]/g, ""); // 숫자 외의 값 제거
        if (errorMessage) {
          errorMessage.style.display = "block"; // 에러 메시지 표시
        }
      } else {
        input.classList.remove("error"); // 에러 스타일 제거
        if (errorMessage) {
          errorMessage.style.display = "none"; // 에러 메시지 숨김
        }
      }
    }
  
    // 입력 필드 값 변경 시 총 금액 재계산 및 유효성 검사
    categoryInputs.forEach((input) => {
      input.addEventListener("input", () => {
        validateInput(input);
        calculateTotal();
      });
    });
  
    surplusInput.addEventListener("input", () => {
      calculateTotal(); // 비상금 입력은 에러 검사가 필요 없음
    });
  
    // "기록 완료" 버튼 클릭 시 동작
    submitButton.addEventListener("click", () => {
      alert("목표 금액이 기록되었습니다!");
      // 이후 필요한 동작 추가 가능
    });
  });
  