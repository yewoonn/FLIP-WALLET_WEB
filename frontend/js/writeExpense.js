document.addEventListener("DOMContentLoaded", () => {
  const categories = [
    { name: "자기계발" },
    { name: "여가" },
    { name: "음식" },
    { name: "생활용품" },
    { name: "교통" },
    { name: "쇼핑" },
    { name: "의료" },
    { name: "통신" },
    { name: "여행" },
    { name: "이자" },
    { name: "구독 서비스" },
  ];

  const categorySelect = document.getElementById("category-select");
  const receiptButton = document.getElementById("receipt-button");
  const submitButton = document.querySelector(".submit-button");


  // 카테고리 옵션 추가
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  });

  // 영수증 기록 버튼 클릭 이벤트
  receiptButton.addEventListener("click", () => {
    window.location.href = "receiptRecord.html"; // 페이지 이동
  });

  // 제출 버튼 클릭 이벤트
  submitButton.addEventListener("click", () => {
    window.location.href = "showMyRecord.html"; // 페이지 이동
  });

});



document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.getElementById("amount-input");
  const directInputButton = document.querySelector(".direct-input-button");
  const amountButtons = document.querySelectorAll(".amount-button");

  // 금액 업데이트 함수
  function updateAmount(amount) {
    const currentAmount = parseInt(amountInput.value.replace(/,/g, ""), 10) || 0;
    const newAmount = currentAmount + amount;
    amountInput.value = newAmount.toLocaleString();
  }

  // 금액 버튼 클릭 이벤트
  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = parseInt(button.dataset.amount, 10);
      updateAmount(amount);
    });
  });

  // 직접 입력 버튼 클릭 이벤트
  directInputButton.addEventListener("click", () => {
    const manualAmount = prompt("금액을 입력하세요:");
    if (manualAmount !== null && !isNaN(manualAmount) && manualAmount >= 0) {
      amountInput.value = parseInt(manualAmount, 10).toLocaleString();
    } else {
      alert("올바른 금액을 입력하세요.");
    }
  });
});
