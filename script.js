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
