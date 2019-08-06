/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(1);

document.addEventListener('DOMContentLoaded', function () {

	//tworzy okno z wyborem rodzaju hasła
	var checkWord = function checkWord(data) {

		var sectionAlert = document.querySelector('#over');
		var allButton = sectionAlert.querySelectorAll('button');

		//przetrzymuje kategorie
		var final = '';
		for (var i = 0; i < allButton.length; i++) {
			var el = allButton[i];

			// daczego nie dziala dodanie klasy ??????????????????????????	
			//el.classList.add('question');

			el.addEventListener('click', function () {
				if (this.getAttribute("data-id") == 1) {
					final = 'KOLORY';
					sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
					showWord(data.colors, final);
				} else if (this.getAttribute("data-id") == 2) {
					final = 'IMIONA';
					sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
					showWord(data.names, final);
					//newDivWelcome.parentElement.removeChild(newDivWelcome);
					//sectionAlert.classList.add('invisible');
				} else if (this.getAttribute("data-id") == 4) {
					final = 'PAŃSTWA';
					sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
					loadCountries();
					//newDivWelcome.parentElement.removeChild(newDivWelcome);
					//	sectionAlert.classList.add('invisible');
				} else if (this.getAttribute("data-id") == 3) {
					final = 'MIASTA';
					sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
					showCity(data.cities, final);
					//newDivWelcome.parentElement.removeChild(newDivWelcome);
					//sectionAlert.classList.add('invisible');
				}
			});
		};
	};

	//losuje słowo i wstawia do sekcji FIRST - IMIE I KOLOR
	var showWord = function showWord(arrayWords, category) {
		var arrayLength = arrayWords.length;
		var numberRandom = Math.floor(Math.random() * (arrayLength - 0) + 0);
		//wybieram losowe słowo
		var wordRandom = arrayWords[numberRandom];
		//petla po słowie i wstawiam je do nowych divów 
		console.log(wordRandom);
		var placeForWords = document.querySelector('.textPassword');

		//dodanie info o rodzaju kategorie
		var placeForCat = document.querySelector('.textCat');
		placeForCat.innerText = '' + category;

		for (var i = 0; i < wordRandom.length; i++) {
			var newDivWithWord = document.createElement('div');
			newDivWithWord.innerText = wordRandom[i].toUpperCase();
			newDivWithWord.classList.add('words');
			placeForWords.appendChild(newDivWithWord);
		};
	};

	//pobieram tablice obiektow panstw
	var loadCountries = function loadCountries() {

		var movieUrl = 'https://restcountries.eu/rest/v2/all';
		$.ajax({
			url: movieUrl
		}).done(function (response) {
			// console.log(response[2].name);
			// console.log(response.length)
			showCountry(response);
		}).fail(function (error) {
			console.log(error);
		});
	};

	//losuje słowo i wstawia do sekcji FIRST - COUNTRY oraz podpowiedz dla niego
	var showCountry = function showCountry(arrayCountries) {

		var arrayLength = arrayCountries.length;
		var numberRandom = Math.floor(Math.random() * (arrayLength - 0) + 0);
		//wybieram losowe słowo
		var wordRandom = arrayCountries[numberRandom].name.toUpperCase();
		console.log(wordRandom);
		//warunek dla losowego slowa w ktorym wystepuje znak '('
		if (wordRandom.indexOf('(') > 1) {
			var numberPosition = wordRandom.indexOf('(');
			var final = wordRandom.slice(0, numberPosition - 1);
			console.log(final);
			wordRandom = final;
		};

		//wybieram flage do tego słowa
		var infoRandom = arrayCountries[numberRandom].flag;

		var placeForInfo = document.querySelector('.informations');
		var newButtonInfo = document.createElement('button');
		newButtonInfo.classList.add('prompt');
		newButtonInfo.innerText = 'Możesz skorzystać z podpowiedzi klikając tutaj';
		placeForInfo.appendChild(newButtonInfo);
		newButtonInfo.addEventListener('click', function () {
			this.parentElement.removeChild(this);
			var newImgInfo = document.createElement('img');
			newImgInfo.style.width = '200px';
			newImgInfo.style.height = '100px';
			newImgInfo.setAttribute('src', infoRandom);
			newImgInfo.style.border = '1px solid black';
			placeForInfo.appendChild(newImgInfo);
		});

		//petla po słowie i wstawiam je do nowych divów 
		var placeForWords = document.querySelector('.textPassword');

		//dodanie info o rodzaju kategorie
		var placeForCat = document.querySelector('.textCat');
		placeForCat.innerText = 'Państwa';

		//alfabet
		var alphabet = 'aąbcdeęfghijklłmnńoóprsśtuvwyzźż';
		var alphabetBig = alphabet.toUpperCase();
		for (var i = 0; i < wordRandom.length; i++) {
			var newDivWithWord = document.createElement('div');

			//warunek jeśli słowo ma jakieś inne znaki np, spacja, średnik
			if (alphabetBig.search(wordRandom[i]) == -1) {
				if (wordRandom[i] == '' || wordRandom[i] == ' ') {

					newDivWithWord.innerText = '-';
					newDivWithWord.classList.add('words');
					newDivWithWord.classList.add('activeLetter');
					placeForWords.appendChild(newDivWithWord);
				} else {
					newDivWithWord.innerText = wordRandom[i];
					newDivWithWord.classList.add('words');
					newDivWithWord.classList.add('activeLetter');
					placeForWords.appendChild(newDivWithWord);
				}
			} else {
				newDivWithWord.innerText = wordRandom[i].toUpperCase();
				newDivWithWord.classList.add('words');
				placeForWords.appendChild(newDivWithWord);
			}
		}
	};

	//losuje słowo i wstawia do sekcji second CITY oraz podpowiedz dla niego
	var showCity = function showCity(arrayWords, category) {

		var arrayLength = arrayWords.length;
		var numberRandom = Math.floor(Math.random() * (arrayLength - 0) + 0);
		//wybieram losowe słowo
		var wordRandom = arrayWords[numberRandom].name;
		console.log(wordRandom);
		//wybieram information do tego słowa
		var infoRandom = arrayWords[numberRandom].image;

		var placeForInfo = document.querySelector('.informations');
		var newButtonInfo = document.createElement('button');
		newButtonInfo.classList.add('prompt');
		newButtonInfo.innerText = '(Możesz skorzystać z podpowiedzi klikając tutaj)';
		placeForInfo.appendChild(newButtonInfo);

		newButtonInfo.addEventListener('click', function () {
			newButtonInfo.innerText = _data.data.cities[numberRandom].info;
		});

		//petla po słowie i wstawiam je do nowych divów 
		var placeForWords = document.querySelector('.textPassword');

		//dodanie info o rodzaju kategorie
		var placeForCat = document.querySelector('.textCat');
		placeForCat.innerText = '' + category;

		for (var i = 0; i < wordRandom.length; i++) {
			var newDivWithWord = document.createElement('div');
			newDivWithWord.innerText = wordRandom[i].toUpperCase();
			newDivWithWord.classList.add('words');
			placeForWords.appendChild(newDivWithWord);
		};
	};

	//pokazuje alfabet na pulpicie
	var showAlphabet = function showAlphabet() {
		var placeForAlphabet = document.querySelector('.textAlphabet');
		var alphabet = 'aąbcdeęfghijklłmnńoóprsśtuvwyzźż';
		var alphabetLength = alphabet.length;
		//petla po alfabecie i wstawiam nowe divy
		for (var i = 0; i < alphabetLength; i++) {
			var newElwithCharacter = document.createElement('div');
			newElwithCharacter.innerText = alphabet[i].toUpperCase();
			newElwithCharacter.classList.add('alphabet');
			placeForAlphabet.appendChild(newElwithCharacter);
		}
	};

	//edycja image zgodnie ze stanem gry (param - ilość błędu)
	var addImage = function addImage(nameImage) {
		var placeImages = document.querySelector('.placeForImages');
		placeImages.setAttribute('src', 'images/' + nameImage + '.jpg');
	};

	//dodaje bledy lub informacje o stanie  (param  - kolor błędu)
	var showInformationGame = function showInformationGame(color, error) {
		var placeError = document.querySelector('.errors');
		placeError.innerText = error;
		placeError.style.color = color;
	};

	//wstawia obrazek końcowy gry (param- nazwa obrazka który chemy wstawić)
	var showImageFinally = function showImageFinally(image) {
		var placeImage = document.querySelector('.textAlphabet');
		placeImage.innerText = '';
		var newImg = document.createElement('img');
		newImg.setAttribute('src', 'images/' + image);
		newImg.classList.add('pulse');
		placeImage.appendChild(newImg);
	};

	//wstawia tekst 'zagraj jeszcze raz' zamiast alfabeetu pod image z wynikiem
	var showNewGame = function showNewGame() {
		var placeErrors = document.querySelector('.textAlphabet');
		var newDivPlay = document.createElement('div');
		var newBtnPlay = document.createElement('button');
		newBtnPlay.innerText = 'Zagraj jeszcze raz';
		newDivPlay.appendChild(newBtnPlay);
		placeErrors.appendChild(newDivPlay);
		newBtnPlay.classList.add('again');

		newBtnPlay.addEventListener('click', function () {
			location.reload();
		});
	};

	//porównuje litere z tablica i jeśli litera tam jest to zwraca true / jeśli nie ma to zwraca false/ 
	//jesli ilośc pwtórzeń jest wieksza niz jeden to zwieksza countera o jeden wiekszego/jeśli nie to nic z nim nie robi
	//funkcja FINALNIE zwraca TABLICE [true/false , counter, tablicaPodJakimiIndeksamiJestLiteraHasla]
	var chechArrayWithNumber = function chechArrayWithNumber(letter, arr, counter) {
		var final = false;
		var number = 0;
		var arrNumber = [];
		for (var i = 0; i < arr.length; i++) {
			if (letter == arr[i]) {
				//	console.log(arr[i]);
				arrNumber.push(i);
				final = true;
				//return final;
				number++;
			}
		}
		if (number > 0) {
			counter += 1;
		}
		var finalAndCounter = [];
		finalAndCounter.push(final);
		finalAndCounter.push(counter);
		finalAndCounter.push(arrNumber);
		return finalAndCounter;
		//finalAndCounter ZWRACA:
		//finalAndCounter[0] = true / false
		//finalAndCounter[1] = counter
		//finalAndCounter[2] = array z indexem liter w zgadnietym haśle
	};

	//logika GRY
	var startGame = function startGame() {
		var allAlphabet = document.querySelectorAll('.alphabet');

		//przechowuje licznik szans
		var counterChance = 9;

		//pwtla po alfabecie i eventy na click

		var _loop = function _loop(i) {
			var element = allAlphabet[i];

			element.addEventListener('click', function () {

				//warunek dodajacy dataset = jesli button go ma -  to nie ma eventu
				if (element.dataset.show == 'press') {
					//console.log('guzik zostal juz naciśnięty - nie ma eventu')
				} else {
					//console.log(dodaj dataset do buttona i event działa);
					element.dataset.show = 'press';

					// self -> button
					var self = this;

					//sprawdzam czy ta literka jest w haśle
					var allWordsPassword = document.querySelectorAll('.words');
					//text z buttona
					var textElement = self.innerText;

					//tworze tablice z hasła
					var allPassword = [];
					for (var j = 0; j < allWordsPassword.length; j++) {
						allPassword.push(allWordsPassword[j].innerText);
					}

					var finalCheck = chechArrayWithNumber(textElement, allPassword, counterChance);

					if (finalCheck[0]) {
						//jesli w hasle jest button
						self.classList.add('activeLetter');
						showInformationGame('green', 'BRAWO - litera \'' + self.innerText + '\' znajduje si\u0119 w ha\u015Ble, pozosta\u0142o ' + counterChance + ' pr\xF3b');
						//console.log(`pozostało szans: ${counterChance}`);

						//sprapwdzam ile jest takich samych liter
						if (finalCheck[2].length > 1) {
							finalCheck[2].forEach(function (el) {
								allWordsPassword[el].classList.add('activeLetter');
							});
						} else {
							allWordsPassword[finalCheck[2]].classList.add('activeLetter');
						}
					} else {
						//jesli niema w haśle buttona
						self.classList.add('inActiveLetter');
						counterChance -= 1;
						showInformationGame('red', 'Niestety litery \'' + self.innerText + '\' nie ma w ha\u015Ble, pozosta\u0142o ' + counterChance + ' pr\xF3b');
						//console.log(`pozostało szans: ${counterChance}`);

						//aktualizuje image
						addImage(counterChance);
					}

					//porównuje wybrane literki do hasła/ przechowuje info czy hasło jest odgadnięte
					var checkLetterWithPass = 'false';
					for (var k = 0; k < allWordsPassword.length; k++) {
						if (allWordsPassword[k].className == 'words activeLetter') {
							checkLetterWithPass = true;
						} else {
							checkLetterWithPass = false;
							break;
						}
					}
					//console.log(`Hasło odgadnięte: ${checkLetterWithPass}`);


					//warunek dla countera odnośnie ilości szans
					if (counterChance <= 0) {
						//console.log('koniec szans');
						showInformationGame('red', 'Wykorzysta\u0142e\u015B wszystkie szanse, prawid\u0142owe has\u0142o to: ' + allPassword.join(' '));
						showImageFinally('game-over1.png');
						showNewGame();
					} else if (checkLetterWithPass == true) {
						showInformationGame('white', ' ');
						showImageFinally('winner.jpg');
						showNewGame();
					}
				} //usuwa event czy ma atrybut press
			}); //event na alfabet
		};

		for (var i = 0; i < allAlphabet.length; i++) {
			_loop(i);
		} //petla alfabetu
	}; //funckja ogolna logiki


	//	------------------------------uruchomienie gry

	//showWord(words); // losuje słowo z tablicy i wstawia do sekcji
	showAlphabet(); //dodaje alfabet do pulpitu
	startGame(); //logika całej gry
	checkWord(_data.data); //ustawia tablice na podstawie wyboru użytkownika
	// zawarte w niej juz jest showWord

});

//sectionAlert.style.height: '50%';
//sectionAlert.style.webkitTransform = "rotate(360deg)";
//sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
//importuje bazę słów z pliku data.js

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

//obiekt data przetrzymuje: imiona, kolory, miasta i podpowiedzi

var data = {
    colors: ['czerwony', 'niebieski', 'żółty', 'zielony', 'pomarańczowy', 'różowy', 'biały', 'fioletowy', 'czarny'],
    names: ['Antoni', 'Jakub', 'Jan', 'Szymon', 'Franciszek', 'Filip', 'Aleksander', 'Mikołaj', 'Wojciech', 'Kacper', 'Adam', 'Michał', 'Marcel', 'Stanisław', 'Wiktor', 'Piotr', 'Igor', 'Leon', 'Nikodem', 'Mateusz', 'Bartosz', 'Maksymilian', 'Miłosz', 'Tymon', 'Oliwier', 'Ignacy', 'Tymoteusz', 'Oskar', 'Dawid', 'Tomasz', 'Dominik', 'Karol', 'Krzysztof', 'Maciej', 'Julian', 'Hubert', 'Gabriel', 'Paweł', 'Patryk', 'Kamil', 'Bartłomiej', 'Sebastian', 'Krystian', 'Adrian', 'Kuba', 'Artur', 'Grzegorz', 'Marcin', 'Błażej', 'Eryk', 'Daniel', 'Łukasz', 'Cezary', 'Tadeusz', 'Damian', 'Tobiasz', 'Witold', 'Rafał', 'Robert', 'Przemysław', 'Radosław', 'Olivier', 'Konrad', 'Emil', 'Mieszko', 'Jerzy', 'Henryk', 'Marek', 'Stefan', 'Kazimierz', 'Józef', 'Gustaw', 'Ryszard', 'Andrzej', 'Arkadiusz', 'Alexander', 'Juliusz'],

    //przetrzymuje nazwe o mieście oraz info o miescie
    cities: [{
        name: 'kraków',
        info: "Miasto pełniło funkcję stolicy Polski w latach 1038-1596"
    }, {
        name: 'warszawa',
        info: "Największe miasto w Polsce pod względem liczby ludności (1 764 615 mieszkańców, stan na 31 grudnia 2017) i powierzchni (517,24 km²)"
    }, {
        name: 'Łódź',
        info: "Miasto jest jednym z głównych ośrodków szkolnictwa wyższego w Polsce, gdzie funkcjonuje 27 wyższych uczelni (w tym 7 państwowych), m.in. Państwowa Wyższa Szkoła Filmowa, Telewizyjna i Teatralna"
    }, {
        name: 'wrocław',
        info: "W całych mieście jest ich aż 294 - jednak liczba ta stale rośnie. Na ulicach tego miasta krasnale umieszczane są  od 2005 roku, w ramach ośmieszania systemu komunistycznego. Nowe figurki tworzone są przez znanych artystów z całej Polski."
    }, {
        name: 'poznań',
        info: "Miasto słynie z Rogali Świętomarcińskich - w ciągu roku sprzedaje sie ich nawey 2,5 miliona sztuk"
    }, {
        name: 'gdańsk',
        info: "Główne zabytki miasta to: 'Złota Brama', 'Fontanna Neptuna', 'Wielka Zbrojownia', 'Długi Targ'"
    }, {
        name: 'szczecin',
        info: "Jest najbardziej oddalonym od Warszawy miastem wojewódzkim w Polsce."
    }, {
        name: 'bydgoszcz',
        info: "Należy do miast o największej liczbie i powierzchni parków w Polsce (posiada ich 874 ha, zajmując drugie miejsce po Warszawie)."
    }, {
        name: 'lublin',
        info: "w mieście działa jedyne w Polsce Specjalistyczne Laboratorium Badania Zabawek"
    }, {
        name: 'białystok',
        info: "Miasto ma nietypowy w kształcie trójkątny rynek"
    }]
};

exports.data = data;

/***/ })
/******/ ]);