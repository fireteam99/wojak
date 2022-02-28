import bianance from 'apis/bianance';

export default function Home({ tickerData }) {
  const longest = Math.max(...tickerData.map(data => data?.symbol?.length || 0));
  const shortest = Math.min(...tickerData.map(data => data?.symbol?.length || 0));
  return (
    <div>
      <span>You are probably looking for the <code>/api/wojak</code> endpoint.</span> <br />
      <span>Longest Symbol: {longest}</span> <br />
      <span>Shortest Symbol: {shortest}</span>
    </div>
  );
}

export async function getServerSideProps(context) {
  let tickerData = null;
  try {
    const { data } = await bianance.get("/v3/ticker/24hr");
    tickerData = data || [];
  } catch (err) {
    console.error("Error fetching ticker data on home page.");
    console.error(err);
  } finally {
    return {
      props: { tickerData },
    };
  }
}
