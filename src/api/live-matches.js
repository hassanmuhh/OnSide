const API_KEY = process.env.REACT_APP_API_LIVE_MATCHES_KEY;

const getWeekMatches = async () => {
  const response = await fetch(`https://apiv3.apifootball.com/?action=get_events&from=2023-09-22&to=2023-09-23&APIkey=${API_KEY}`)
  if (!response.ok) {
    throw new Error('Could not fetching...')
  }
  const data = await response.json()
  console.log(data);
  return data
}

export default getWeekMatches;
