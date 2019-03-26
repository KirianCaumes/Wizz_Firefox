// $(document).ready(function(){
    console.log("coucou")
    // $(".close").click(function(){
    //     $("#info").animate({left:"+=30px"}).animate({left:"-15000px"});
    // });
    setInterval(()=> {
        $('body').css("position", "absolute")
        $('body').css("top", "0px")
        $('body').css("left", "0px")
        $('body').css("width", "100%")
        $("body").animate({left:"+=15px"},40).animate({top:"+=15px"},40)
        .animate({top:"-=30px"},40).animate({left:"-=30px"},40)
        .animate({top:"+=15px"},40).animate({left:"+=15px"},40)
        .animate({left:"+=15px"},40).animate({top:"+=15px"},40)
        .animate({top:"-=30px"},40).animate({left:"-=30px"},40)
        .animate({top:"+=15px"},40).animate({left:"+=15px"},40).animate({left:"=0px"},40).animate({top:"=0px"},40);
    },3000)
    
// });