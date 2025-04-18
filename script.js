let tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Telegram WebApp
    tg.ready();
    
    const userInfo = document.getElementById('user-info');
    const locationInfo = document.getElementById('location-info');

    // Display user information
    const user = tg.initDataUnsafe.user;
    if (user) {
        const userDetails = [
            `User ID: ${user.id}`,
            `Name: ${user.first_name}${user.last_name ? ' ' + user.last_name : ''}`,
            `Username: ${user.username || 'N/A'}`,
            `Language: ${user.language_code || 'N/A'}`
        ];
        userInfo.innerHTML = userDetails.join('<br>');
    } else {
        userInfo.textContent = 'User data not available';
    }

    // Handle location
    if (tg.isLocationAvailable) {
        tg.requestLocation(function(success) {
            if (success) {
                const location = tg.location;
                const locationDetails = [
                    `Latitude: ${location.latitude}°`,
                    `Longitude: ${location.longitude}°`
                ];
                locationInfo.innerHTML = locationDetails.join('<br>');
            } else {
                locationInfo.textContent = 'Location access denied';
            }
        });
    } else {
        locationInfo.textContent = 'Location is not available';
    }
});