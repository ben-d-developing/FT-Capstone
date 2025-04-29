function initMap() {
    const locations = [
      { name: "Micro Center Dallas", lat: 32.9212, lng: -96.7570 },
      { name: "Best Buy Tulsa", lat: 36.1270, lng: -95.9336 }
    ];
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 34.5, lng: -97.0 } // Center between your locations
    });
  
    locations.forEach(loc => {
      const marker = new google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map,
        title: loc.name
      });
  
      const infoWindow = new google.maps.InfoWindow({
        content: `<strong>${loc.name}</strong>`
      });
  
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }