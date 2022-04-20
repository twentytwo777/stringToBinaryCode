class ConverterBinary {
    toBinary(string) {
        if (typeof string !== 'string') 
            throw new Error('Please enter string!');
        if (string.trim() == '') 
            throw new Error('Please enter text!');

        return string.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
    };

    toString(binary) {
        if (binary.trim() == '')
            throw new Error('Please enter binary code!');

        return binary.split(' ').map(char => String.fromCharCode(parseInt(char, 2))).join('');
    };
};

export default ConverterBinary;