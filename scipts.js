function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Countdown Timer Logic
  function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const progressBar = document.getElementById("progress-bar");
    const now = new Date();
    const currentYear = now.getFullYear();

    // Target: July 11, 11:30 AM (local time)
    const targetDate = new Date(`${currentYear}-12-28T11:30:00`);

    const diff = targetDate - now;

    if (diff <= 0) {
      countdownElement.textContent = "🎉 It's July 11, 11:30 AM!";
      progressBar.style.width = "100%";
      return;
    }

    const totalTime = targetDate - new Date(`${currentYear}-01-01T00:00:00`); // Time since the start of the year
    const elapsedTime = totalTime - diff;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent = `${days} Days left `;
    // countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s` ;  
  


    const progressPercentage = (elapsedTime / totalTime) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }

  // Start and update every second
  updateCountdown();
  setInterval(updateCountdown, 1000);