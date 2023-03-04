fetch('../../data.json')
    .then((response) => response.json())
    .then((data) => represnt(data));

const getTotalAmounts = (arr) => {
    let total = 0;
    for (const i of arr) {
        total += i;
    }
    return total;
}

const represnt = (data) => {
    let html;
    let total = [];
    const weekDays = document.querySelector('.week-days');
    let totalThisMonth = document.querySelector('.this-month h2');
    data.forEach(element => {
        total.push(element.amount);

        html = `<div class="week-day">
        <div class="chart" style="height:${element.amount}%">
            <div class="amount">$${element.amount}</div>
        </div><!--end chart-->
        <p>${element.day}</p>
    </div><!--end week-day-->`;
        weekDays.innerHTML += html;
    });
    totalThisMonth.innerHTML = getTotalAmounts(total);
}