function copyCommand() {
  navigator.clipboard.writeText("sudo xattr -rd com.apple.quarantine path/to/ProjectPlusFR.app");
   const msg = document.getElementById("copyMessage");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 1200);
}

function copyCommand2() {
  navigator.clipboard.writeText("~/.local/share/P+FR/");
   const msg = document.getElementById("copyMessage");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 1200);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  const zoomables = document.querySelectorAll(".zoomable");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  const img = document.createElement("img");
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  zoomables.forEach(z => {
    z.addEventListener("click", () => {
      img.src = z.src;
      lightbox.classList.add("show");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      // --- SUMMARY ---
      "summary-title": "Summary",
      "summary-text1": "Amazing build with auto update <br> (Windows, Linux and MacOS)",
      "summary-text2": `The build is only cosmetics. <br> Stage, skin and custom music (~180 playlist <span class="scroll-link" onclick="scrollToSection('playlist')">below</span>)`,
      "summary-text3": "<u>Current version: P+FR 1.5.1, P+ 3.1.5</u>",
      "summary-text4": "8 GB minimum required",
      "carousel-prev": "Previous",
      "carousel-next": "Next",

      // --- DOWNLOAD ---
      "download-title": "Download",

      // --- INSTALL ---
      "install-title": "How to install <br> (Windows and MacOS)",
      "install-step1": "1. Extract .zip file",
      "install-step2": "2. Run Dolphin.exe/ProjectPlusfr.app and after the window Update pop up do 'Update'",
      "install-step3": "3. Once finished. Add Brawl by default",
      "install-drive": "If you have some trouble, use <a href='https://drive.google.com/drive/folders/1n1oFOxmsNRloNUBA7MP8cShSoz1wqDeL?dmr=1&amp;ec=wgc-drive-globalnav-goto' target='_blank' rel='noopener noreferrer'><span style='color: #2570c4'>(Google Drive Mirror)</span></a>",
      "install-note-title": "<u>Note</u>",
      "install-note": "MacOS could not authorize you to download the update",
      "install-command-text": "Run this command in Terminal to fix it:",
      "install-copy": "Copy",
      "install-copied": "✅ Copied!",

      // --- LINUX ---
      "linux-title": "Linux",
      "linux-download": "Download <a href='https://github.com/Kenmak77/PplusFRLinux/blob/main/P%2BFR_AutoUpdate.sh' target='_blank' rel='noopener noreferrer'><span style='color: #2570c4'> P+FR_AutoUpdate.sh</span></a> (Debian, Ubuntu, Mint, Arch)",
      "linux-launch": "Once installed, launch with P+FR.Desktop to keep the build update",
      "linux-location": "P+FR.Desktop is in:",
      "linux-copy": "Copy",
      "linux-copied": "✅ Copied!",

      // --- SETTINGS ---
      "settings-title": "Setting Dolphin Recommendation",
      "settings-text1": "Best Render and LET ANISOTROPIC FILTERING TO 1x !! (Otherwise PS2 doesn't look good)",
      "settings-text2": "For machines with powerful hardware, it's recommend using Exclusive Ubershaders alongside Compile Shaders Before Starting for a stutter-free experience. Otherwise let 'Specialized' by default.",

      // --- WII ---
      "wii-title": "Wii Version",
      "wii-text": "<a href='https://github.com/Kenmak77/Pplus-FR-wii' target='_blank' rel='noopener noreferrer'><span style='color: #2570c4'> P+FR Wii </span></a> (SD 4GB minimum required)",

      // --- PLAYLIST ---
      "playlist-title": "Playlist"
    },

    fr: {
      // --- SUMMARY ---
      "summary-title": "Résumé",
      "summary-text1": "Build incroyable avec mis à jour automatique <br> (Windows, Linux and MacOS)",
      "summary-text2": `Ce build modifie uniquement l'apparence. <br> Stages, skins et musiques personnalisées (~180 playlist <span class="scroll-link" onclick="scrollToSection('playlist')">ci-dessous</span>)`,
      "summary-text3": "<u>Version actuelle : P+FR 1.5.1, P+ 3.1.5</u>",
      "summary-text4": "8 Go d’espace disque minimum requis",
      "carousel-prev": "Précédent",
      "carousel-next": "Suivant",

      // --- DOWNLOAD ---
      "download-title": "Téléchargement",

      // --- INSTALL ---
      "install-title": "Comment installer <br> (Windows et macOS)",
      "install-step1": "1. Extraire le fichier .zip",
      "install-step2": "2. Lancez Dolphin.exe ou ProjectPlusFR.app, puis cliquez sur 'Update' lorsque la fenêtre apparaît",
      "install-step3": "3. Une fois terminé, ajoutez Brawl par défaut",
      "install-drive": "En cas de problème, utilisez <a href='https://drive.google.com/drive/folders/1n1oFOxmsNRloNUBA7MP8cShSoz1wqDeL?dmr=1&amp;ec=wgc-drive-globalnav-goto' target='_blank' rel='noopener noreferrer'><span style='color: #2570c4'>(Miroir Google Drive)</span></a>",
      "install-note-title": "<u>Note</u>",
      "install-note": "macOS peut refuser l’autorisation de télécharger la mise à jour",
      "install-command-text": "Exécutez cette commande dans le Terminal pour fix:",
      "install-copy": "Copier",
      "install-copied": "✅ Commande copiée !",

      // --- LINUX ---
      "linux-title": "Linux",
      "linux-download": "Télécharger <a href='https://github.com/Kenmak77/PplusFRLinux/blob/main/P%2BFR_AutoUpdate.sh' target='_blank' rel='noopener noreferrer'><span style='color: #2570c4'> P+FR_AutoUpdate.sh</span></a> (Debian, Ubuntu, Mint, Arch)",
      "linux-launch": "Une fois installé, lancez avec P+FR.Desktop pour garder la version à jour",
      "linux-location": "P+FR.Desktop se trouve ici :",
      "linux-copy": "Copier",
      "linux-copied": "✅ Chemin copié !",

      // --- SETTINGS ---
      "settings-title": "Recommandations graphiques pour Dolphin",
      "settings-text1": "Meilleur rendu : laissez le filtrage anisotrope à 1x !! (sinon les textures PS2 paraissent floues)",
      "settings-text2": "Pour les machines puissantes, il est recommandé d’utiliser les Ubershaders Exclusifs et de compiler les shaders avant le lancement pour une expérience fluide. Autrement, laissez 'Spécialisé' par défaut",

      // --- WII ---
      "wii-title": "Version Wii",
      "wii-text": "<a href='https://github.com/Kenmak77/Pplus-FR-wii' target='_blank' rel='noopener noreferrer'><span style='color: #2570c4'> P+FR Wii </span></a> (SD 4 Go minimum requis)",

      // --- PLAYLIST ---
      "playlist-title": "Playlist"
    }
   };
  
  // ✅ Détection automatique de la langue du navigateur
  const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
  let langElem = document.getElementsByClassName("lang-switch");
  if (langElem.length >= 2) {
    browserLang === 'fr'
      ? langElem[1].classList.add("active")
      : langElem[0].classList.add("active");
  }

  // ✅ Application initiale des traductions selon la langue détectée
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[browserLang][key]) {
      el.innerHTML = translations[browserLang][key]; // ✅ garde les <a>, <span>, <u> etc.
    }
  });

  // 🔄 Fonction de bascule manuelle (boutons EN / FR)
  window.toggleLang = function(lang) {
    // Met à jour les classes actives du switch
    if (langElem.length >= 2) {
      for (let i = 0; i < langElem.length; i++) {
        langElem[i].classList.remove("active");
      }
      lang === 'fr' ? langElem[1].classList.add("active") : langElem[0].classList.add("active");
    }

    // Met à jour les textes traduits
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key]; // ✅ garde liens et HTML internes
      }
    });
  };

  // ✅ Fonction scroll fluide (pour le lien “below / ci-dessous”)
  window.scrollToSection = function(id) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
});
