document.addEventListener('DOMContentLoaded', function () {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const topLeftNav = document.querySelector('.top-left-nav');
  const topRightNav = document.querySelector('.top-right-nav');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      
      // Create mobile menu if it doesn't exist
      let mobileMenu = document.getElementById('mobile-menu');
      if (!mobileMenu) {
        mobileMenu = document.createElement('nav');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'mobile-menu';
        
        // Combine left and right nav links
        const allLinks = document.querySelectorAll('.top-left-nav .nav-link, .top-right-nav .nav-link');
        allLinks.forEach(link => {
          const clone = link.cloneNode(true);
          mobileMenu.appendChild(clone);
        });
        
        document.querySelector('.main-header').parentNode.insertBefore(mobileMenu, document.querySelector('.main-header').nextSibling);
      }
      
      mobileMenu.classList.toggle('active');
      
      // Close menu when link is clicked
      const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('active');
        });
      });
    });
  }

  var tabs = ['description', 'education', 'experience', 'skills', 'achievements'];
  var tabNames = ['Description', 'Education', 'Experience', 'Skills', 'Achievements'];
  var currentTabIndex = 0;
  var dynamicInfo = document.getElementById('dynamic-info');
  var tabNameSpan = document.getElementById('tab-name');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');

  if (!dynamicInfo || !prevBtn || !nextBtn || !tabNameSpan) {
    return;
  }

  function updateContent() {
    var targetId = tabs[currentTabIndex];
    var targetContent = document.getElementById(targetId);
    
    if (targetContent) {
      dynamicInfo.innerHTML = targetContent.innerHTML;
      tabNameSpan.textContent = tabNames[currentTabIndex];
    }
  }

  prevBtn.addEventListener('click', function () {
    currentTabIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
    updateContent();
  });

  nextBtn.addEventListener('click', function () {
    currentTabIndex = (currentTabIndex + 1) % tabs.length;
    updateContent();
  });

  updateContent();
});

// Certificate Modal Logic
function openCertModal(element) {
  var modal = document.getElementById('certModal');
  var modalImg = document.getElementById('img01');
  var captionText = document.getElementById('caption');
  
  // Find the image and title inside the clicked cert-card
  var img = element.querySelector('.cert-img');
  var title = element.querySelector('.cert-title');
  
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = title.innerHTML;
  
  // Add a small anti-right-click listener for safety just in case
  modalImg.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  }, false);
}

function closeCertModal(event) {
  var modal = document.getElementById('certModal');
  // Only close if they click the background, close button, but NOT the image itself
  if (event.target.id === 'certModal' || event.target.className === 'close') {
      modal.style.display = "none";
  }
}

function openSocmedModal(element) {
  var modal = document.getElementById('certModal');
  var modalImg = document.getElementById('img01');
  var captionText = document.getElementById('caption');
  
  var img = element.querySelector('.socmed-img');
  
  modal.style.display = 'block';
  modalImg.src = img.src;
  captionText.innerHTML = ''; // no caption needed for socmed
}

