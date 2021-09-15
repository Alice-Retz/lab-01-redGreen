import fetchQuote from './fetch-quote.js';

describe('fetchQuote', () => {
    it('returns a single quote', async () => {
        const quote = await fetchQuote();
        expect(quote).toEqual({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String),
        });
    });
});
