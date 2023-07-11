import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout.jsx';
import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleClick}>like{likes}</button>
  )
}

function Outstndrs({ members }) {
  if (members) {
    return (
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    )
  } else {
    <ul>
      <li>No members found</li>
    </ul>
  }
}

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <LikeButton />
      <Outstndrs members={["so", "shu", "miya", "yuta", "iuto", "shopi", ""]} />
    </Layout>
  );
}