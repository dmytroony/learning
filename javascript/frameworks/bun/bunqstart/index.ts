// console.log("Hello via Bun!");

import figlet from "figlet";

const server = Bun.serve({
    port: 5000,
    fetch(req) {
        const body = figlet.textSync("Hello, Bun!");
        // console.log(Bun.version);
        return new Response(body);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);