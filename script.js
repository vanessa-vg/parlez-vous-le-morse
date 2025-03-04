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