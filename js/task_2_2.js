var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('alpha');
var countryLink = "https://restcountries.eu/rest/v2/alpha/" + param;


function renderData(data) {
    const container = $('.container');
	let countryDiv = $(document.createElement('div'));
    let country = $(document.createElement('h1'));
    country.addClass('header');
    country.text(data.name);
   
    let imageDiv = $(document.createElement('div'));
    let image = $(document.createElement('img'));
    image.addClass('country_image');
    image.attr('src', data.flag);
    imageDiv.append(image);
    container.append(imageDiv);

    let region = $(document.createElement('p'));
    region.text('Region: ' + data.region);
   
    let subregion = $(document.createElement('p'));
    subregion.text('Subregion: ' + data.subregion);
   
    let capital = $(document.createElement('p'));
    capital.text('Capital: ' + data.capital);
   
    let population = $(document.createElement('p'));
    population.text('Population: ' + data.population);
   
    let area = $(document.createElement('p'));
    area.text('Area: ' + data.area);
   
    let borders = $(document.createElement('p'));
    borders.text('Borders: ');
    for(let i = 0; i < data.borders.length; i++) {
        let border = $(document.createElement('p'))
	    border.text(data.borders[i])
        borders.append(border)
    }
    let current = $(document.createElement('p'));
    let nameCurrent = data.currencies;
    current.text('Current name: '+ nameCurrent[0]['name']);
    current.append(nameCurrent);

    let nativeName = $(document.createElement('p'));
    nativeName.text('NativeName: ' + data.nativeName);
   
    countryDiv.append(country, region, subregion, 
    	capital, population, area, borders, current, nativeName);
    container.append(countryDiv);
};
    
function ParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
};

function AjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
};

function LoadCountry() {
    $.ajax({
        url: countryLink,
        method: 'GET',
        success: ParseData,
        error: AjaxError
    });
}

$(document).ready(function() {
    LoadCountry();        //точка входа в наш скрипт.способ jquery,выполнить что то когда документ готов
});