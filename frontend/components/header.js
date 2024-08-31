document.write(`
<div class="popup" id="popup">
   <div class="popup-content">
      <button class="close-btn" onclick="closePopup()">✖</button>
      <div id="oui"></div>
      <!-- Contenu Calendly -->
   </div>
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
<script>
   function openPopup() {
       var popup = document.getElementById('popup');
       popup.style.opacity = 0; // Opacité initiale à 0
       popup.classList.add('show');
   
       var fadeInInterval = setInterval(function() {
           if (popup.style.opacity < 1) {
               popup.style.opacity = parseFloat(popup.style.opacity) + 0.1;
           } else {
               clearInterval(fadeInInterval);
           }
       }, 20);
   
       Calendly.initInlineWidget({
           url: 'https://calendly.com/jean-philippe-robin/30min',
           parentElement: document.getElementById('oui'),
           prefill: {},
           utm: {}
       });
   }
   
   function closePopup() {
       var popup = document.getElementById('popup');
   
       var fadeOutInterval = setInterval(function() {
           if (popup.style.opacity > 0) {
               popup.style.opacity -= 0.1;
           } else {
               clearInterval(fadeOutInterval);
               popup.classList.remove('show'); 
           }
       }, 20);
   }
</script>
<div >
   <header style=" height: 145px;">
      <div id="background" style="display: none; position: fixed; width: 100%; height: 100%; backdrop-filter: blur(10px);"></div>
      <div id="burger" style="display: none; position: fixed; width: 100%; z-index: 9999;">
         <div style="background-color: white; margin: 14px; border-radius: 12px; padding: 30px; box-shadow: 0 8px 8px rgba(0, 0, 0, .2);">
            <a id="close" style="position: absolute; right: 39px; top: 39px;">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
               </svg>
            </a>
            <a style="margin-top: 15px; color: black; text-decoration: none" href="accueil.html">Accueil</a><br>
            <div style="height: 9px"></div>
            <a style="padding-top: 40px; color: black; text-decoration: none" href="valeurs.html">Valeurs</a><br>
            <div style="height: 9px"></div>
            <a style="margin-top: 15px; color: black; text-decoration: none" href="services.html">Services</a><br>
            <div style="height: 9px"></div>
            <a style="margin-top: 15px; color: black; text-decoration: none" href="intervenant.html">Intervenant</a><br>
            <div style="height: 9px"></div>
            <a style="margin-top: 15px; color: black; text-decoration: none" href="actus.html">Actualités</a><br>
            <div style="height: 9px"></div>
            <a style="margin-top: 15px; color: black; text-decoration: none" href="coordonnees.html">Coordonnées</a><br>
         </div>
      </div>
      <a id="menu" class="menu-display" style="padding: 10px; border: 1px solid #141414;  z-index: 100; 
         border-radius: 12px; position: absolute; top: 70px; right : 30px; height :25px; width :25px">
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
         </svg>
      </a>
      <script>
         document.getElementById("close").addEventListener("click", function() {
             var background = document.getElementById("background");
             var burger = document.getElementById("burger");
         
             // Fade out animation
             background.style.opacity = 1;
             burger.style.opacity = 1;
         
             var fadeOutInterval = setInterval(function() {
                 if (background.style.opacity > 0) {
                     background.style.opacity -= 0.1;
                     burger.style.opacity -= 0.1;
                 } else {
                     clearInterval(fadeOutInterval);
                     background.style.display = "none";
                     burger.style.display = "none";
                 }
             }, 20);
         });
         
         document.getElementById("menu").addEventListener("click", function() {
             var background = document.getElementById("background");
             var burger = document.getElementById("burger");
         
             background.style.opacity = 0;
             burger.style.opacity = 0;
             background.style.display = "block";
             burger.style.display = "block";
         
             var fadeInInterval = setInterval(function() {
                 if (background.style.opacity < 1) {
                     background.style.opacity = parseFloat(background.style.opacity) + 0.1;
                     burger.style.opacity = parseFloat(burger.style.opacity) + 0.1;
                 } else {
                     clearInterval(fadeInInterval);
                 }
             }, 20);
         });
      </script>
      <div style="position: fixed; bottom: 30px; right: 6px; width: 100%; text-align: center;">
         <div class="btn_blue2"  id="open-popup-btn" onclick="openPopup()">Prendre RDV ➜</btn>
         </div>
      </div>
      <div style="  
         z-index: -400; color: white; font-size: 12px; background-color: var(--blue); text-align: center; height:30px; padding-top:10px;  box-shadow: 0 8px 8px rgba(145, 145, 145, 0.2);
         ">Ce site est éco-conçu • <a href="valeurs.html" style="color: white; font-size: 12px;">En savoir plus ➜</a></div>
      <section class="section" style="margin-top:10px">
         <nav class="navbar">
            <div class="logo">
               <a href="accueil.html"><img class="logo-img" src="assets/logo.png" alt="Logo"></a>
            </div>
            <div class="navbar-buttons" >
               <btn class="btn btn_blue" id="open-popup-btn" onclick="openPopup()">Prendre RDV ➜</btn>
            </div>
            <div class="navbar-buttons">
               <a href="contact.html" class="nav-link">Contact</a>
            </div>
            <div class="navbar-buttons">
               <a href="actus.html" class="nav-link">Actus</a>
            </div>
            <div class="navbar-buttons">
               <a href="intervenant.html" class="nav-link">Intervenant</a>
            </div>
            <div class="navbar-buttons">
               <a href="services.html" class="nav-link">Services</a>
            </div>
            <div class="navbar-buttons">
               <a href="valeurs.html" class="nav-link">Valeurs</a>
            </div>
         </nav>
      </section>
   </header>
</div>
<div class="line"></div>
<section style="">
`);