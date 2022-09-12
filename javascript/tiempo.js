const result = document.querySelector('.result'),
    form = document.querySelector('.get-weather'),
    nameCity = document.querySelector('#city'),
    nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === '') {
        showError('Ambos campos son obligatorios');
        return;
    }

    callAPI(nameCity.value, nameCountry.value);

})

showError = (message) => {
    console.log(message);
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = message;

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 1500);
}

showWeather = data => {
    const {
        name,
        main: {
            temp,
            temp_min,
            temp_max
        },
        weather: [arr]
    } = data; //desestructuración

    const degrees = centigrade(temp);
    const maxDegrees = centigrade(temp_max);
    const minDegrees = centigrade(temp_min);


    const content = document.createElement('div');
    content.innerHTML =
        `<h5>Clima en ${name}</h5>
    <img src="http://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
    <h2>${degrees}°C</h2>
    <p>Max: ${maxDegrees}°C</p>
    <p>Min: ${minDegrees}°C</p>`;

    result.appendChild(content);
}

callAPI = (city, country) => {
    const apiId = 'a92ec28bad37ea09d1d7811b31ec9f6e',
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country},{country code}&appid=${apiId}`;

    fetch(url).then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod == '404') {
                showError('Ciudad no encontrada');
            } else {
                clearHTML();
                showWeather(dataJSON);
            }
            console.log(dataJSON);
        })
        .catch(error => {
            console.log(error);
        })
}

centigrade = temp => {
    return parseInt(temp - 273.15);
}

clearHTML = () => {
    result.innerHTML = '';
}