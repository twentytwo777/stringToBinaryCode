/* Import Converter */
import ConverterBinary from './modules/toBinaryCode.js';

/* Create new class of Converter */
const converterBinary = new ConverterBinary();

const input = document.querySelector('input'),
    encodeResult = document.querySelector('.encode'),
    decodeResult = document.querySelector('.decode'),
    button = document.querySelector('button');

button.onclick = _ => {
    try {
        encodeResult.textContent = converterBinary.toBinary(input.value);
        decodeResult.textContent = converterBinary.toString(encodeResult.textContent);
    } catch (error) {
        [encodeResult, decodeResult].map(el => el.innerHTML = error.message);
    };
};