function getLatinCharacterList(text) {
   return text.split('');
}

console.log(getLatinCharacterList('Hello, world'));

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
};

function translateLatinCharacter(character) {
   return latinToMorse[character];
}

    console.log(translateLatinCharacter('A'));
    console.log((translateLatinCharacter('T')));
    console.log((translateLatinCharacter('X')));


function encode (text) {
     return getLatinCharacterList(text)
     .map(character => translateLatinCharacter(character.toUpperCase()))
    .join(' ');
}   

console.log(encode('HELLOOO'));
console.log(encode('VACANCES'));
console.log(encode(`Le code c'est génial !`));

// Version plus détaillée de function encode:

// function encode(text) {
//     const morseCodeArray = [];

// Découper le texte, et pour chaque caractère, on le transforme en majuscule et en morse
//     for (let i = 0; i < text.length; i++) {  // Parcourir chaque caractère du tableau
//         const character2 = text[i].toUpperCase();  // Convertir en majuscule
//         const morse = translateLatinCharacter(character2) || '?';  // Trouver le morse ou '?' si non trouvé
//         morseCodeArray.push(morse);  // Ajouter le resultat dans le tableau
//     }

//     return morseCodeArray.join(' ');  // Retourner les codes morses séparés par des espaces
// }

// console.log(encode('HELLO'));