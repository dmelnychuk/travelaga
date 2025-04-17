let tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Telegram WebApp
    tg.ready();
    
    const locationInfo = document.getElementById('location-info');

    // Check if we can access location manager
    if (tg.platform !== 'unknown') {
        // Get current location from LocationManager
        const currentLocation = tg.LocationManager.current;
        
        if (currentLocation) {
            const locationDetails = [
                `Latitude: ${currentLocation.latitude}°`,
                `Longitude: ${currentLocation.longitude}°`,
                `Altitude: ${currentLocation.altitude !== null ? currentLocation.altitude + 'm' : 'N/A'}`,
                `Course: ${currentLocation.course !== null ? currentLocation.course + '°' : 'N/A'}`,
                `Speed: ${currentLocation.speed !== null ? currentLocation.speed + 'm/s' : 'N/A'}`,
                `Horizontal Accuracy: ${currentLocation.horizontal_accuracy !== null ? currentLocation.horizontal_accuracy + 'm' : 'N/A'}`,
                `Vertical Accuracy: ${currentLocation.vertical_accuracy !== null ? currentLocation.vertical_accuracy + 'm' : 'N/A'}`,
                `Course Accuracy: ${currentLocation.course_accuracy !== null ? currentLocation.course_accuracy + '°' : 'N/A'}`,
                `Speed Accuracy: ${currentLocation.speed_accuracy !== null ? currentLocation.speed_accuracy + 'm/s' : 'N/A'}`
            ];
            
            locationInfo.innerHTML = locationDetails.join('<br>');
        } else {
            locationInfo.textContent = "Location data not available";
        }
    } else {
        locationInfo.textContent = "This must be opened in Telegram";
    }
});