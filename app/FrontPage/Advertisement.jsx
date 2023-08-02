import Link from "next/link";
export default function Advertisements() {
  return (
    <section>
      <p>Advertisement</p>
      <div>
        <div>Let us help you protect and grow your wealth.</div>
        <div>
          As your assets grow, so does the complexity of your financial
          decisions. To stay organized and on track it can help to have a
          partner. Explore our wealth teams to find the right level of support
          for your needs.
        </div>
      </div>
      <div>
        <div>
          <span>US</span>
          <span>Wealth Management</span>
        </div>
        <Link href="/">Contact Us</Link>
      </div>
    </section>
  );
}
