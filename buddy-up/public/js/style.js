$(document).ready(function () {
    $('.second').addClass('active');
    $('.journey-img').attr('src', '/asset/FlatiPhone2.svg')
    $('.center-pic').parent().children('.title').css('display', 'block');

    var animating = false;
    var left = $('#container div:nth-child(1)');
    var mid = $('#container div:nth-child(2)');
    var right = $('#container div:nth-child(3)');

    var leftdistance = left.offset().left;
    var middistance = mid.offset().left;
    var rightdistance = right.offset().left;
    console.log(leftdistance, middistance, rightdistance);

    $('.move').on('click', function () {
        var className = $(this).index() + 1;
        console.log(className);
        // if (className === 1) {
            // left.animate({
            //     left: middistance
            // }, 600);
            left.addClass('midpos');
            left.removeClass('leftpos');
            // right.animate({
            //     left: leftdistance
            // }, 600);
            right.addClass('leftpos');
            right.removeClass('rightpos');
            // mid.animate({
            //     left: rightdistance
            // }, 600);
            mid.addClass('rightpos');
            mid.removeClass('midPos');
        // }
        
         
    });

    var round = $('.round-number');
    round.mouseover(function () {
        round.removeClass('active');
        $(this).addClass('active');
    })
    $('.team-pic').click(function () {
        $('.team-pic').css({ "width": "80px", "height": "80px", "margin-top": "15px", "opacity": "0.7", "transition": "0.3s" })
        $(this).css({ "width": "125px", "height": "125px", "margin-top": "0px", "opacity": "1", "transition": "0.3s" })
        if ($(this).hasClass('left-pic')) {
            $('.team-quoto').text('Once lockdown stuck and I\'d done several 500 piece puzzles, baked multiple varieties of cookies and had enough quizzes on zoom calls with friends. I realised I should probably go and do some exercise, only I had to do it all alone and there wasn\'t a weight in sight. I\'v always been keen on exercise and as a practicing physio. I\'m keen to get as many people as possible doing more of it.')
            // $('.team-bio .title').css('display', 'none');
            // $(this).parent().children('.title').css({'display':'block',"transition": "0.3s"});
        } else if ($(this).hasClass('right-pic')) {
            $('.team-quoto').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venium, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non priodent.')
            // $('.team-bio .title').css('display', 'none');
            // $(this).parent().children('.title').css({'display':'block',"transition": "0.3s"});
        } else {
            $('.team-quoto').text('Keen runner, cross-country skier and mad about all things tech! Competed already in one ski ultra-marathon and have a trail-running marathon coming up next July in Norway. Been working in startups and tech for the last few years and really want to create something that helps the everyday runner or cyclist get fitter and make new friends!')
            // $('.team-bio .title').css('display', 'none');
            // $(this).parent().children('.title').css({'display':'block',"transition": "0.3s"});
        }
    })
    $('.first').mouseover(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone.svg')
    });
    $('.first').mouseout(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone2.svg')
        $(this).removeClass('active');
        $('.second').addClass('active');
    });
    $('.second').mouseover(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone2.svg')
    });

    $('.third').mouseover(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone3.svg')
    });
    $('.third').mouseout(function () {
        $('.journey-img').attr('src', '/asset/FlatiPhone2.svg')
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