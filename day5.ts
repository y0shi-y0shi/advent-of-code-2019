const op3 = (input: number[], index: number) => {
    input[input[index + 3]] = input[input[index + 1]] + input[input[index + 2]];
};

const op4 = (input: number[], index: number) => {
    input[input[index + 3]] = input[input[index + 1]] * input[input[index + 2]];
};