import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          ProfitSidekick
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/calculators">Calculators</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
