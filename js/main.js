var users = [
  {
    user: "amir",
    code: "123",
    img: "img/c1.jpg",
    note: "Image One"
  },
  {
    user: "pouya",
    code: "456",
    img: "img/c2.jpg",
    note: "Image Two"
  },
  {
    user: "alex",
    code: "789",
    img: "img/c3.jpg",
    note: "Image Three"
  },
  {
    user: "kate",
    code: "012",
    img: "img/c4.jpg",
    note: "Image Four"
  },
  {
    user: "cara",
    code: "345",
    img: "img/c5.jpg",
    note: "Image Five"
  },
  {
    user: "moe",
    code: "678",
    img: "img/c6.jpg",
    note: "Image Six"
  },
  {
    user: "sam",
    code: "901",
    img: "img/cartoon1.png",
    note: "Image Seven"
  },
];

var myname = document.getElementById("name");
var mypass = document.getElementById("pass");
var mybtns = document.getElementById("btns");
var myh1 = document.getElementById("title");
var myimg = document.getElementById("images");
var myalert = document.getElementById("aler");
var myp = document.getElementById("pee");
var mybodies = document.getElementById("bodies");
var mydiv = document.getElementById("divs");
// var myh2 = document.getElementById("title2");
var mydiv2 = document.getElementById("divs2")


myname.addEventListener('keypress', function enterKey(e) {
  if(e.keyCode == 13) {
    usernames();

  };
}, false);

mypass.addEventListener('keypress', function enterKey(e) {
  if(e.keyCode == 13) {
    usernames();

  };
}, false);


function usernames(){
  if (myname.value == "" || mypass.value == "") {
    alert ("Enter Usename & Password")
    return;
  };
  //variable starts
  for (var i = 0; i < users.length; i = i + 1) {
    if (myname.value !== users[i].user || mypass.value !== users[i].code){
      myalert.textContent = "Your username Or Passowrd is wrong!";
      myp.style.color = "red";
      myalert.style.color = "red";
      myimg.src ="";
      if (myname.value !== "amir") {
        mydiv.style.display = "none";
        mydiv2.classList.add("offset-4");
      }
   } else if (myname.value == users[i].user && mypass.value == users[i].code && myname.value !== "pouya") {
     myalert.textContent = "You are logged in";
     myimg.src = users[i].img;
     myh1.textContent = users[i].note;
     myalert.style.color = "white";
     myp.style.color ="white";
     inputs()
     return;
   } else if (myname.value == users[i].user && mypass.value == users[i].code && myname.value == "pouya") {
     flip();
     return;
   };
   function flip() {
       myalert.textContent = "You are logged in";
       myimg.src = users[i].img;
       myh1.textContent = users[i].note;
       myp.style.color ="white";
       myalert.style.color = "white";
       myh1.classList.add("animated");
       myh1.classList.add("flip");
       myalert.classList.add("animated");
       myalert.classList.add("flip");
       mydiv.style.display = "none";
       mydiv2.classList.add("offset-4");
       return;
   };
 };
};

function inputs() {
    if (myname.value == "amir") {
      var myin = document.createElement("input");
      myin.type = "text";
      mydiv.appendChild(myin);
    }
  }
