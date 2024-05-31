const songInput = document.getElementById('song-input');
const search = document.getElementById('search'); 
const result = document.getElementById('result')

// Api URL 
const apiURL = 'https://api.lyrics.ovh';

// Buscar

songInput.addEventListener('submit', e => {
	e.preventDefault();
	searchValue = search.value.trim();

	if(!searchValue){
		alert('No busco nada');
	}
	else {
		searchSong(searchValue)
	}
});

//Buscar la cancion

async function searchSong(searchValue) {
	const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
	const data = await searchResult.json();
	console.log(data);
	showData(data);
}
// Display 
function showData(data) {
	result.innerHTML = `
		<ul class = "song-list">
			${data.data.map(song => `
				<li>
					<div>
						<img src = "${song.artist.picture}" alt = "Arstista"/>
						<strong>${song.artist.name}</strong>
						<strong>- ${song.title}</strong>
					</div>
					<span data-artist="${song.artist.name}" data-songtitle="${song.title}">Conseguir Letra</span>
				</li>
			`)
			.join(``)}
		</ul>
	`;
}
// eventi liste para crearl la 

result.addEventListener('click', e => {
	const clickElement = e.target;
	

	if(clickElement.tagName === 'SPAN'){
		const artist = clickElement.getAttribute('data-artist');
		const songTitle = clickElement.getAttribute('data-songtitle')
		getLyrics(artist, songTitle)
	}
});

//getLyrics 

async function getLyrics(artist, songTitle) {
	const res = await fetch (`${apiURL}/v1/${artist}/${songTitle}`);

	const data = await res.json();

	const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

	result.innerHTML = `
		<div class = "full-lyrics">
			<h2>${artist} - ${songTitle}</h2>
			<p>${lyrics}</p>
		</div>
	
	`;
}
