import * as React from "react";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: any
) {
  const html = renderToString(
    React.createElement(
      React.StrictMode,
      null,
      routerContext.staticHandlerContext?.entry || null
    )
  );

  responseHeaders.set("Content-Type", "text/html; charset=utf-8");

  return new Response(
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Credit Manager</title>
  </head>
  <body>
    <div id="root">${html}</div>
  </body>
</html>`,
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  );
}
