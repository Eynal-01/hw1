import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Main Page</h1>
      <nav>
        <Link href="/about">About</Link> | 
        <Link href="/contacts">Contacts</Link> | 
        <Link href="/blog">Blog</Link> | 
        <Link href="/account">Account</Link>
      </nav>
    </div>
  );
}
