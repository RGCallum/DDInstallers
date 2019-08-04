// document.getElementById('circSaw').play();



  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
       
//   window.onload = function() {
//     document.getElementById('button').onclick = function() {
//       document.getElementById('modalOverlay').style.display = 'none'
//     };

// }


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "scroll1";
  } else {
    document.getElementById("myP").className = "scroll1Out";
  }   if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("myP2").className = "scroll2";
  } else {
    document.getElementById("myP2").className = "scroll2Out";
  }
  if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
    document.getElementById("myP3").className = "scroll3";
  } else {
    document.getElementById("myP3").className = "scroll3Out";
  }
  if (document.body.scrollTop > 1650 || document.documentElement.scrollTop > 1650) {
    document.getElementById("myP4").className = "scroll4";
  } else {
    document.getElementById("myP4").className = "scroll4Out";
  }   if (document.body.scrollTop > 2150 || document.documentElement.scrollTop > 2150) {
    document.getElementById("myP5").className = "scroll5";
  } else {
    document.getElementById("myP5").className = "scroll5Out";
  }
  if (document.body.scrollTop > 2550 || document.documentElement.scrollTop > 2550) {
    document.getElementById("myP6").className = "scroll6";
  } else {
    document.getElementById("myP6").className = "scroll6Out";
  } if (document.body.scrollTop > 2850 || document.documentElement.scrollTop > 2850) {
    document.getElementById("myP7").className = "scroll7";
  } else {
    document.getElementById("myP7").className = "scroll7Out";
  }   if (document.body.scrollTop > 3150 || document.documentElement.scrollTop > 3150) {
    document.getElementById("myP8").className = "scroll8";
  } else {
    document.getElementById("myP8").className = "scroll8Out";
  }

  // if (document.body.scrollTop > 2650 || document.documentElement.scrollTop > 2650) {
  //   document.getElementById("myP9").className = "scroll9";
  // } else {
  //   document.getElementById("myP9").className = "scroll9Out";
  // }
  // if (document.body.scrollTop > 2950 || document.documentElement.scrollTop > 2950) {
  //   document.getElementById("myP10").className = "scroll10";
  // } else {
  //   document.getElementById("myP10").className = "scroll10Out";
  // }
}
