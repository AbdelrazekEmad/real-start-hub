// // Start Lang Converter
// const translations = {
//   en: {
//     english: "English",
//     arabic: "Arabic",
//     home: "Home",
//     about: "About Us",
//     gallary: "Gallary",
//     contact: "Contact Us",
//     slider_text1:
//       "Lorem ipsum dolor sit amet consectquis nostrud exercitation ullamco laboris nisi ut aliquip.",
//     slider_text2:
//       "Voluptatem accusantium doloremque laudantium totam rem aperiameaque ipsa quae.",
//     slider_text3:
//       "Tempora incidunt ut labore dolore magnam aliquam voluptatemminima.",
//     lernbtn: "LEARN MORE",
//     test: "test",
//   },
//   ar: {
//     english: "الانجليزية",
//     arabic: "العربية",
//     home: "الرئيسية",
//     about: "من نحن",
//     gallary: "المعرض",
//     contact: "تواصل معنا",
//     slider_text1:
//       "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.",
//     slider_text2:
//       "كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص.",
//     slider_text3:
//       "لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص.",
//     lernbtn: "أعرف المزيد",
//     test: "اخبار",
//   },
// };

// const languageSelector = document.querySelector("select");
// languageSelector.addEventListener("change", (event) => {
//   setLanguage(event.target.value);
//   localStorage.setItem("lang", event.target.value);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const language = localStorage.getItem("lang") || "en";
//   setLanguage(language);
// });

// const setLanguage = (language) => {
//   console.log(language);
//   const elements = document.querySelectorAll("[data-lang]");
//   elements.forEach((element) => {
//     const translationKey = element.getAttribute("data-lang");
//     element.textContent = translations[language][translationKey];
//   });
//   // document.dir = language === "ar" ? "rtl" : "ltr";
//   if (language == "ar") {
//     document.dir = "rtl";
//     console.log("ar rtl done");
//     $(".owl-carousel").owlCarousel({
//       loop: true,
//       margin: 0,
//       nav: true,
//       navSpeed: 500,
//       autoplay: true,
//       autoplaySpeed: 650,
//       animateOut: "fadeOut",
//       navText: [
//         "<i class='fa-solid fa-arrow-left'></i>",
//         "<i class='fa-solid fa-arrow-right'></i>",
//       ],
//       rtl: true,
//       responsive: {
//         0: {
//           items: 1,
//         },
//       },
//     });
//     console.log(" ar owl done");
//   } else if (language == "en") {
//     document.dir = "ltr";
//     console.log("en ltr done");
//     $(".owl-carousel").owlCarousel({
//       loop: true,
//       margin: 0,
//       nav: true,
//       navSpeed: 500,
//       autoplay: true,
//       autoplaySpeed: 650,
//       animateOut: "fadeOut",
//       navText: [
//         "<i class='fa-solid fa-arrow-left'></i>",
//         "<i class='fa-solid fa-arrow-right'></i>",
//       ],
//       rtl: false,
//       responsive: {
//         0: {
//           items: 1,
//         },
//       },
//     });
//   }
//   console.log("en owl done");
// };

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 650,
  animateOut: "fadeOut",
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
});
