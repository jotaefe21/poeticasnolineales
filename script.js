window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup1").style.display = "block";
            document.querySelector(".popup2").style.display = "block";
            document.querySelector(".popup3").style.display = "block";
            document.querySelector(".popup4").style.display = "block";
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



    
