import Link from "next/link";
export default function MobileNav() {
  return (
    <nav className="flex justify-around">
      <Link className="" href="/">
        Menu
      </Link>
      <Link href="/">Lake Monroe Dispatch</Link>
      <div className="flex justify-around gap-2">
        <Link href="/">Dark Mode</Link>
      </div>
    </nav>
  );
}
