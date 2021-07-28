$(document).ready(function () {
    $('.second').addClass('active');
    $('.journey-img').attr('src', '/asset/FlatiPhone2.png')
    $('.center-pic').parent().children('.title').css('display', 'block');

    var round = $('.round-number');
    round.mouseover(function () {
        round.removeClass('active');
        $(this).addClass('active');
    }) 
    $('.team-pic').click(function () {
        $('.team-pic').css({ "width": "80px", "height": "80px", "margin-top": "15px", "opacity": "0.7" })
        $(this).css({ "width": "125px", "height": "125px", "margin-top": "0px", "opacity": "1" })
        if ($(this).hasClass('left-pic')) {
            $('.team-quoto').text('Once lockdown stuck and I\'d done several 500 piece puzzles, baked multiple varieties of cookies and had enough quizzes on zoom calls with friends. I realised I should probably go and do some exercise, only I had to do it all alone and there wasn\'t a weight in sight. I\'v always been keen on exercise and as a practicing physio. I\'m keen to get as many people as possible doing more of it.')
            $('.team-bio .title').css('display', 'none');
            $(this).parent().children('.title').css('display', 'block');
        } else if ($(this).hasClass('right-pic')) {
            $('.team-quoto').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venium, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non priodent.')
            $('.team-bio .title').css('display', 'none');
            $(this).parent().children('.title').css('display', 'block');
        } else {
            $('.team-quoto').text('Keen runner, cross-country skier and mad about all things tech! Competed already in one ski ultra-marathon and have a trail-running marathon coming up next July in Norway. Been working in startups and tech for the last few years and really want to create something that helps the everyday runner or cyclist get fitter and make new friends!')
            $('.team-bio .title').css('display', 'none');
            $(this).parent().children('.title').css('display', 'block');
        }
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