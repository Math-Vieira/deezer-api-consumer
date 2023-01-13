const baseChartUrl = "https://api.deezer.com/chart"; //https://api.deezer.com/chart/0/tracks?limit=10&index=1
const baseSearchUrl = "https://api.deezer.com/search?q="; //https://api.deezer.com/search?q=eminem&type=track&limit=1&index=2

module.exports.createChartUrl = ({ type, limit, index }) => {
    return `${baseChartUrl}/0/${type}?limit=${limit}&index=${index}`;
};

module.exports.createSearchUrl = ({ type, limit, index, query }) => {
    return `${baseSearchUrl}${query}&type=${type}&limit=${limit}&index=${index}`;
};
//https://api.deezer.com/search?q=eminem&type=track&limit=1&index=2
