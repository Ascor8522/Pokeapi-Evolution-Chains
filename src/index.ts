import { getEvolutionChain, getEvolutions } from "./api.ts";
import type { Species, Trigger } from "./api.ts";
import { toCSV } from "./csv.ts";

export type Result = [Species["name"], Species["name"], Trigger["name"]];

await getEvolutionChain()
	.then(({ results }) => Promise.all(results.map(({ url }) => getEvolutionChain(url))))
	.then(chains => chains.map(({ chain }) => getEvolutions(chain)).flat())
	.then(result => toCSV([["species", "evolution", "trigger"], ...result]))
	.then(result => Deno.writeTextFile("evolutions.csv", result))
	.catch(console.error);
