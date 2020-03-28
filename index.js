const url = 'https://kitsu.io/api/edge/anime'
// let url2 = url + Input.value "/"

//accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", 
  function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



const panel1Div = document.querySelector(".panel1");
const panel2Div = document.querySelector(".panel2");
const panel3Div = document.querySelector(".panel3");
const panel4Div = document.querySelector(".panel4");
const panel5Div = document.querySelector(".panel5");
const panel6Div = document.querySelector(".panel6");
const panel7Div = document.querySelector(".panel7");
const panel8Div = document.querySelector(".panel8");
const panel9Div = document.querySelector(".panel9");

fetch(url)
  .then(res => res.json())
  .then( res=> {
      console.log("success!", res.data)
    
      let synopsis1 = document.createElement("P");
      synopsis1.innerText = res.data[0].attributes.synopsis;
      console.log(synopsis1)
      panel1Div.appendChild(synopsis1);

      let synopsis2 = document.createElement("P");
      synopsis2.innerText = res.data[1].attributes.synopsis;
      console.log(synopsis2)
      panel2Div.appendChild(synopsis2);

      let synopsis3 = document.createElement("P");
      synopsis3.innerText = res.data[2].attributes.synopsis;
      console.log(synopsis3)
      panel3Div.appendChild(synopsis3);

      let synopsis4 = document.createElement("P");
      synopsis4.innerText = res.data[3].attributes.synopsis;
      console.log(synopsis4)
      panel4Div.appendChild(synopsis4);

      let synopsis5 = document.createElement("P");
      synopsis5.innerText = res.data[4].attributes.synopsis;
      console.log(synopsis5)
      panel5Div.appendChild(synopsis5);

      let synopsis6 = document.createElement("P");
      synopsis6.innerText = res.data[5].attributes.synopsis;
      console.log(synopsis6)
      panel6Div.appendChild(synopsis6);

      let synopsis7 = document.createElement("P");
      synopsis7.innerText = res.data[6].attributes.synopsis;
      console.log(synopsis7)
      panel7Div.appendChild(synopsis7);

      let synopsis8 = document.createElement("P");
      synopsis8.innerText = res.data[7].attributes.synopsis;
      console.log(synopsis8)
      panel8Div.appendChild(synopsis8);

      let synopsis9 = document.createElement("P");
      synopsis9.innerText = res.data[8].attributes.synopsis;
      console.log(synopsis9)
      panel9Div.appendChild(synopsis9);
      })
    
.catch(err => console.log("err", err))














// fetch(url, {
//     headers :{ 
//         'Content-Type': 'application/vnd.api+json', 
//         'Accept': 'application/vnd.api+json'
//     }
// })
//     .then(res => {
//         console.log('success', res) // if it works well gt this 
//         return res.json()
//     })
//     .then(res => {
//         console.log(res)
//     })   
//     .catch(err => {
//         console.log('something went wrong', err) // if it doest work well get this
//     })
// //  --------------------------------------------------------

// $(function() {
//     $("#accordion").accordion({
//         heightStyle: "content",
//         collapsible: true,
//         active: false
//     });
//     $("#accordion").accordion();
//     $("#accordion").accordion("option", "icons", {
//         'header': 'icon-expand',
//         'activeHeader': 'icon-collapse'
//     });
// });