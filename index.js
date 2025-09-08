// 버튼 요소 가져오기
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 스크롤 이벤트 감지 → 일정 위치 지나면 버튼 보이게
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    // 300px 이상 내려갔을 때 보이기
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// 버튼 클릭 시 상단으로 부드럽게 이동
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
