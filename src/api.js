///Base URL
const base_url = `https://api.rawg.io/api/`;
//KEY
const KEY = 'f00696fa296a47569afd9413ce7e5724';

///DATE
//getCurremtMonth
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month
    }
}

//getCurrentDay
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else{
        return day
    }
}

///Current YEAR/MONTH/DAY
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
//currentYear
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

///LAST YEAR AND NEXT YEAR ON THIS DAY
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

///POPULAR GAMES
const page_size = 'page_size=12'
const popular_games = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-rating&${page_size}`;
const upcoming_games = `games?key=${KEY}&dates=${currentDate},${nextYear}&ordering=-added&${page_size}`;
const new_games = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-released&${page_size}`

////FINAL BASIC FETCHING URL\\\\
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${KEY}`;

//GAME SCREENSHOTS
export const gameScreenshotsURL = (game_slug) => `${base_url}games/${game_slug}/screenshots?key=${KEY}`;

//SEARCHED GAME
export const searchGameURL = (game_name) => `${base_url}games?key=${KEY}&search=${game_name}&page_size=8`;













