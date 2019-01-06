export default {
  basic: [
    {
      id: '1',
      name: 'Reverse String',
      directions:
        'Given a string, return a new string with the reversed order of characters',
      examples: [
        "reverse('apple') === elppa",
        "reverse('hello') === olleh",
        "reverse('Greetings!') === !sgniteerG",
      ],
      solutions: [
        'Turn into array, reverse it and turn into string',
        'Create empty string and insert each character of str to the start of that string',
        'Turn into array and use reduce',
      ],
      editorPlaceholder: 'function reverse(str) {\n\t\n}',
      code:
        "function reverse(str) { return str.split('').reverse().join(''); } reverse('abcd')",
      tests: [
        {
          test: "reverse('apple')",
          expectedResult: 'elppa',
        },
        {
          test: "reverse('hello')",
          expectedResult: 'olleh',
        },
        {
          test: "reverse('Greetings!')",
          expectedResult: '!sgniteerG',
        },
      ],
    },
    {
      id: '2',
      name: 'Add',
      directions: 'Return the sum of two numbers',
      examples: ['add(2, 3) === 5', 'add(3, 6) === 9', 'add(11, 2) === 13'],
      solutions: ['Add the first argument to the second argument'],
      editorPlaceholder: 'function add(a, b) {\n\t\n}',
      code: 'function add(a, b) { return a + b; } add(2, 3)',
      tests: [
        {
          test: 'add(2, 3)',
          expectedResult: 5,
        },
        {
          test: 'add(3, 6)',
          expectedResult: 9,
        },
        {
          test: 'add(11, 2)',
          expectedResult: 13,
        },
      ],
    },
    {
      id: '3',
      name: 'Subtract',
      directions: 'Return the subtraction of two numbers',
      examples: [
        'subtract(3, 1) === 2',
        'subtract(3, 6) === -3',
        'subtract(11, 2) === 9',
      ],
      solutions: ['Subtract the first argument to the second argument'],
      editorPlaceholder: 'function subtract(a, b) {\n\t\n}',
      code: 'function subtract(a, b) { return a - b; } subtract(3, 2)',
      tests: [
        {
          test: 'subtract(3, 1)',
          expectedResult: 2,
        },
        {
          test: 'subtract(3, 6)',
          expectedResult: -3,
        },
        {
          test: 'subtract(11, 2)',
          expectedResult: 9,
        },
      ],
    },
  ],
}
