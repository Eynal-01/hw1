import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - My Next.js App</title>
        <meta name="description" content="Read our latest blog posts." />
      </Head>
      <div>
        <h1>Blog</h1>
        <Link href="/">Go back to Main</Link>
      </div>
    </>
  );
}
