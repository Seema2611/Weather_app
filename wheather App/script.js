

document.getElementById('searchbtn').addEventListener('click', function() {
    const apiKey = '5caf3e69a73b278975b0a654389f2d10'; 
    const city = document.getElementById('value.input').value;
    
    if(city === '') {
        alert('Please enter a city name');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found');
        }
        return response.json();
    })
    .then(data => {
        // Update the UI with the fetched data
        document.querySelector('.tempreture').innerHTML = `${Math.round(data.main.temp)}<sup>°C</sup>`;
        document.querySelector('.description').textContent = data.weather[0].description;
        document.querySelector('.city').textContent = data.name;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        
        //  Change the weather image based on the weather condition
        const weatherImage = document.querySelector('.weather-img');
        
            
            const weatherCondition = data.weather[0].main.toLowerCase();

                if(weatherCondition.includes('cloud')) {
                    weatherImage.src = "cloud sunny.png";
                } else if(weatherCondition.includes('rain')) {
                    weatherImage.src = "rainy.jpg";
                } else if(weatherCondition.includes('clear')) {
                    weatherImage.src = "smili sun.png";
                } 

        }
        
        
       
    )
    .catch(error => {
        alert(error.message);
    });
});
