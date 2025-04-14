let start = Date.now();

function updateTimer() {
  const elapsed = Math.floor((Date.now() - start) / 1000);

  let display = "";

  if (elapsed < 60) {
    // show only seconds
    display = `${elapsed}s`;
  } else if (elapsed < 3600) {
    // show only minutes
    const mins = Math.floor(elapsed / 60);
    display = `${mins}m`;
  } else {
    // show only hours
    const hours = Math.floor(elapsed / 3600);
    display = `${hours}h`;
  }

  document.getElementById('timer').textContent = display;
}

setInterval(updateTimer, 1000);
updateTimer();

