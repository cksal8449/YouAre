$(document).ready(function () {

    // header
    $('.sub').hide();
    $('.gnb > li').hover(function () {

        $(this).find('ul').stop().slideDown(500);
        $(this).find('a').addClass('on');

    }, function () {
        $(this).find('ul').stop().slideUp(500);
        $(this).find('a').removeClass('on');
    })


    // onclick에러로 아래코드 작성함
    $('.counter .minus').on('click', () => {
        count('minus')
    })
    $('.counter .plus').on('click', () => {
        count('plus')
    })

    // 숫자 증감
    // 화면에 표시되는 값
    const result = document.getElementById('result');
    let number = result.innerText;

    function count(type) {

        // 더하기빼기
        if (type === 'plus') {
            number = parseInt(number) + 1;

        } else if (type === 'minus') {
            number = parseInt(number) - 1;
        }

        // 마이너스 값을 갖지 못하게 한다.
        if (number <= 0) {
            number = 0;
        }

        // 결과 출력
        result.innerText = number;
    }

    // ADD TO CART
    // 제품의 개수가 0이라면 "제품을 하나 이상 선택하세요." 아니라면 "제품이 장바구니에 담겼습니다."
    $('.cart-btn').on('click', function () {
        if (number == 0) {
            alert('Please select at least one product.')
        } else {
            alert('Product added to cart.')
        }
    })


    // 하트 누를때 효과
    $('.like').on('click', () => {
        $('.add-to-cart').toggleClass('active');
    })


    // a링크 누를때마다 위로 올라가는 것 방지
    $(".tabs a, .tab-content a").click(function (e) {
        e.preventDefault();
    });

    // 탭을 누를때 해당 콘텐츠 보이기
    for (let i = 0; i < $('.tab-item').length; i++) {
        $('.tab-item').eq(i).on('click', function () {
            $('.tab-item').removeClass('active');
            $('.tab-content').removeClass('active');

            $(this).addClass('active');
            $('.tab-content').eq(i).addClass('active')
        })
    }


    // 검색기능 구현 (대소문자 구분해야함, 전체검색만 가능 추후 수정)
    $('#keyword').keyup(function () {
        var k = $(this).val();
        $('.qna-content > tbody > tr').hide();
        var temp = $(".qna-content > tbody > tr > td:nth-child(n+2):contains('" + k + "')");

        $(temp).parent().show();
    })

});