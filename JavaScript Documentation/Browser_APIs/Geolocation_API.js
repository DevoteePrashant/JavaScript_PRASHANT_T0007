


  // console.log(navigator.geolocation);
  document.querySelector('.geo-btn').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        // document.getElementById("geo-btn").innerHTML = error.message
        const { latitude, longitude } = position.coords;
        showDetails.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    
      },
      error => {
        console.log(error);
        document.getElementById("showDetails").innerHTML = error.message
      }
    );
  }
});
