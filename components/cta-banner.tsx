export function CtaBanner({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <section className="cta-banner" aria-label="Related tool">
      <h2>{title}</h2>
      <p>{description}</p>
      <a className="button" href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    </section>
  );
}
