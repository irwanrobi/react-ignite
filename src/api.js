// BASE URL
const base_url = 'https://api.rawg.io/api/';

// GET CURRENT MONTH
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    // console.log(month); //month 5 untuk Mei
    if (month < 10) {
        return `0${month}`; // tambah angka 0
    } else {
        return month;
    }
};

// GET CURRENT DAY
const getCurrentDay = () => {
    const day = new Date().getDate();
    // console.log(month); //month 5 untuk Mei
    if (day < 10) {
        return `0${day}`; // tambah angka 0
    } else {
        return day;
    }
};

// GET CURRENT YEAR/MONTH/DAY
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`; // 1 tahun terakhir yang lalu
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`; // 1 tahun ke depan

// POPULAR GAMES
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`