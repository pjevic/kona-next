/** @format */

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/") {
        await app.render(req, res, "/", query);
      } else if (pathname === "/about") {
        await app.render(req, res, "/about", query);
      } else if (pathname === "/services") {
        await app.render(req, res, "/services", query);
      } else if (pathname === "/partners") {
        await app.render(req, res, "/partners", query);
      } else if (pathname === "/blog") {
        await app.render(req, res, "/blog", query);
      } else if (pathname === "/contact") {
        await app.render(req, res, "/contact", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
