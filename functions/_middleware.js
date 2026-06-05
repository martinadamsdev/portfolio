// Cloudflare Pages middleware: 301 the *.pages.dev hostname to the canonical
// custom domain so Google doesn't index duplicate content.
//
// Runs at the edge on every request. On the custom domain it's a no-op
// (just serves the static asset); only the production pages.dev host is
// redirected. Preview deployments (<hash>.portfolio-9pm.pages.dev) are left
// alone so PR previews keep working.

const CANONICAL_HOST = "martinadams.dev";
const PAGES_HOST = "portfolio-9pm.pages.dev";

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === PAGES_HOST) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
