const jobs = ['Vứt rác', 'Quét nhà', 'Bưng nước'];
const members = ['Hải + Công' ,  'Phú + Vũ', 'Nam + Thịnh' ]

let timeContainer = document.querySelector('#time-containner');
let dateContainer = document.querySelector('#date-containner');
const content = document.querySelector('#content');    

const addZeroTime = (num) => {
    if (num < 10) return `0${num}`
    else return `${num}`
}

setInterval(() => {
        let today = new Date();
        
        let month = today.getMonth() + 1 ;
        let year = today.getFullYear();
        let date = today.getDate();
        let current_date = `${date}/${month}/${year}`;

        let hours = addZeroTime(today.getHours());
        let minutes = addZeroTime(today.getMinutes());
        let seconds = addZeroTime(today.getSeconds());
        let current_time = `${hours}:${minutes}:${seconds}`;

        timeContainer.innerText = current_time;
        dateContainer.innerText = current_date;
}, 1000)


function newWeek() {
    let now = new Date('10/25/2022') ;
    console.log(now)
    var start = new Date(now.getFullYear(), 0, 0);
    var dif = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var weekIndex = Math.floor(dif / oneDay / 7)+3;
    const idx = weekIndex % 7;
    const newJob = jobs.map((text, index) => {
        return `${text}: ${members[(weekIndex%3 + index)%3]}`
    })

    content.innerHTML = `
        ${newJob.map(njob => `<p>${njob}</p>`).join('')}
    `
}

setTimeout(newWeek, 1000);