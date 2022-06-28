console.log("test")

function projects() {
    let pj = document.getElementById("completed");
    if (pj.style.display === "none") {
      pj.style.display = "block";
    } else {
      pj.style.display = "none";
    }
  }

  function wip() {
    let wp = document.getElementById("wip");
    if (wp.style.display === "none") {
      wp.style.display = "block";
    } else {
      wp.style.display = "none";
    }
  }
  function socials() {
    let sc = document.getElementById("socials");
    if (sc.style.display === "none") {
      sc.style.display = "block";
    } else {
      sc.style.display = "none";
    }
  }



function toronto(){
      if (document.body.style.backgroundImage != "url('assets/t3.jpeg')"){
        document.body.style.backgroundImage = "url('assets/t3.jpeg')";
    } 
}


//toronto()
