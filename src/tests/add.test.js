const add = (a,b) => a + b

test('should add two number', () => {
    const result = add(4,3);
    expect(result).toBe(7);
});