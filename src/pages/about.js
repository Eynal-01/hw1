import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About - My Next.js App</title>
        <meta name="description" content="Learn more about us." />
      </Head>
      <div>
        <h1>About Us</h1>
        <Link href="/">Go back to Main</Link>
      </div>
    </>
  );
}
