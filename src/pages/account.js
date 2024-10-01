import Head from 'next/head';
import Link from 'next/link';

export default function Account() {
  return (
    <>
      <Head>
        <title>Account - My Next.js App</title>
        <meta name="description" content="Manage your account." />
      </Head>
      <div>
        <h1>Account</h1>
        <Link href="/">Go back to Main</Link>
      </div>
    </>
  );
}
