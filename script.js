document.addEventListener('DOMContentLoaded', function () {
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
