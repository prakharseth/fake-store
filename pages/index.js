import Hero from "../components/Hero";

const Home = ({ data }) => {
  return <Hero data={data} />;
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return {
    props: { data },
  };
}
