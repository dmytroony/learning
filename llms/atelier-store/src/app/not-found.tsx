import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-narrow section-y flex flex-1 flex-col items-center justify-center gap-6 text-center">
      <p className="eyebrow text-muted">Error 404</p>
      <h1 className="heading-1">This page has moved on</h1>
      <p className="lead max-w-md">
        The piece or page you were looking for is no longer here. It may have sold out or the link may be out of date.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/new" className="btn btn-secondary">
          New arrivals
        </Link>
      </div>
    </main>
  );
}
