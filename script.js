      let body = document.querySelector("body");
     
      let msg = document.querySelector(".msg");
      let yes = document.querySelector(".yes");
      let no = document.querySelector(".no");
      let popup = document.querySelector(".dialog");
      let yes_popup = document.querySelector(".yes_popup");
      let after_yes = document.querySelector(".after_yes");
      let btn_val = false;



      let positions = [
        { left: "100px", top: "100px" },
        { left: "500px", top: "100px" },
        { left: "100px", top: "500px" },
        { left: "600px", top: "100px" },
        { left: "600px", top: "300px" },
        { left: "200px", top: "500px" },
      ];
      let i = 0;
      let val = true;

      no.addEventListener("mousemove", (e) => {
        no.style.left = positions[i].left;
        no.style.top = positions[i].top;
        console.log("X:", positions[i].left);
        console.log("Y:", positions[i].top);
        i++;
        if (val == true && i == 5) {
          console.log("chase me...");
          popup.style.display = "flex";
          popup.classList.add("popup");
          val = false;
        }

        if (i == 6) {
          i = 0;

          popup.style.display = "none";
        }
      });

      yes.addEventListener("mouseenter",()=>{
                yes_popup.style.display = "block";
                yes_popup.classList.add("yes_popup");
      })

      yes.addEventListener("mouseleave",()=>{
                yes_popup.style.display = "none";
                yes_popup.classList.remove("yes_popup");
      })

      yes.addEventListener("click",()=>{
            msg.style.display = "none";
            yes.style.display = "none";
            no.style.display = "none";
            after_yes.style.display="flex";

      })