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

const emailIcon = document.getElementById("email");
const emailTooltip = document.getElementById("email-tooltip");
const EMAIL = "luciok1203@snu.ac.kr";

emailIcon.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
  } catch (err) {
    console.error("복사 실패:", err);
  }
  emailTooltip.classList.add("show");
  setTimeout(() => emailTooltip.classList.remove("show"), 1000); // 1초 뒤 숨김
});
