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

let mailveri = nameveri = idveri = pwveri = pwchkveri = agreeveri = false;

// E-MAil
$('.usermail input').focusout(function () {
  let mail = $(this).val();
  // 대소문자 숫자로 시작가능 @ 다음에 naver.com까지 나와야함
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (mail.length == 0) {
    $('.usermail .warn').html('<span>Please enter your email address in this format: yourname@example.com.</span>');
  } else if (!mailExp.test(mail)) {
    mailveri = false;
    $('.usermail .warn').html('<span>Please check your email again.</span>')
  } else {
    $('.usermail .warn').empty();
  }
})

// NAME
$('.username input').focusout(function () {
  let userName = $('.username input').val();
  let nameExp = /^[a-zA-Z가-힇]{2,20}$/;

  if (userName.length == 0) {
    $('.username .warn').html('<span>Please enter a name.</span>');
  } else if (!nameExp.test(userName)) {
    $('.username .warn').html('<span>Please enter 2 to 5 characters in Korean or English.</span>');
  } else {
    nameveri = true;
    $('.username .warn').empty();
  }
})


// ID
$('.userid input').focusout(function () {
  let userId = $(this).val();
  let idExp = /^[a-z0-9]{5,10}$/

  if (userId.length == 0) {
    $('.userid .warn').html('<span class="text-red">Please enter a id.</span>')
  } else if (!idExp.test(userId)) {
    $('.userid .warn').html('<span class="text-red">Only 5 to 10 lowercase English letters and numbers can be used.</span>')
  } else {
    idveri = true;
    $('.userid .warn').html('<span class="text-green">That&#39; a cool id&#33;</span>')
  }
})


// PASSWORD
$('.userpw input').focusout(function () {
  let userPw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자, 특수문자 포함
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if (userPw.length == 0) {
    $('.userpw .warn').html('<span class="text-red">Please enter a password.</span>')
    // $('.userpw .inputbox span').empty();
  } else if (!pwExp.test(userPw)) {
    $('.userpw .warn').html('<span class="text-red">Please use 8 to 20 characters, upper and lower case letters, numbers, and special characters.</span>')
  } else {
    pwveri = true;
    $('.userpw .warn').empty();
  }
})


// PASSWORD CHECK
$('.userpw-chk input').focusout(function () {
  let userPwChk = $(this).val();

  if (userPwChk.length == 0) {
    $('.userpw-chk .warn').html('<span class="text-red">Please enter a password check.</span>');
  } else if (userPwChk == $('.userpw input').val()) {
    pwchkveri = true;
    $('.userpw-chk .warn').empty();
  } else {
    $('.userpw-chk .warn').html('<span class="text-red">Passwords do not match.</span>');
  }
})


let labels = document.querySelectorAll('label');
let agreeAll = document.querySelectorAll('.agree');
let agreeLabel = document.querySelectorAll('.agree label');

// AGREE
$('.agree .inputbox').on('click', function () {
  agreeveri = true;
})


$('#joinbtn').on('click', function (e) {
  if (mailveri && nameveri && idveri && pwveri && pwchkveri && agreeveri) {
    $('#join-form').submit();
  } else if ($("input[type = 'checkbox']:checked").length != 1) {
    alert("You must agree to the terms and conditions to proceed with membership registration.")
    $('input').trigger('focusout');
  } else {
    e.preventDefault();
    $('input').trigger('focusout');
  }
})


