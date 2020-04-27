// let blob = new Blob(["Hello, world!"], {type: 'application/pdf;charset=utf-8'});
//
// link.href = URL.createObjectURL(blob);

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let question1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let question2 = prompt('Во сколько обойдется?', '');
appData.expenses['question1'] = question2;

let question3 = prompt('Введите обязательную статью расходов в этом месяце', '');
let question4 = prompt('Во сколько обойдется?', '');
appData.expenses['question3'] = question4;

alert(appData.budget / 30);

console.log('Everything is ok');