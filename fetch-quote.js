import fetch from 'node-fetch';

const fetchQuote = async () => {
    const response = await fetch(
        'https://futuramaapi.herokuapp.com/api/quotes'
    );
    const data = await response.json();
    const quote = {
        name: data[0].character,
        text: data[0].quote,
        image: data[0].image,
    };
    return quote;
};

export default fetchQuote;
