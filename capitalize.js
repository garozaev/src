const capitalize = (text) => {
	if (text === '') {
		return '';
	}
	const [firstChar, ...restChars] = text;
	return `${firstChar.toUpperCase()}${restChars.join('')}`;
};
// console.log(capitalize('hello!'));
// console.log(capitalize(''));

export default capitalize;