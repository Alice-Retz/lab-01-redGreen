import copyAndPush from './copy-and-push.js';

describe('copyAndPush', () => {
    it('should add add 4 to the end of the array', () => {
        const numbers = [1, 2, 3];
        const num = copyAndPush(numbers, 4);
        expect(num).toEqual([1, 2, 3, 4]);
    });
    it('should return the original array', () => {
        const numbers = [1, 2, 3];
        const num = copyAndPush(numbers, 7);
        expect(num).toEqual([1, 2, 3, 7]);
        expect(numbers).toEqual([1, 2, 3]);
    });
});
