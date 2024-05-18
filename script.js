//countdown for seminar
  const countDownDate = new Date("June 15, 2024 23:59:59").getTime();

  // Update the countdown every 1 second
  const countdownFunction = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown elements
      document.getElementById("days1").innerHTML = Math.floor(days / 10);
      document.getElementById("days2").innerHTML = days % 10;
      document.getElementById("hours1").innerHTML = Math.floor(hours / 10);
      document.getElementById("hours2").innerHTML = hours % 10;
      document.getElementById("minutes1").innerHTML = Math.floor(minutes / 10);
      document.getElementById("minutes2").innerHTML = minutes % 10;
      document.getElementById("seconds1").innerHTML = Math.floor(seconds / 10);
      document.getElementById("seconds2").innerHTML = seconds % 10;

      // If the countdown is over, write some text 
      if (distance < 0) {
          clearInterval(countdownFunction);
          document.getElementById("countdown").innerHTML = "EXPIRED";
      }
  }, 1000);

 //countdown for 1st workshop
    const countDownDateCEH = new Date("July 24, 2024 23:59:59").getTime();

    // Update the countdown every 1 second
    const countdownFunctionCEH = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countDownDateCEH - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown elements
        document.getElementById("daysCEH").innerHTML = Math.floor(days / 10);
        document.getElementById("daysCEH2").innerHTML = days % 10;
        document.getElementById("hoursCEH").innerHTML = Math.floor(hours / 10);
        document.getElementById("hoursCEH2").innerHTML = hours % 10;
        document.getElementById("minutesCEH").innerHTML = Math.floor(minutes / 10);
        document.getElementById("minutesCEH2").innerHTML = minutes % 10;
        document.getElementById("secondsCEH").innerHTML = Math.floor(seconds / 10);
        document.getElementById("secondsCEH2").innerHTML = seconds % 10;

        // If the countdown is over, write some text 
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdownCEH").innerHTML = "EXPIRED";
        }
    }, 1000);

    //countdown for 2nd workshop
      const countDownDateWorkshop2 = new Date("July 30, 2024 23:59:59").getTime();

      // Update the countdown every 1 second
      const countdownFunctionWorkshop2 = setInterval(function() {
          // Get today's date and time
          const now = new Date().getTime();

          // Find the distance between now and the countdown date
          const distance = countDownDateWorkshop2  - now;

          // Time calculations for days, hours, minutes and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Update the countdown elements
          document.getElementById("days-2ndworkshop").innerHTML = Math.floor(days / 10);
          document.getElementById("days-2ndworkshopp").innerHTML = days % 10;
          document.getElementById("hours-2ndworkshop").innerHTML = Math.floor(hours / 10);
          document.getElementById("hours-2ndworkshopp").innerHTML = hours % 10;
          document.getElementById("minutes-2ndworkshop").innerHTML = Math.floor(minutes / 10);
          document.getElementById("minutes-2ndworkshopp").innerHTML = minutes % 10;
          document.getElementById("seconds-2ndworkshop").innerHTML = Math.floor(seconds / 10);
          document.getElementById("seconds-2ndworkshopp").innerHTML = seconds % 10;

          // If the countdown is over, write some text 
          if (distance < 0) {
              clearInterval(countdownFunction);
              document.getElementById("countdownCEH").innerHTML = "EXPIRED";
          }
      }, 1000);

// for event navbar buttons
  function showEvent(eventType) {
    const events = document.querySelectorAll('.event-content');
    events.forEach(event => {
        event.style.display = 'none';
    });

    document.getElementById(eventType).style.display = 'block';

    const buttons = document.querySelectorAll('.event-button');
    buttons.forEach(button => {
        button.classList.remove('event-active');
    });

    document.querySelector(`.event-button[onclick="showEvent('${eventType}')"]`).classList.add('event-active');
}
