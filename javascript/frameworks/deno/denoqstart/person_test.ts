import { assertEquals } from "$std/assert/mod.ts";
import Person, { sayHi } from "./person.ts";

Deno.test("sayHi function", () => {
    const grace: Person = {
        sName: "Hopper",
        fName: "Grace",
    };
    assertEquals("Hello, Grace!", sayHi(grace));
});
