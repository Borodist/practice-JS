 'use strict';
let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appdata = {
                budget: money,
                timeData: time,
                expence: {},
                optionalExpenses: {},
                income: [],
                saving: false
            };

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != "" && a.length < 50) {
            console.log('done');
            appdata.expence[a] = b;
           } 
      else {
          console.log('fuck')
        }
       
};


appdata.moneyPerDay = appdata.budget /30;

alert(" Ежедневный бюджет: " + appdata.moneyPerDay);

if (appdata.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appdata.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}


