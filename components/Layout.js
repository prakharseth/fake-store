import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Fake-Store</title>
        <link rel='icon' href='/f.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Courgette&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      {children}
    </div>
  );
}
