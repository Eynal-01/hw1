import Head from 'next/head';
import Link from 'next/link';

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts - My Next.js App</title>
        <meta name="description" content="Get in touch with us." />
      </Head>
      <div>
        <h1>Contacts</h1>
        <Link href="/">Go back to Main</Link>
      </div>
    </>
  );
}
