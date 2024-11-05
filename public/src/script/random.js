let current = 0;
function dropdown(a) { 
    if (a[0].parentNode.className.indexOf("showed") == -1) {
        current++;
<<<<<<< HEAD:public/src/script/random.js
        a[0].parentNode.classList.add("showed");
=======
        a[0].parentNode.className += " showed";
>>>>>>> b9064b9c1ad7d407003fce09576e6f661fb5e31e:static/src/script/random.js
        a[0].parentNode.style.zIndex = current;
        a.shift()
        Array.from(a[0].children).forEach(i => i.classList.toggle("show"));   
    } else { 
<<<<<<< HEAD:public/src/script/random.js
        a[0].parentNode.classList.remove("showed");
=======
        a[0].parentNode.className = a[0].parentNode.className.replace(" showed", "");
>>>>>>> b9064b9c1ad7d407003fce09576e6f661fb5e31e:static/src/script/random.js
        a[0].parentNode.style.zIndex = current;
        a.shift()
        Array.from(a[0].children).forEach(i => i.classList.remove("show"));   
    }
}


function toggle(element) {
<<<<<<< HEAD:public/src/script/random.js
  if(element.classList.contains("Raised")) {
    element.classList.add("Pressed");
    element.classList.remove("Raised");
  } else {
    element.classList.add("Raised");
    element.classList.remove("Pressed");
  }
  if(element.classList.contains("DarkButton")) darkToggle();
  if(element.classList.contains("ConfigButton")) settingsToggle();
=======
  if(element.className.includes("Raised")) {
    element.className += " Pressed";
    element.className = element.className.replace(" Raised", "")
  } else {
    element.className += " Raised";
    element.className = element.className.replace(" Pressed", "")
  }
  if(element.className.includes("DarkButton")) darkToggle();
  if(element.className.includes("ConfigButton")) settingsToggle();
>>>>>>> b9064b9c1ad7d407003fce09576e6f661fb5e31e:static/src/script/random.js
}

function darkToggle() {
  let element = document.documentElement
  let button = document.getElementsByClassName("DarkButton")[0]
  let logo = document.getElementById("logo");
<<<<<<< HEAD:public/src/script/random.js
  c.theme.value = element.classList.contains("Dark") ? "white" : "black"
  if(element.classList.contains("Dark")) {
    button.classList.add("Raised");
    button.classList.remove("Pressed")
    element.classList.remove("Dark")
    logo.src = "/images/logo.png"
  } else {
    element.classList.add("Dark");
    button.classList.add("Pressed");
    button.classList.remove("Raised")
    logo.src = "/images/logo-dark.png"
=======
  c.theme.value = element.className.includes("Dark") ? "white" : "black"
  if(element.className.includes("Dark")) {
    button.className += " Raised";
    button.className = button.className.replace(" Pressed", "")
    element.className = element.className.replace(" Dark", "")
    logo.src = "https://parogo72-solutions.vercel.app/images/logo.png"
  } else {
    element.className += " Dark";
    button.className += " Pressed";
    button.className = button.className.replace(" Raised", "")
    logo.src = "https://parogo72-solutions.vercel.app/images/logo-dark.png"
>>>>>>> b9064b9c1ad7d407003fce09576e6f661fb5e31e:static/src/script/random.js
  }
  
}

function settingsToggle() {
  let element = document.getElementById("settings")
  let button = document.getElementById("settingsToggle")
<<<<<<< HEAD:public/src/script/random.js
  if(element.classList.contains("Displayed")) {
    button.classList.replace("Pressed", "Raised")
    element.classList.remove("Displayed")
  } else {
    button.classList.replace("Raised", "Pressed")
    element.classList.add("Displayed")
=======
  if(element.className.includes("Displayed")) {
    button.className = button.className.replace(" Pressed", " Raised")
    element.className = element.className.replace(" Displayed", "")
  } else {
    button.className = button.className.replace(" Raised", " Pressed")
    element.className += " Displayed";
>>>>>>> b9064b9c1ad7d407003fce09576e6f661fb5e31e:static/src/script/random.js
  }
}

function radioToggle(e) {
  
  let element = e.className ? e : document.getElementsByClassName(e)[0]
  element.dispatchEvent(new Event('click'));
  element.checked = true;
  switch (e.className ? e.className : e) {
    case 'mil':
      aprox = 3;
      c.round.value = e.className ? e.className : e
    break;
    case 'cent':
      aprox = 2;
      c.round.value = e.className ? e.className : e
    break;
    case 'dec':
      aprox = 1;
      c.round.value = e.className ? e.className : e
    break;
    case '10':
      exponent = false;
      c.notation.value = e.className ? e.className : e
    break;
    case 'e': 
      exponent = true;
      c.notation.value = e.className ? e.className : e
    break;
  }
  main()
}

function languageToggle(e) {
  let lang;
<<<<<<< HEAD:public/src/script/random.js
=======
  let backup;
  let selector = document.getElementById("lang-selector")
>>>>>>> b9064b9c1ad7d407003fce09576e6f661fb5e31e:static/src/script/random.js
  switch (e.className ? e.className : e) {
    case 'Español':
      lang = "es";
    break;
    case 'English':
      lang = "en";
    break;
    case 'Català':
      lang = "ca";
    break;
<<<<<<< HEAD:public/src/script/random.js
  }
  if(!lang || document.documentElement.lang === lang) return;
  window.location.href = window.location.protocol + '//' + window.location.host + "/" + lang
  c.lang.value = e.className ? e.className : e
}
=======
    case 'en':
      lang = e;
      backup = "English";
    break;
    case 'es':
      lang = e;
      backup = "Español";
    break;
    case 'ca':
      lang = e;
      backup = "Català";
    break;
  }
  if(!lang) return;
  selector.innerHTML = e.className || backup ? e.className || backup : e
  selector.className = selector.className.replace(" es", "").replace(" en", "").replace(" ca", "") + ` ${lang}`
  c.lang.value = e.className ? e.className : e
  document.documentElement.lang = lang
  params.set("lang", lang)
  history.pushState(null, null, "?" + params.toString());
  document.querySelector('meta[name="description"]').setAttribute("content", languages[lang].description || languages["es"].despription);
  document.querySelector('meta[property="og:description"]').setAttribute("content", languages[lang].description || languages["es"].despription);
  langToggle(lang)
}

function langToggle(lang) {
      let lang_obj = languages[lang]
      let elements = document.getElementsByClassName('lang')
      let array_lang = Object.entries(lang_obj)
      Array.from(elements).forEach(e => {
          let val = array_lang.find(a=> {
            return e.className.includes(" " + a[0] + " ")
          })
          if(!val) return;
          e.innerHTML = val[1]
      })
}
>>>>>>> b9064b9c1ad7d407003fce09576e6f661fb5e31e:static/src/script/random.js
