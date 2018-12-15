$(document).ready(function () {

    //randomly choose the power of all avatar from 5 to 30
    function randomPower() {
        var value = Math.floor((Math.random() * 25) + 5);
        return value;
    }

    var Counter = 0;

    randomPower();
    var Thor = {
        HealthPoints: 170,
        AttackPower: 0,
    }
    Thor.AttackPower = randomPower();
    $("#thor").text(Thor.HealthPoints);

    randomPower();
    var BlackPanther = {
        HealthPoints: 150,
        AttackPower: 0,
    }
    BlackPanther.AttackPower = randomPower();
    $("#black-panther").text(BlackPanther.HealthPoints);

    randomPower();
    var CaptainAmerica = {
        HealthPoints: 140,
        AttackPower: 0,
    }
    CaptainAmerica.AttackPower = randomPower();
    $("#captain").text(CaptainAmerica.HealthPoints);

    randomPower();
    var IronMman = {
        HealthPoints: 160,
        AttackPower: 0,
    }
    IronMman.AttackPower = randomPower();
    $("#iron").text(IronMman.HealthPoints);

    randomPower();
    var Loki = {
        HealthPoints: 155,
        AttackPower: 0,
    }
    Loki.AttackPower = randomPower();
    $("#loki").text(Loki.HealthPoints);

    randomPower();
    var Thanos = {
        HealthPoints: 200,
        AttackPower: 0,
    }
    Thanos.AttackPower = randomPower();
    $("#thanos").text(Thanos.HealthPoints);

    var chooseYet = false;
    var chooseNot = true;
    var enemy = false;
    var good = false;

    var YourPropert;
    var EnemyPropert;
    $("#attack").css('display', 'none');

    //Damage calculator

    function action(attacker, defendant) {
        if (defendant > attacker) {
            result = defendant - attacker;
        } else if (attacker >= attac2) {
            result = 0;
        }
        return result;
    }
    // both Avatar choosed?
    function start(elem) {
        if (good) {
            $("#attack").on("click", function () {

            })
        } else {
            alert("test123");
        }
    }


    // Avatar presentation
    $("#top .list").on({
        mouseover: function () {
            $(this).css({
                'cursor': 'pointer',
                'border-color': 'red'
            });
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default',
                'border-color': 'white',
            });
        },
        // Choose your Avatar
        click: function avatarSelection() {
            chooseNot = false;
            if (!chooseYet) {
                var imageUrl = $(this).attr("src")
                var imageClass = $(this).attr("class")
                $("#selected").attr("class", imageClass);
                $("#selected").attr("src", imageUrl);
                $("#you").html("YOU");

                /////////////to be fixed////////////////////////////////////        

                $(".avatar").css({
                    'display': 'inline-block'
                });

                $(this).parent().css({
                    'display': 'none'
                });

                ///////////////////////////////////////////////////////// ----> //

                //Grabbing the selected avatar id

                YourPropert = $(this).nextAll();
                var ealth = $(this).siblings("span");
                var Your_Health = ealth.attr('id');

                console.log(Your_Health);

                $("#UserChoice").html($(this).nextAll());
                return Your_Health;

                //Enemy choice
            } else if (chooseYet && !enemy) {

                var imageUrl = $(this).attr("src")
                var imageClass = $(this).attr("class")
                $("#enemies").attr("class", imageClass);
                $("#enemies").attr("src", imageUrl);
                $("#yourEnemy").html("ENEMY");

                $(this).parent().css({
                    'display': 'none'
                })
                enemy = true;
                $("#attack").css('display', 'inline-block');
                $("#confirmation").html("<h2>Fight!!!</h2>");


                //Grabbing the selected Enemy id

                EnemyPropert = $(this).nextAll();
                var iden = $(this).siblings("span");
                var Enemy_Health = iden.attr('id');
                console.log(Enemy_Health);
                good = true;
                start(Enemy_Health);

                $("#UserEnemyChoice").html($(this).nextAll());

                $("#ok").css({
                    'display': 'none'
                })
                return Enemy_Health;
            }
            return [Your_Health, Enemy_Health];
        }

    });

    //Confirm your choice

    $("#medium #ok").on({
        mouseover: function () {
            $(this).css({
                'border-color': 'red'
            });
        },
        mouseout: function () {
            $(this).css({
                'border-color': 'white',
            });
        },

        click: function () {
            if (!chooseNot) {
                chooseYet = true;
                $("#confirmation").html("<h2>Choose one of your enemies to fight</h2>");

            }

        }
    })
});



