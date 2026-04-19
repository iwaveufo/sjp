import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SJP Schilderwerken — Jonathan Prawinchaikul" },
      {
        name: "description",
        content:
          "SJP Schilderwerken — vakkundig schilderwerk binnen en buiten door Jonathan Prawinchaikul. Vraag een vrijblijvende offerte aan.",
      },
      { name: "author", content: "SJP Schilderwerken" },
      { property: "og:title", content: "SJP Schilderwerken — Jonathan Prawinchaikul" },
      {
        property: "og:description",
        content: "Vakkundig schilderwerk binnen en buiten. Vraag een vrijblijvende offerte aan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "SJP Schilderwerken — Jonathan Prawinchaikul" },
      { name: "description", content: "A painter's website showcasing artwork and services with a bold, artistic design." },
      { property: "og:description", content: "A painter's website showcasing artwork and services with a bold, artistic design." },
      { name: "twitter:description", content: "A painter's website showcasing artwork and services with a bold, artistic design." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/414cf3ac-b05a-4550-866a-a15c47d996af/id-preview-ceb71899--63856942-d711-4fe8-b35e-25b81545a562.lovable.app-1776626501738.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/414cf3ac-b05a-4550-866a-a15c47d996af/id-preview-ceb71899--63856942-d711-4fe8-b35e-25b81545a562.lovable.app-1776626501738.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
