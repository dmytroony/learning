Deno.serve(
    { port: 6060 },
    (_request: Request) => {
        return new Response("Hello, DENO!");
    }
);