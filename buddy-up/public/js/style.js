$(document).ready(function () {
    $('.second').addClass('active');
    $('.journey-img').attr('src', '/asset/FlatiPhone2.png')
    var round = $('.round-number');
    round.mouseover(function () {
        round.removeClass('active');
        $(this).addClass('active');
    })

    $('.first').mouseover(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone.png')
    });
    $('.first').mouseout(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone2.png')
        $(this).removeClass('active');
        $('.second').addClass('active');
    });
    $('.second').mouseover(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone2.png')
    });

    $('.third').mouseover(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone3.png')
    });
    $('.third').mouseout(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone2.png')
        $('.second').addClass('active');
        $(this).removeClass('active');
    });
    //Menu hamburger animation start
    const menuBtn = document.querySelector('.menu-btn');
    const hamburger = document.querySelector(".menu-btn_burger");
    const nav = document.querySelector(".header-right");
    const menunav = document.querySelector(".menu-nav");
    let showMenu = false;
    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (!showMenu) {
            hamburger.classList.add('open');
            nav.classList.add('opennav');
            menunav.classList.add('openmenu');
            showMenu = true;
        } else {
            hamburger.classList.remove('open');
            nav.classList.remove('opennav');
            menunav.classList.remove('openmenu');
            showMenu = false;
        }
    }



})