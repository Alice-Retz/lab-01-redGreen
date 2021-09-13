import capitalizeAndFilter from './capitalize-and-filter.js';

-describe('capitalizeAndFilter', () => {
    it('capitalizes strings and removes those that start with f', () => {
        const animals = ['jerboa', 'finch', 'Frog', 'okapi'];
        const newArr = capitalizeAndFilter(animals);
        expect(newArr).toEqual(['Jerboa', 'Okapi']);
    });
});
