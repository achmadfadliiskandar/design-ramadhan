// alert("assalamualaikum teman2")
// $("#hasil").load("https://api.pray.zone/v2/times/today.json?city=jakarta");

// ambil tanggal hari ini
const getDate = new Date();
const getYear = getDate.getFullYear();
const getMonth = getDate.getMonth() + 1;
const getDay = getDate.getDate();
// console.log(getDay)

function bulan(){
    if (getMonth < 10) {
        bulan = `0${getMonth}`;
    }else{
        bulan = getMonth
    }
    return bulan
}

function hari(){
    if (getDay < 10) {
        hari = `0${getDay}`;
    } else {
        hari = getDay;
    }
    return hari;
}

// console.log(hari())

const tanggal = `${getYear}-${bulan()}-${hari()}`;
// console.log(tanggal)

// using fetch
function getjadwalsholat(){
    fetch("https://api.banghasan.com/sholat/format/json/jadwal/kota/703/tanggal/" + tanggal)
    .then(response => response.json())
    .then(data => {
        const jadwal = data.jadwal.data;
        document.querySelector('.subuh').textContent = jadwal.subuh;
        document.querySelector('.dzuhur').textContent = jadwal.dzuhur;
        document.querySelector('.ashar').textContent = jadwal.ashar;
        document.querySelector('.maghrib').textContent = jadwal.maghrib;
        document.querySelector('.isya').textContent = jadwal.isya;
        document.querySelector('.tanggal').textContent = jadwal.tanggal;
        // console.log(jadwal)
    })
}
getjadwalsholat()
