
//obiekt data przetrzymuje: imiona, kolory, miasta i podpowiedzi

var data = {
    colors: ['czerwony', 'niebieski', 'żółty', 'zielony', 'pomarańczowy', 'różowy', 'biały', 'fioletowy', 'czarny'],
    names: ['Antoni', 'Jakub', 'Jan', 'Szymon', 'Franciszek', 'Filip', 'Aleksander', 'Mikołaj', 'Wojciech', 'Kacper', 'Adam', 'Michał', 'Marcel', 'Stanisław', 'Wiktor', 'Piotr', 'Igor', 'Leon', 'Nikodem', 'Mateusz', 'Bartosz', 'Maksymilian', 'Miłosz', 'Tymon', 'Oliwier', 'Ignacy', 'Tymoteusz', 'Oskar', 'Dawid', 'Tomasz', 'Dominik', 'Karol', 'Krzysztof', 'Maciej', 'Julian', 'Hubert', 'Gabriel', 'Paweł', 'Patryk', 'Kamil', 'Bartłomiej', 'Sebastian', 'Krystian', 'Adrian', 'Kuba', 'Artur', 'Grzegorz', 'Marcin', 'Błażej', 'Eryk', 'Daniel', 'Łukasz', 'Cezary', 'Tadeusz', 'Damian', 'Tobiasz', 'Witold', 'Rafał', 'Robert', 'Przemysław', 'Radosław', 'Olivier', 'Konrad', 'Emil', 'Mieszko', 'Jerzy', 'Henryk', 'Marek', 'Stefan', 'Kazimierz', 'Józef', 'Gustaw', 'Ryszard', 'Andrzej', 'Arkadiusz', 'Alexander', 'Juliusz'],
   
    //przetrzymuje nazwe o mieście oraz info o miescie
    cities: [
        {
            name: 'kraków',
            info: "Miasto pełniło funkcję stolicy Polski w latach 1038-1596"	
        },
        {
            name: 'warszawa',
            info: "Największe miasto w Polsce pod względem liczby ludności (1 764 615 mieszkańców, stan na 31 grudnia 2017) i powierzchni (517,24 km²)"	
        },
        {
            name: 'Łódź',
            info: "Miasto jest jednym z głównych ośrodków szkolnictwa wyższego w Polsce, gdzie funkcjonuje 27 wyższych uczelni (w tym 7 państwowych), m.in. Państwowa Wyższa Szkoła Filmowa, Telewizyjna i Teatralna"	   
        },
        {
            name: 'wrocław',
            info: "W całych mieście jest ich aż 294 - jednak liczba ta stale rośnie. Na ulicach tego miasta krasnale umieszczane są  od 2005 roku, w ramach ośmieszania systemu komunistycznego. Nowe figurki tworzone są przez znanych artystów z całej Polski."	   
        },
        {
            name: 'poznań',
            info: "Miasto słynie z Rogali Świętomarcińskich - w ciągu roku sprzedaje sie ich nawey 2,5 miliona sztuk"	    
        },
        {
            name: 'gdańsk',
            info: "Główne zabytki miasta to: 'Złota Brama', 'Fontanna Neptuna', 'Wielka Zbrojownia', 'Długi Targ'"	    
        },
        {
            name: 'szczecin',
            info: "Jest najbardziej oddalonym od Warszawy miastem wojewódzkim w Polsce."	    
        },
        {
            name: 'bydgoszcz',
            info: "Należy do miast o największej liczbie i powierzchni parków w Polsce (posiada ich 874 ha, zajmując drugie miejsce po Warszawie)."	    
        },
        {
            name: 'lublin',
            info: "w mieście działa jedyne w Polsce Specjalistyczne Laboratorium Badania Zabawek"	    
        },
        {
            name: 'białystok',
            info: "Miasto ma nietypowy w kształcie trójkątny rynek"
        }
    ],
}


export { data };