$(document).ready(function(){
    function randomPower(){
        var value = Math.floor((Math.random() * 100) + 100);
        return value;
    }
    
    

    var Counter =0;

    randomPower();
    var Thor = {
        HealthPoints : 170,
        AttackPower : 0,
    }
    Thor.AttackPower =randomPower();
    $("#thor").text(Thor.HealthPoints);

    randomPower();
    var BlackPanther = {
        HealthPoints : 150,
        AttackPower : 0,
    }
    BlackPanther.AttackPower =randomPower();
    $("#black-panther").text(BlackPanther.HealthPoints);

    randomPower();
    var CaptainAmerica = {
        HealthPoints : 140,
        AttackPower : 0,
    }
    CaptainAmerica.AttackPower = randomPower();
    $("#captain").text(CaptainAmerica.HealthPoints);

    randomPower();
    var IronMman = {
        HealthPoints : 160,
        AttackPower : 0,
    }
    IronMman.AttackPower = randomPower();
    $("#iron").text(IronMman.HealthPoints);

    randomPower();
    var Loki = {
        HealthPoints : 155,
        AttackPower : 0,
    }
    Loki.AttackPower = randomPower();
    $("#loki").text(Loki.HealthPoints);

    randomPower();
    var Thanos = {
        HealthPoints : 200,
        AttackPower : 0,
    }
    Thanos.AttackPower =randomPower();
    $("#thanos").text(Thanos.HealthPoints);


    var chooseYet =false;
    var chooseNot = true;
    var enemy = false;
    var life;



    // Avatar presentation
    $("#top .list").on({
        mouseover : function(){
            $(this).css({
                'cursor':'pointer',
                'border-color':'red'
            });
        },
        mouseout : function(){
            $(this).css({
                'cursor':'default',
                'border-color':'white',
            });
        },
        // Choose your Avatar
        click : function(){
            chooseNot=false;
            if(!chooseYet){
            var imageUrl = $(this).attr("src")
            var imageClass = $(this).attr("class")
            $("#selected").attr("class", imageClass);
            $("#selected").attr("src", imageUrl);
            $("#you").html("YOU");
            $("img").parent().css({
                'display':'inline-block'
            });
            $(this).parent().css({
                'display':'none'
            })
            //Enemy choice
        } else if(chooseYet && !enemy){
            var imageUrl = $(this).attr("src")
            var imageClass = $(this).attr("class")
            $("#enemies").attr("class", imageClass);
            $("#enemies").attr("src", imageUrl);
            $("#yourEnemy").html("ENEMY");
            // $("img").css({
            //     'display':'inline-block'
            // });
            $(this).parent().css({
                'display':'none'
            })
            enemy = true;
            $("#confirmation").html("<h2>Fight!!!</h2>");
            $("#ok").css({
                'display':'none'
            })
            // $("#YourHealth").html()
        } 
        }
    });
    //Confirm your choice
    $("#medium #ok").on({
        mouseover : function(){
            $(this).css({
                'border-color':'red'
            });
        },
        mouseout : function(){
            $(this).css({
                'border-color':'white',
            });
        },
        click : function(){
            if(!chooseNot){
            chooseYet = true;
            $("#confirmation").html("<h2>Choose one of your enemies to fight</h2>");
        }
        
        }
    })
});



