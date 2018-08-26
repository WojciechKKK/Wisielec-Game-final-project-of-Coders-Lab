//importuje bazę słów z pliku data.js
import { data }	from "./data";




document.addEventListener('DOMContentLoaded', function(){
	
	//tworzy okno z wyborem rodzaju hasła
	const checkWord = (data) => {
		
		
		const sectionAlert =  document.querySelector('#over');
		const allButton = sectionAlert.querySelectorAll('button');
		
			//przetrzymuje kategorie
			let final = ''
			for(var i = 0; i < allButton.length; i++){
				let el = allButton[i];
			
		// daczego nie dziala dodanie klasy ??????????????????????????	
				//el.classList.add('question');
			
				el.addEventListener('click', function(){
					if(this.getAttribute("data-id") == 1){
						final = 'KOLORY';
						sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
						showWord(data.colors, final);
					}else if(this.getAttribute("data-id") == 2){
						final = 'IMIONA';
						sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
						showWord(data.names, final)
						//newDivWelcome.parentElement.removeChild(newDivWelcome);
						//sectionAlert.classList.add('invisible');
					}else if(this.getAttribute("data-id") == 4){
						final = 'PAŃSTWA';
						sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
						loadCountries();
						//newDivWelcome.parentElement.removeChild(newDivWelcome);
					//	sectionAlert.classList.add('invisible');
					}else if(this.getAttribute("data-id") == 3){
						final = 'MIASTA';
						sectionAlert.style.webkitTransform = "translate(1500px, 0%)";
						showCity(data.cities, final)
						//newDivWelcome.parentElement.removeChild(newDivWelcome);
						//sectionAlert.classList.add('invisible');
					}
				});
			};
		}


	//losuje słowo i wstawia do sekcji FIRST - IMIE I KOLOR
	const showWord = (arrayWords,category) => {
		const arrayLength = arrayWords.length;
		const numberRandom = Math.floor(Math.random() * (arrayLength - 0) + 0);
		//wybieram losowe słowo
		const wordRandom = arrayWords[numberRandom];
		//petla po słowie i wstawiam je do nowych divów 
		console.log(wordRandom)
		const placeForWords = document.querySelector('.textPassword');

		//dodanie info o rodzaju kategorie
		const placeForCat = document.querySelector('.textCat');
		placeForCat.innerText = `${category}`;
		
		for(let i = 0 ; i < wordRandom.length; i++){
			let newDivWithWord = document.createElement('div');
			newDivWithWord.innerText = wordRandom[i].toUpperCase();
			newDivWithWord.classList.add('words')
			placeForWords.appendChild(newDivWithWord);
		};
	}

	
	//pobieram tablice obiektow panstw
	const loadCountries = () => {
	
		let movieUrl = 'https://restcountries.eu/rest/v2/all';
		$.ajax({
			url: movieUrl
		}).done(function (response) {
			// console.log(response[2].name);
			// console.log(response.length)
			 showCountry(response)
		}).fail(function (error) {
			console.log(error);
		})
	
	}


	
	//losuje słowo i wstawia do sekcji FIRST - COUNTRY oraz podpowiedz dla niego
	const showCountry = (arrayCountries) => {
		
		const arrayLength = arrayCountries.length;
		const numberRandom = Math.floor(Math.random() * (arrayLength - 0) + 0);
		//wybieram losowe słowo
		let wordRandom = arrayCountries[numberRandom].name.toUpperCase();
		console.log(wordRandom)
		//warunek dla losowego slowa w ktorym wystepuje znak '('
		if(wordRandom.indexOf('(') > 1){
			const numberPosition = wordRandom.indexOf('(');
			const final = wordRandom.slice(0,numberPosition-1)
			console.log(final);
			wordRandom = final;
		};
			

		//wybieram flage do tego słowa
		const infoRandom = arrayCountries[numberRandom].flag;


		const placeForInfo = document.querySelector('.informations');
		const newButtonInfo = document.createElement('button');
		newButtonInfo.classList.add('prompt');
		newButtonInfo.innerText = 'Możesz skorzystać z podpowiedzi klikając tutaj';
		placeForInfo.appendChild(newButtonInfo);
		newButtonInfo.addEventListener('click', function(){
			this.parentElement.removeChild(this);
			const newImgInfo = document.createElement('img');
			newImgInfo.style.width = '200px';
			newImgInfo.style.height = '100px';
			newImgInfo.setAttribute('src', infoRandom);
			newImgInfo.style.border = '1px solid black';
			placeForInfo.appendChild(newImgInfo);
		
		})

		//petla po słowie i wstawiam je do nowych divów 
		const placeForWords = document.querySelector('.textPassword');

		//dodanie info o rodzaju kategorie
		const placeForCat = document.querySelector('.textCat');
		placeForCat.innerText = 'Państwa';

		//alfabet
		const alphabet = 'aąbcdeęfghijklłmnńoóprsśtuvwyzźż';
		const alphabetBig = alphabet.toUpperCase();
		for(let i = 0 ; i < wordRandom.length; i++){
			let newDivWithWord = document.createElement('div');
	
			//warunek jeśli słowo ma jakieś inne znaki np, spacja, średnik
			if(alphabetBig.search(wordRandom[i]) == -1) {
				if(wordRandom[i] == '' || wordRandom[i] == ' ' ){
				
					newDivWithWord.innerText = '-';
					newDivWithWord.classList.add('words')
					newDivWithWord.classList.add('activeLetter');
					placeForWords.appendChild(newDivWithWord);
				}  
				else {
					newDivWithWord.innerText = wordRandom[i];
					newDivWithWord.classList.add('words')
					newDivWithWord.classList.add('activeLetter');
					placeForWords.appendChild(newDivWithWord);
				}
			} else {
					newDivWithWord.innerText = wordRandom[i].toUpperCase();
					newDivWithWord.classList.add('words')
					placeForWords.appendChild(newDivWithWord);
	
				}
			}

		}
		
	
//losuje słowo i wstawia do sekcji second CITY oraz podpowiedz dla niego
	const showCity = (arrayWords,category) => {

	const arrayLength = arrayWords.length;
	const numberRandom = Math.floor(Math.random() * (arrayLength - 0) + 0);
		//wybieram losowe słowo
	const wordRandom = arrayWords[numberRandom].name;
	console.log(wordRandom)
		//wybieram information do tego słowa
	const infoRandom = arrayWords[numberRandom].image;

	const placeForInfo = document.querySelector('.informations');
	const newButtonInfo = document.createElement('button');
	newButtonInfo.classList.add('prompt');
	newButtonInfo.innerText = '(Możesz skorzystać z podpowiedzi klikając tutaj)';
	placeForInfo.appendChild(newButtonInfo);

	newButtonInfo.addEventListener('click', function(){
		newButtonInfo.innerText = data.cities[numberRandom].info;
		})
	
		//petla po słowie i wstawiam je do nowych divów 
	const placeForWords = document.querySelector('.textPassword');

		//dodanie info o rodzaju kategorie
	const placeForCat = document.querySelector('.textCat');
	placeForCat.innerText = `${category}`;
		
		for(let i = 0 ; i < wordRandom.length; i++){
			let newDivWithWord = document.createElement('div');
			newDivWithWord.innerText = wordRandom[i].toUpperCase();
			newDivWithWord.classList.add('words')
			placeForWords.appendChild(newDivWithWord);
		};
}

//pokazuje alfabet na pulpicie
	const showAlphabet = () => {
		const placeForAlphabet = document.querySelector('.textAlphabet');
		const alphabet = 'aąbcdeęfghijklłmnńoóprsśtuvwyzźż';
		const alphabetLength = alphabet.length;
		//petla po alfabecie i wstawiam nowe divy
		for(let i = 0; i < alphabetLength; i ++){
			const newElwithCharacter = document.createElement('div');
			newElwithCharacter.innerText = alphabet[i].toUpperCase();
			newElwithCharacter.classList.add('alphabet');
			placeForAlphabet.appendChild(newElwithCharacter);
		}
	}
	
	
//edycja image zgodnie ze stanem gry (param - ilość błędu)
const addImage = (nameImage) => {
	const placeImages = document.querySelector('.placeForImages')
	placeImages.setAttribute('src', 'images/'+nameImage+'.jpg')
}



//dodaje bledy lub informacje o stanie  (param  - kolor błędu)
const showInformationGame = (color, error) => {
	const placeError = document.querySelector('.errors');
	placeError.innerText = error;
	placeError.style.color = color;
}


//wstawia obrazek końcowy gry (param- nazwa obrazka który chemy wstawić)
const showImageFinally = (image) => {
	let placeImage  = document.querySelector('.textAlphabet');
	placeImage.innerText = '';
	let newImg = document.createElement('img');
	newImg.setAttribute('src', 'images/'+image);
	newImg.classList.add('pulse');
	placeImage.appendChild(newImg);
	

}


//wstawia tekst 'zagraj jeszcze raz' zamiast alfabeetu pod image z wynikiem
const showNewGame = () => {
	let placeErrors = document.querySelector('.textAlphabet');
	let newDivPlay = document.createElement('div');
	let newBtnPlay = document.createElement('button');
	newBtnPlay.innerText = 'Zagraj jeszcze raz';
	newDivPlay.appendChild(newBtnPlay);
	placeErrors.appendChild(newDivPlay);
	newBtnPlay.classList.add('again');

	newBtnPlay.addEventListener('click', function(){
		location.reload();
	})
}

//porównuje litere z tablica i jeśli litera tam jest to zwraca true / jeśli nie ma to zwraca false/ 
//jesli ilośc pwtórzeń jest wieksza niz jeden to zwieksza countera o jeden wiekszego/jeśli nie to nic z nim nie robi
//funkcja FINALNIE zwraca TABLICE [true/false , counter, tablicaPodJakimiIndeksamiJestLiteraHasla]
let chechArrayWithNumber = (letter,arr,counter) => {
	var final = false;
	let number = 0;
	let arrNumber= [];
	for(let i = 0 ; i < arr.length; i++){
		if(letter == arr[i]){
		//	console.log(arr[i]);
		arrNumber.push(i);
			final = true;
			//return final;
			number++;
		} 
	}
	if(number > 0){
		counter +=1
	} 
	let finalAndCounter = [];
	finalAndCounter.push(final);
	finalAndCounter.push(counter);
	finalAndCounter.push(arrNumber);
	return finalAndCounter
	//finalAndCounter ZWRACA:
	//finalAndCounter[0] = true / false
	//finalAndCounter[1] = counter
	//finalAndCounter[2] = array z indexem liter w zgadnietym haśle
}
	
	
	
	
	//logika GRY
const startGame = () => {
	const allAlphabet = document.querySelectorAll('.alphabet');

	//przechowuje licznik szans
	let counterChance = 9; 

	//pwtla po alfabecie i eventy na click
	for(let i = 0 ; i < allAlphabet.length; i++){
		const element = allAlphabet[i];

		element.addEventListener('click', function(){

			//warunek dodajacy dataset = jesli button go ma -  to nie ma eventu
			if(element.dataset.show == 'press'){
				//console.log('guzik zostal juz naciśnięty - nie ma eventu')
			} else {
				//console.log(dodaj dataset do buttona i event działa);
			element.dataset.show = 'press';

			// self -> button
			let self = this;

			//sprawdzam czy ta literka jest w haśle
			const allWordsPassword = document.querySelectorAll('.words');
				//text z buttona
				let textElement = self.innerText;

				//tworze tablice z hasła
				let allPassword = [];
				for(let j = 0 ; j < allWordsPassword.length; j++){
					allPassword.push(allWordsPassword[j].innerText);
				}
				

				let finalCheck = chechArrayWithNumber(textElement,allPassword,counterChance)
				
				if(finalCheck[0]){
					//jesli w hasle jest button
					self.classList.add('activeLetter');
					showInformationGame('green', `BRAWO - litera '${self.innerText}' znajduje się w haśle, pozostało ${counterChance} prób`);
					//console.log(`pozostało szans: ${counterChance}`);
					
					//sprapwdzam ile jest takich samych liter
					if(finalCheck[2].length > 1){
						finalCheck[2].forEach( el => {
							allWordsPassword[el].classList.add('activeLetter')
						})
					} else {
					allWordsPassword[finalCheck[2]].classList.add('activeLetter')
					}

				} else {
					//jesli niema w haśle buttona
					self.classList.add('inActiveLetter');
					counterChance -= 1;
					showInformationGame('red', `Niestety litery '${self.innerText}' nie ma w haśle, pozostało ${counterChance} prób`);
					//console.log(`pozostało szans: ${counterChance}`);
					
					//aktualizuje image
					addImage(counterChance);
				}

					
				//porównuje wybrane literki do hasła/ przechowuje info czy hasło jest odgadnięte
				let checkLetterWithPass = 'false'
				for(let k = 0 ; k < allWordsPassword.length; k++){
					if(allWordsPassword[k].className == 'words activeLetter'){
						checkLetterWithPass = true;
					} else {
						checkLetterWithPass = false;
						break;
					}
				}
				//console.log(`Hasło odgadnięte: ${checkLetterWithPass}`);


				//warunek dla countera odnośnie ilości szans
				if(counterChance <= 0){
					//console.log('koniec szans');
					showInformationGame('red', `Wykorzystałeś wszystkie szanse, prawidłowe hasło to: ${allPassword.join(' ')}`);
					showImageFinally('game-over1.png');
					showNewGame();

				 } else if(checkLetterWithPass == true){ 
					showInformationGame('white', ' ');
					showImageFinally('winner.jpg');
					showNewGame();
				 }
			} //usuwa event czy ma atrybut press
		}) //event na alfabet
	}//petla alfabetu
} //funckja ogolna logiki






//	------------------------------uruchomienie gry

	//showWord(words); // losuje słowo z tablicy i wstawia do sekcji
	showAlphabet();	//dodaje alfabet do pulpitu
	startGame();	//logika całej gry
	checkWord(data); //ustawia tablice na podstawie wyboru użytkownika
				// zawarte w niej juz jest showWord
	


})





	//sectionAlert.style.height: '50%';
	//sectionAlert.style.webkitTransform = "rotate(360deg)";
	//sectionAlert.style.webkitTransform = "translate(1500px, 0%)";