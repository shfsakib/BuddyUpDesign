$(document).ready(function () {
    $('.second').addClass('active');
    $('.journey-img').attr('src', '/asset/FlatiPhone2.svg')
    $('.center-pic').parent().children('.title').css('display', 'block');

    var animating = false;
    $('.leftDiv').css('left', '0');
    $('.midDiv').css('left', 'auto');
    $('.rightDiv').css('right', '0');

    var leftPos = $('.leftDiv').css('left');
    var midPos = $('.midDiv').css('left');
    var rightPos = $('.rightDiv').css('right');
    console.log(leftPos, midPos, rightPos);
    window.onresize = function () {
        $('.leftDiv').css('left', '0')
        $('.midDiv').css('left', 'auto')
        $('.rightDiv').css('right', '0')
        leftPos = $('.leftDiv').css('left');
        midPos = $('.midDiv').css('left');
        rightPos = $('.rightDiv').css('right');
        if ($('body').width() < 768) {
            $('#container div img').css({ "width": "60px", "height": "60px", "margin-top": "40px", "transition": "1s" })
            $('.midDiv img').css({ "width": "100px", "height": "100px" })
        } else {
            $('#container div img').css({ "width": "100px", "height": "100px", "margin-top": "40px", "transition": "1s" })
            $('.midDiv img').css({ "width": "150px", "height": "150px" })
        }
    };
    $('.move').on('click', function () {
        var className = $(this).attr('class')
        console.log(className);
        $('.move').find('h4').removeClass('opacity-1');
        $('.move').find('h4').addClass('opacity-0');
        $('.move').find('h6').removeClass('opacity-1');
        $('.move').find('h6').addClass('opacity-0');
        $(this).find('h4').addClass('opacity-1');
        $(this).find('h4').removeClass('opacity-0');
        $(this).find('h6').addClass('opacity-1');
        $(this).find('h6').removeClass('opacity-0');
        if ($(this).hasClass('leftDiv')) {
            $('.leftDiv').animate({
                "left": midPos,
                "width": "180px"
            }, 1000)
            $('.midDiv').animate({
                "left": leftPos,
                "width": "150px"

            }, 1000)
            // $('.rightDiv').animate({
            //     "left": leftPos
            // }, 600)
             
            if ($('body').width() < 768) {
                $('#container div img').css({ "width": "60px", "height": "60px", "margin-top": "40px", "transition": "1s" })
                $('.leftDiv img').css({ "width": "100px", "height": "100px" })
            } else {
                $('#container div img').css({ "width": "100px", "height": "100px", "margin-top": "40px", "transition": "1s" })
                $('.leftDiv img').css({ "width": "150px", "height": "150px" })
            }
            // $('#container div img').css({ "width": "80px", "height": "80px", "margin-top": "40px", "transition": "1s" })
            // $('.leftDiv img').css({ "width": "120px", "height": "120px" })

            $('.leftDiv').addClass("leftDivPos")
            $('.midDiv').addClass("midDivPos")
            // $('.rightDiv').addClass("rightDivPos")

            $('.leftDivPos').addClass("midDiv")
            $('.leftDivPos').removeClass("leftDiv")
            $('.leftDivPos').removeClass("leftDivPos")

            $('.midDivPos').addClass("leftDiv")
            $('.midDivPos').removeClass("midDiv")
            $('.midDivPos').removeClass("midDivPos")

            // $('.rightDivPos').addClass("leftDiv")
            // $('.rightDivPos').removeClass("rightDiv")
            // $('.rightDivPos').removeClass("rightDivPos")
            // $(this).css('right', 'auto');

            $('.leftDiv').css({ 'left': '0', 'right': '' })
            $('.midDiv').css('left', 'auto')
            $('.rightDiv').css({ 'left': '', 'right': '0' })

        }
        else if ($(this).hasClass('rightDiv')) {
            $('.rightDiv').animate({
                "left": midPos,
                "width": "180px",
            }, 1000)
            $('.midDiv').animate({
                "right": rightPos,
                "width": "150px"
            }, 1000)
            // $('.leftDiv').animate({
            //     "right": rightPos
            // }, 600)
            //  $('.leftDiv').css('left', ''); 
            //
            if ($('body').width() < 768) {
                $('#container div img').css({ "width": "60px", "height": "60px", "margin-top": "40px", "transition": "1s" })
                $('.rightDiv img').css({ "width": "100px", "height": "100px" })
            } else {
                $('#container div img').css({ "width": "100px", "height": "100px", "margin-top": "40px", "transition": "1s" })
                $('.rightDiv img').css({ "width": "150px", "height": "150px" })
            }


            // $('.leftDiv').addClass("leftDivPos")
            $('.midDiv').addClass("midDivPos")
            $('.rightDiv').addClass("rightDivPos")

            $('.rightDivPos').addClass("midDiv")
            $('.rightDivPos').removeClass("rightDiv")
            $('.rightDivPos').removeClass("rightDivPos")

            $('.midDivPos').addClass("rightDiv")
            $('.midDivPos').removeClass("midDiv")
            $('.midDivPos').removeClass("midDivPos")

            // $('.leftDivPos').addClass("rightDiv")
            // $('.leftDivPos').removeClass("leftDiv")
            // $('.leftDivPos').removeClass("leftDivPos");

            // $('.leftDiv').css({'left':'0','right':''})
            // $('.midDiv').css({'left':'auto','right':''})
            // $('.rightDiv').css({'left':'','right':'0'})  
            $('.leftDiv').css({ 'left': '0', 'right': '' })
            $('.midDiv').css({ 'left': '', 'right': '' })
            $('.rightDiv').css({ 'left': '', 'right': '0' })
        }
    });
    $('.leftDiv').click(function () {
        $('.team-quoto').text('Once lockdown stuck and I\'d done several 500 piece puzzles, baked multiple varieties of cookies and had enough quizzes on zoom calls with friends. I realised I should probably go and do some exercise, only I had to do it all alone and there wasn\'t a weight in sight. I\'v always been keen on exercise and as a practicing physio. I\'m keen to get as many people as possible doing more of it.')

    })
    $('.midDiv').click(function () {
        $('.team-quoto').text('Keen runner, cross-country skier and mad about all things tech! Competed already in one ski ultra-marathon and have a trail-running marathon coming up next July in Norway. Been working in startups and tech for the last few years and really want to create something that helps the everyday runner or cyclist get fitter and make new friends!')
    })
    $('.rightDiv').click(function () {
        $('.team-quoto').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venium, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non priodent.')
    })
    var round = $('.round-number');
    round.mouseover(function () {
        round.removeClass('active');
        $(this).addClass('active');
    })
    // $('.team-pic').click(function () {
    //     $('.team-pic').css({ "width": "80px", "height": "80px", "margin-top": "15px", "opacity": "0.7", "transition": "0.3s" })
    //     $(this).css({ "width": "125px", "height": "125px", "margin-top": "0px", "opacity": "1", "transition": "0.3s" })
    //     if ($(this).hasClass('left-pic')) {
    //         $('.team-quoto').text('Once lockdown stuck and I\'d done several 500 piece puzzles, baked multiple varieties of cookies and had enough quizzes on zoom calls with friends. I realised I should probably go and do some exercise, only I had to do it all alone and there wasn\'t a weight in sight. I\'v always been keen on exercise and as a practicing physio. I\'m keen to get as many people as possible doing more of it.')
    //         // $('.team-bio .title').css('display', 'none');
    //         // $(this).parent().children('.title').css({'display':'block',"transition": "0.3s"});
    //     } else if ($(this).hasClass('right-pic')) {
    //         $('.team-quoto').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venium, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non priodent.')
    //         // $('.team-bio .title').css('display', 'none');
    //         // $(this).parent().children('.title').css({'display':'block',"transition": "0.3s"});
    //     } else {
    //         $('.team-quoto').text('Keen runner, cross-country skier and mad about all things tech! Competed already in one ski ultra-marathon and have a trail-running marathon coming up next July in Norway. Been working in startups and tech for the last few years and really want to create something that helps the everyday runner or cyclist get fitter and make new friends!')
    //         // $('.team-bio .title').css('display', 'none');
    //         // $(this).parent().children('.title').css({'display':'block',"transition": "0.3s"});
    //     }
    // })
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