$(document).ready(function () {

    //randomly choose the power of all avatar from 5 to 30
    function randomPower() {
        var value = Math.floor((Math.random() * 10) + 10);
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
    $("#thorAP").text(Thor.AttackPower);

    randomPower();
    var BlackPanther = {
        HealthPoints: 150,
        AttackPower: 0,
    }
    BlackPanther.AttackPower = randomPower();
    $("#black-panther").text(BlackPanther.HealthPoints);
    $("#black-pantherAP").text(BlackPanther.AttackPower);

    randomPower();
    var CaptainAmerica = {
        HealthPoints: 140,
        AttackPower: 0,
    }
    CaptainAmerica.AttackPower = randomPower();
    $("#captain").text(CaptainAmerica.HealthPoints);
    $("#captainAP").text(CaptainAmerica.AttackPower);

    randomPower();
    var IronMman = {
        HealthPoints: 160,
        AttackPower: 0,
    }
    IronMman.AttackPower = randomPower();
    $("#iron").text(IronMman.HealthPoints);
    $("#ironAP").text(IronMman.AttackPower);

    randomPower();
    var Loki = {
        HealthPoints: 155,
        AttackPower: 0,
    }
    Loki.AttackPower = randomPower();
    $("#loki").text(Loki.HealthPoints);
    $("#lokiAP").text(Loki.AttackPower);

    randomPower();
    var Thanos = {
        HealthPoints: 200,
        AttackPower: 0,
    }
    Thanos.AttackPower = randomPower();
    $("#thanos").text(Thanos.HealthPoints);
    $("#thanosAP").text(Thanos.AttackPower);

    var chooseYet = false;
    var chooseNot = true;
    var enemy = false;
    var good1 = false;
    var good2 = false;
    var alive = true;
    var secondEnemy = false;

    var YourPropert;
    var EnemyPropert;
    var Your_Health;
    var Enemy_Health;
    var YourHealthPoint;
    var EnemyHealthPoint;
    var YourPower;
    var Your_Power;
    var Enemy_power;
    var EnemyPower;
    var score = 0;

    $("#score").text("Score:"+score+"/3");
    $("#attack").css('display', 'none');
    // viewId
    function viewId(el){
        console.log(el);
    }

    //Damage calculator
    var result;
    function action(attackerHP, defendantHP) {
        
        attackerHP = attackerHP - EnemyPower;
        $("#"+Your_Health).text(attackerHP);
        defendantHP = defendantHP - YourPower;
        $("#"+Enemy_Health).text(defendantHP);
        var result = [attackerHP, defendantHP];
        return result;
    }
    // both Avatar choosed?
    function start() {         
        if (good1 || good2 && !secondEnemy) {
            $("#attack").on("click", function () {
                result = action(YourHealthPoint, EnemyHealthPoint);
                console.log(result);
                $("#"+Your_Health).text(result[0]);
                YourHealthPoint =  $("#"+Your_Health).text();
                $("#"+Enemy_Health).text(result[1]);
                EnemyHealthPoint = $("#"+Enemy_Health).text();
                if(result[0]<=0){
                    alive = false;
                    alert("GAME OVER!!!!");
                    location.reload(true);
                } else if(result[1]<=0){
                    secondEnemy = true;
                    alert("Congratulation! You have earned 25 extra life points! Choose your next enemy!")
                    score = score + 1;
                    result[0]=result[0]+25;
                    $("#"+Your_Health).text(result[0]);
                    $("#score").text("Score:"+score+"/3");
                    $("#attack").css('display','none');
                }
            
            })
        } else {
            alert("");
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
                var ower = $(ealth).next();
                Your_Power = ower.attr('id');
                YourPower = $("#"+Your_Power).text();
                Your_Health = ealth.attr('id');
                YourHealthPoint = $("#"+Your_Health).text();
                console.log(YourHealthPoint);

                good1 = true;
                // start(Your_Health);
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
               start(YourHealthPoint, EnemyHealthPoint);

                //Grabbing the selected Enemy id
                var iden = $(this).siblings("span");
                var powe = $(iden).next();
                Enemy_power = powe.attr('id');
                EnemyPower = $("#"+Enemy_power).text();
                Enemy_Health = iden.attr('id');
                console.log(Enemy_Health);
                good2 = true;
                // start(Enemy_Health);
                EnemyHealthPoint = $("#"+Enemy_Health).text();
                console.log(EnemyHealthPoint);

                $("#UserEnemyChoice").html($(this).nextAll());

                $("#ok").css({
                    'display': 'none'
                })

            //choose 2nd Enemy
            } else if(secondEnemy){
                var imageURL = $(this).attr("src")
                var imageCLASS = $(this).attr("class")
                $("#enemies").attr("class", imageCLASS);
                $("#enemies").attr("src", imageURL);
                $("#yourEnemy").html("ENEMY");
                $(this).css('display', 'none');

                var iden2 = $(this).siblings("span");
                var pow = $(iden2).next();
                Enemy_power = pow.attr('id');
                EnemyPower = $("#"+Enemy_power).text();
                Enemy_Health = iden2.attr('id');
                console.log(Enemy_Health);
                good2 = true;
                // start(Enemy_Health);
                EnemyHealthPoint = $("#"+Enemy_Health).text();
                console.log(EnemyHealthPoint);

                $("#UserEnemyChoice").html($(this).nextAll());
                $("#attack").css('display','inline-block');

            }
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
