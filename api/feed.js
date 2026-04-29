export default async function handler(req, res) {
  try {
    const response = await fetch('https://myanimelist.net/rss/news.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AnimeAlcove/1.0)'
      }
    });
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 's-maxage=300'); // cache for 5 minutes
    res.status(200).send(text);
  } catch(err) {
    res.status(500).json({ error: 'Failed to fetch feed' });
  }
}
