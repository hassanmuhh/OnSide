const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", process.env.REACT_APP_API_RAPID_KEY);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
const fetchLeaguesFromLocal = async () => {
  const response = await fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  const result = await response.json()

  console.log(result);
}

export default fetchLeaguesFromLocal;