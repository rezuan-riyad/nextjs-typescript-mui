import * as React from 'react';
import type { NextPage } from 'next';
import { Toolbar, Container } from '@mui/material';
import Head from 'next/head';
import Navbar from '../src/components/Nav/Navbar';
import SearchBox from '../src/components/SearchBox';
import QueryDisplay from '../src/components/QueryDisplay';
import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [query, setQuery] = React.useState<string>("")
  const [queryResults, setQueryResults] = React.useState<Object[] | undefined>()


  React.useEffect(() => {
    console.log("DATA", data)
  }, [])

  return (
    <div>
      <Head>

      </Head>
      <Navbar />
      <Link href="/about">About</Link>
      <Container>
        <h1>Rezuan Ahmed Riyad</h1>
        {/* <SearchBox
          query={query}
          setQuery={setQuery}
          setQueryResults={setQueryResults} />
        <QueryDisplay results={queryResults} data={data} /> */}
      </Container>
    </div>
  );
};

export async function getServerSideProps() {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.ceil(Math.random() * 10)}`);
  // const data = await response.json();
  // return {
  //   props: { data }
  // }
  return {
    props: { data: "Props Data" }
  }
}

export default Home;
