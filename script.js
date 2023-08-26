$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 500
            }
          },
          "color": {
            "value": "#b1c900"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    );

});

window.onload = ()=>{
  this.sessionStorage.setItem('username', 'miage');
  this.sessionStorage.setItem('password', 'miage123');
}

var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit = ()=>{return false;}

login.onclick = ()=>{

  if ((input[0].value != "") && (input[1].value != ""))
   {
     if ((input[0].value == sessionStorage.getItem('username')) && (input[1].value == sessionStorage.getItem('password')))
      {
        form.onsubmit = ()=>{return 1;}
        document.cookie = "username="+input[0].value;
        document.cookie = "password="+input[1].value;
      }
      else
      {
        if ((input[0].value != sessionStorage.getItem('username')) )
        {
          input[0].nextElementSibling.textContent = "Username NOT match";
        setTimeout(()=>{
          input[0].nextElementSibling.textContent = "";
        }, 2000);

        }
        if ((input[1].value != sessionStorage.getItem('password')) )
        {
          input[1].nextElementSibling.textContent = "Password NOT match";
        setTimeout(()=>{
          input[1].nextElementSibling.textContent = "";
        }, 2000);

        }

      }

   }
  else
   {
    if (input[0].value == "")
    {
      input[0].nextElementSibling.textContent = "Username is empty";
      setTimeout(()=>{
        input[0].nextElementSibling.textContent = "";
      }, 2000);
    }
    if (input[1].value == "")
    {
      input[1].nextElementSibling.textContent = "Password is empty";
      setTimeout(()=>{
        input[1].nextElementSibling.textContent = "";
      }, 2000);
    }
   }
}