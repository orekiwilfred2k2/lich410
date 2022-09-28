const jobs = ['Vứt rác  ', 'Quét nhà ', 'Bưng nước'];
const members = [['Công', 'Hải'] ,  ['Phú', 'Vũ'], ['Nam','Thịnh']]

console.log(jobs[2].length)
let timeContainer = document.querySelector('#time-container');
let dateContainer = document.querySelector('#date-container');
const content = document.querySelector('#content');    

const addZeroTime = (num) => {
    if (num < 10) return `0${num}`
    else return `${num}`
}

const renderTime = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let today = new Date();
    
    let month = today.getMonth() + 1 ;
    let year = today.getFullYear();
    let date = today.getDate();
    let day = weekday[today.getDay()];
    let current_date = `${day} ${date}/${month}/${year}`;
    
    let hours = addZeroTime(today.getHours());
    let minutes = addZeroTime(today.getMinutes());
    let seconds = addZeroTime(today.getSeconds());
    let current_time = `${hours}:${minutes}:${seconds}`;
    
    timeContainer.innerText = current_time;
    dateContainer.innerText = current_date;
} 
renderTime();
setInterval(renderTime, 1000)


let jobassign = []
function newWeek() {
    let now = new Date('10/3/2022') ;
    var start = new Date(now.getFullYear(), 0, 3);
    var dif = now - start;
    var weekIndex = Math.floor(dif / (1000 * 60 * 60 * 24 * 7));

    const newJob = jobs.map((text, index) => {
        jobassign[index] = members[(weekIndex%3 + index)%3]
        return `${text}: ${members[(weekIndex%3 + index)%3]} `
    })
    console.log(jobassign)
    content.innerHTML = 
        newJob.map(njob => `
            <div class = 'job-container'>
                <p class = 'job-content' >${njob}</p>
                <button class = 'rd-button'>Random</button>        
            </div>`).join('')
}



newWeek();
console.log(jobassign)

document.addEventListener('DOMContentLoaded', (event) => {
    const rdButtons = document.querySelectorAll('.rd-button');
    const modalContainer = document.querySelector('.modal-container')
    const modalWrapper = document.querySelector('.modal-wrapper')
    
    console.log(rdButtons)

    for (var i = 0; i < rdButtons.length; i++){
        const index = i;
        var rdButton = rdButtons[i];
        rdButton.onclick = function(event){
            console.log(index)
            console.log(jobassign[index][Math.floor(Math.random()*2)])
            modalWrapper.classList.add('open')
            
            modalContainer.innerHTML = `
                <h1 class="modal-header">${jobs[index]}</h1>

                <div class = "random-content">
                    <div class="loader loader--style8" title="7">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="41px" height="51px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                            <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                            </rect>
                            <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                            </rect>
                            <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                            </rect>
                        </svg>
                    </div>        
                </div>
            `

            setTimeout(() => {
                modalContainer.innerHTML = `
                    <h1 class="modal-header">${jobs[index]}</h1>
                    <div class = "random-content">
                        <p>${jobassign[index][Math.floor(Math.random()*2)]}</p>
                    </div>
                `
            }, 800)

        }
    }






    const clearModal = document.querySelector('.clear-modal')
    clearModal.onclick = function(event){
        modalWrapper.classList.remove('open')
    }
})





