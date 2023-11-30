// header
$('.sub').hide();
$('.gnb > li').hover(function () {

  $(this).find('ul').stop().slideDown(500);
  $(this).find('a').addClass('on');

}, function () {
  $(this).find('ul').stop().slideUp(500);
  $(this).find('a').removeClass('on');
})

// sidebar 보이기
$('.sidebar-btn a').on('click', function (e) {
  e.preventDefault();
  $('.sidebar').addClass('active');
})

$('.sidebar-overlay, .sidemenu #close-btn').on('click', function () {
  $('.sidebar').removeClass('active');
})

// 회원가입 페이지
$('input').focusin(function () {
  $(this).parent('.inputbox').addClass('boder-act')
})

$('input').focusout(function () {
  $(this).parent('.inputbox').removeClass('boder-act')
})

let idveri = pwveri = false;

// ID
$('.userid input').focusout(function () {
  let userId = $(this).val();
  // 최소 5글자 ~ 최대 10글자 사이 영문 소문자 + 숫자 포함
  let idExp = /^[a-z0-9]{1}$/

  if (userId.length == 0) {
    $('.userid .warn').html('<span>Please enter a id.</span>')
  } else {
    idveri = true;
  }
})


// PASSWORD
$('.userpw input').focusout(function () {
  let userPw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자, 특수문자 포함
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{1}$/

  if (userPw.length == 0) {
    $('.userpw .warn').html('<span>Please enter a password</span>')
  } else {
    pwveri = true;
    $('.userpw .warn').empty();
  }
})



