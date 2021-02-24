const quiz = [
    {
        question: 'Which variable type is INVALID in Javascript?',
        answers: [
            { option: 'int', isCorrect: true },
            { option: 'var', isCorrect: false },
            { option: 'let', isCorrect: false },
            { option: 'const', isCorrect: false },
        ],
    },
    {
        question: 'What does react use to manipulate DOM?',
        answers: [
            { option: 'react DOM', isCorrect: false },
            { option: 'fake DOM', isCorrect: false },
            { option: 'instant DOM', isCorrect: false },
            { option: 'virtual DOM', isCorrect: true },
        ],
    },
    {
        question:
            'console.log("Pizzatown".substring(3, 7)); Will print what to the console?',
        answers: [
            { option: 'zzat', isCorrect: false },
            { option: 'zato', isCorrect: true },
            { option: 'atow', isCorrect: false },
            { option: 'izzato', isCorrect: false },
        ],
    },
    {
        question:
            'Wich ES6 function react uses to display multiple instances of same type (Array/List)?',
        answers: [
            { option: 'array.forEach()', isCorrect: false },
            { option: 'array.filter()', isCorrect: false },
            { option: 'array.map()', isCorrect: true },
            { option: 'array.reduce()', isCorrect: false },
        ],
    },
    {
        question: 'Wich hook react uses to handle data internally?',
        answers: [
            { option: 'useEffect()', isCorrect: false },
            { option: 'useContext()', isCorrect: false },
            { option: 'useReducer()', isCorrect: false },
            { option: 'useState()', isCorrect: true },
        ],
    },
    {
        question: 'What is the output of 0 / 0 in Javascript?',
        answers: [
            { option: '0', isCorrect: false },
            { option: 'It will throw an error', isCorrect: false },
            { option: 'undefined', isCorrect: false },
            { option: 'NaN', isCorrect: true },
        ],
    },
    {
        question: 'What is the purpose of map() in Javascript?',
        answers: [
            {
                option: 'Transform array elements to something else',
                isCorrect: true,
            },
            { option: 'Reduce elements by 1', isCorrect: false },
            { option: 'Convert element types', isCorrect: false },
            { option: 'None of the above', isCorrect: false },
        ],
    },
    {
        question: 'What is react?',
        answers: [
            {
                option: 'Ocean of states',
                isCorrect: false,
            },
            { option: 'Component of trees', isCorrect: false },
            { option: 'Tree of Components', isCorrect: true },
            { option: 'None of the above', isCorrect: false },
        ],
    },
    {
        question: 'How does react share data between components?',
        answers: [
            {
                option: 'states',
                isCorrect: false,
            },
            { option: 'classes', isCorrect: false },
            { option: 'hooks', isCorrect: false },
            { option: 'props', isCorrect: true },
        ],
    },
    {
        question: 'What is a prop?',
        answers: [
            {
                option: 'an array',
                isCorrect: false,
            },
            { option: 'a function', isCorrect: false },
            { option: 'an object', isCorrect: true },
            { option: 'a component', isCorrect: false },
        ],
    },
];

export default quiz;
