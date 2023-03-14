const numbers = [10, 20, 30];

number.reduce((cv, n) => cv + n, 0);

//cv = current value i.ee which is zero now based on the fact that the initial value is 0
//n = value at the current index
//0 = Initial Value
//cv + n = return value, i.e serving as the input to the next iteration
