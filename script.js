// 1) رسالة ترحيب حسب الوقت
document.addEventListener("DOMContentLoaded", function () {
  const heroText = document.querySelector(".hero p");

  if (heroText) {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
      greeting = "Good morning! 👋";
    } else if (hour < 18) {
      greeting = "Good afternoon! 🌞";
    } else {
      greeting = "Good evening! 🌙";
    }

    heroText.innerHTML =
      greeting +
      "<br />This is a simple website hosted using Git & GitHub Pages.";
  }
});

// 2) التعامل مع فورم التواصل (منع الريلود + رسالة نجاح)
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // عشان ما يعملش إعادة تحميل للصفحة

    alert("Thank you! Your message has been received ✅");

    // تمسح البيانات من الفورم
    contactForm.reset();
  });
}

// 3) زرار يطلعك لأعلى الصفحة Scroll to Top
// إنشاء الزرار بالديناميك
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.className = "scroll-top-btn";
document.body.appendChild(scrollBtn);

// لما المستخدم ينزل تحت شوية، يظهر الزرار
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

// لما يدوس على الزرار يطلع فوق بسلاسة
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
