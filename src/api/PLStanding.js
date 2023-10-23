
const API_KEY = process.env.REACT_APP_API_STANDING_KEY;

const getPLStanding = async () => {
  const response = await fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=${API_KEY}`)
  if (!response.ok) {
    throw new Error('Could not fetching...')
  }
  const data = await response.json()
  console.log(data);
  return data
}

export default getPLStanding;