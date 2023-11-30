// header
$(".sub").hide();
$(".gnb > li").hover(
  function () {
    $(this).find("ul").stop().slideDown(500);
    $(this).find("a").addClass("on");
  },
  function () {
    $(this).find("ul").stop().slideUp(500);
    $(this).find("a").removeClass("on");
  }
);

// sidebar 보이기
$(".sidebar-btn a").on("click", function (e) {
  e.preventDefault();
  $(".sidebar").addClass("active");
});

$(".sidebar-overlay, .sidemenu #close-btn").on("click", function () {
  $(".sidebar").removeClass("active");
});

// 언어변경
// 현재의 웹 브라우저에 설정된 언어 확인 (만약 한국어라면 true, 아니라면 false)
const isKorean = navigator.language === "ko-KR";
// 웹 브라우저 언어가 한국어면 select에 한국어 선택, 아닐 경우 영어 선택
if (isKorean) {
  document.getElementById("lang").options[1].setAttribute("selected", true);
} else {
  document.getElementById("lang").options[0].setAttribute("selected", true);
}
// 웹페이지 텍스트 변환을 위한 세팅
i18next.init(
  {
    lng: isKorean ? "ko" : "en", // 한국어인지, 영어인지 표시
    debug: true,
    resources: {
      // 웹페이지를 구성하는 텍스트들을 json 형태로 입력
      ko: {
        translation: {
          introduce:
            "유아의 향수는 당신의 일상에 자연의 향기로 특별함을 더하여 매력적이고 복합적인 향기를 만드는 가상의 향수 회사 입니다.",

          // 첫번째 향수
          beatrice: "베아트리체",
          beatriceNote: "마쉬멜로우 | 오렌지블로섬 | 토바코",
          beatriceDesc:
            "베아트리체는 서로 다른 언어가 만나 새로운 의미로 확장되는 경험에서 영감을 얻었습니다. 오렌지 블로섬의 깨끗하고 정돈된 플로럴 향이 마시멜로와 만나 폭신한 솜사탕이 되고, 이와 대비되는 씁쓸하고 레더리한 토바코 노트가 어우러지며 서로 독립적으로 존재하던 상반된 두 가지 향이 서로를 휘감듯 자리하며 낯선 조화의 향을 경험하게 합니다.",

          // 두번째 향수
          bellatrix: "벨라트릭스",
          bellatrixNote: "화이트 샴페인 | 다즐링 티 | 크리미한 머스크",
          bellatrixDesc:
            "화이트 샴페인의 섬세한 거품과 달달한 과일향에 씁쓸한 다즐링 차 향이 풍성하고 조화롭게 어우러져 찻잔 속에서 추는 우아한 향의 춤의 향연을 선사합니다. 코 끝에서부터 전해지는 크리미한 머스크와 샌달우드가 부드러운 잔향을 오래도록 느끼게 해줍니다.",
        },
      },
      en: {
        translation: {
          introduce:
            "Youare Perfume is a virtual perfume company that creates attractive and complex scents by adding special natural scents to your daily life.",

          // 첫번째 향수
          beatrice: "Beatrice",
          beatriceNote: "Marshmallow | Orange blossom | Tobacco",
          beatriceDesc:
            "Beatrice, inspired by the experience of meeting two different languages, and expanding them into newmeanings. Combine the neat orange blossom floral scent with marshmallows infused like soft cotton candy, contrasting bitter and leathery tobacco notes mix. The two opposite fragrances that existed independently harmonized by wrapping together. It is a unique experience of an unusual scent harmony.",

          // 두번째 향수
          bellatrix: "Bellatrix",
          bellatrixNote: "White champagne | Darjeeling tea | Creamy musk",
          bellatrixDesc:
            "The delicate bubbles of white champagne elegantly dance with the sweet fruity aroma of bitter darjeeling tea richly and harmoniously creating a feast in a teacup. Prolong the soft reverberation trail of creamy musk and sandalwood from the tip of the nose.",
        },
      },
    },
  },
  function (err, t) {
    if (err) {
      console.error(err);
    } else {
      // 에러가 없을 경우 설정한 언어로 json 안의 텍스트들 대입
      updateContent();
    }
  }
);

function updateContent() {
  // i18nest.init에서 세팅한 텍스트들 html 태그에 대입
  document.getElementById("introduce").innerHTML = i18next.t("introduce");
  document.getElementById("beatrice").innerHTML = i18next.t("beatrice");
  document.getElementById("beatriceNote").innerHTML = i18next.t("beatriceNote");
  document.getElementById("beatriceDesc").innerHTML = i18next.t("beatriceDesc");
  document.getElementById("bellatrix").innerHTML = i18next.t("bellatrix");
  document.getElementById("bellatrixNote").innerHTML =
    i18next.t("bellatrixNote");
  document.getElementById("bellatrixDesc").innerHTML =
    i18next.t("bellatrixDesc");
}

// 언어 변환 시 이벤트 (위의 select에서 onchange="i18next.changeLanguage(this.value)" 이벤트)
i18next.on("languageChanged", () => {
  updateContent(); // 바뀐 언어에 따라 웹페이지 텍스트 재대입
});

// 마우스 이미지
$(".slider a").css({ cursor: "url(./images/mouse.png), auto" });

// 슬라이더
$(".swiper").each(function (index) {
  t = $(this);
  t.addClass("swiepr-" + index);

  let swiper = new Swiper(t, {
    autoplay: {
      delay: 0, //add
      disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 3,

    breakpoints: {
      500: {
        slidesPerView: 2, //브라우저가 해당 사이즈보다 작을 때
        spaceBetween: 12,
      },

      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

      880: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      1024: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },

      1150: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
});

var mySwiper = document.querySelector(".swiper").swiper;

// 마우스가 올라간 상태에서 슬라이드가 끝나야 멈춤
//  disableOnInteraction: true

// $(".swiper").mouseover(function () {
//     mySwiper.autoplay.stop();
//     console.log('slider stopped');
// });

// $(".swiper").mouseleave(function () {
//     mySwiper.autoplay.start();
//     console.log('slider started again');
// });

// 팝업 쿠키
function setCookie(name, value, hours) {
  let expires = "";
  if (hours) {
    let date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    expires = "; expires" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEqu = name + "=";
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    if (cookie.indexOf(nameEqu) == 0) {
      return cookie.substring(nameEqu.length, cookie.length);
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  let popup = document.getElementById("popup");
  let nonePopup = document.getElementById("none-popup");
  let closeBtn = document.getElementById("popup-close-btn");

  // getCookie에서
  if (getCookie("hidePopup")) {
    popup.style.display = "none";
  }

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";

    if (nonePopup.checked) {
      setCookie("hidePopup", "true", 24);
    }
  });
});
