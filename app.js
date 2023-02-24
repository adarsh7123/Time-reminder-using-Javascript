const endDate = "10 February 2023 07:00:00 AM"

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const start = new Date()
    const diff = (end - start) / 1000;

    if (diff < 0) return;

    //convert into days;
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600) % 24;
    input[2].value = Math.floor(diff / 60) % 60;
    input[3].value = Math.floor(diff) % 60;

}

clock()

setInterval(
    () => {
    clock()
},
 1000);