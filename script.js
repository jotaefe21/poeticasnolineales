window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup1").style.display = "block";
            document.querySelector(".popup2").style.display = "block";
            document.querySelector(".popup3").style.display = "block";
            document.querySelector(".popup4").style.display = "block";
            document.querySelector(".popup5").style.display = "block";
            document.querySelector(".popup6").style.display = "block";
            document.querySelector(".popup7").style.display = "block";
            document.querySelector(".popup8").style.display = "block";
        },
        0
    )
});
document.querySelector("#close1").addEventListener("click", function(){
    document.querySelector(".popup1").style.display = "none";
    });

document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
    });
document.querySelector("#close3").addEventListener("click", function(){
    document.querySelector(".popup3").style.display = "none";
    });

document.querySelector("#close4").addEventListener("click", function(){
    document.querySelector(".popup4").style.display = "none";
    });
document.querySelector("#close5").addEventListener("click", function(){
    document.querySelector(".popup5").style.display = "none";
    });

document.querySelector("#close6").addEventListener("click", function(){
    document.querySelector(".popup6").style.display = "none";
    });
document.querySelector("#close7").addEventListener("click", function(){
    document.querySelector(".popup7").style.display = "none";
    });

document.querySelector("#close8").addEventListener("click", function(){
    document.querySelector(".popup8").style.display = "none";
    });



    
