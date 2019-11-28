const indexLink = "https://restcountries.eu/rest/v2/all?fields=name;alpha3Code";
//ссылка для вывода списка стран

function renderData(data) {
    const container = $('.container');
    for(let i = 0; i < data.length; i++) {
        let countryDiv = $(document.createElement('div'));
        countryDiv.addClass('country');
        countryDiv.append(data[i].name + ' ');

        let countryLink = $(document.createElement('a'));
        countryLink.attr('href', "country.html?alpha=" + data[i].alpha3Code);
        countryLink.text('Подробнее');

        countryDiv.append(countryLink);

        container.append(countryDiv);
    }
}

function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadIndex() {
    $.ajax({
        url: indexLink,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}

$(document).ready(function() {
    jqueryLoadIndex();        //точка входа в наш скрипт.способо jquery,выполнить что то когда документ готов
});
