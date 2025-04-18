let tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Telegram WebApp
    tg.ready();
    
    tg.MainButton.setText('Close');
    tg.MainButton.show();
    

    tg.MainButton.onClick(function() {
        tg.close();
    });

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
                // Location available
                const location = tg.location;
                locationInfo.innerHTML = `Latitude: ${location.latitude}°<br>Longitude: ${location.longitude}°`;
            } else {
                // User denied permission
                locationInfo.innerHTML = 'Please enable location access to use this feature.<br>' +
                                       'You can enable it in your device settings.';
            }
        });
    } else {
        // Location not supported
        locationInfo.innerHTML = 'Location services are not available.<br>' +
                               'Please make sure you\'re using a supported device and Telegram version.';
    }
});