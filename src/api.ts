import type { Result } from "./index.ts";

/**
 * Get the chain for a given evolution.
 * @param chain The URL of the chain to get.
 * @returns The chain for the given evolution.
 */
export function getEvolutionChain(): Promise<EvolutionChains>;
export function getEvolutionChain(chain: string): Promise<EvolutionChain>;
export function getEvolutionChain(chain = "https://pokeapi.co/api/v2/evolution-chain/?limit=100000&offset=0"): Promise<EvolutionChains> | Promise<EvolutionChain> {
	return fetch(chain)
		.then(response => response.json());
}

/**
 * Get all the nested evolutions for a given chain.
 * @param chain The chain to get evolutions for.
 * @returns All the evolutions for the given chain.
 */
export function getEvolutions(chain: Chain): Result[] {
	return [
		...chain
			.evolves_to
			.map(({ species, evolution_details }) => [chain.species.name, species.name, evolution_details?.[0]?.trigger.name ?? ""]),
		...chain.evolves_to.map(getEvolutions).flat(),
	] as [string, string, string][];
}

// Types for the data returned by the API

export interface EvolutionChains {
	count: number;
	next: string | null;
	previous: string | null;
	results: { url: string; }[];
}

export interface EvolutionChain {
	baby_trigger_item: unknown | null;
	chain: Chain;
	id: number;
}

export interface Chain {
	evolution_details: EvolutionDetail[];
	evolves_to: Chain[];
	is_baby: boolean;
	species: Species;
}

export interface EvolutionDetail {
	gender: unknown | null;
	held_item: unknown | null;
	item: unknown | null;
	known_move: unknown | null;
	known_move_type: unknown | null;
	location: unknown | null;
	min_affection: unknown | null;
	min_beauty: unknown | null;
	min_happiness: unknown | null;
	min_level: number;
	needs_overworld_rain: boolean;
	party_species: unknown | null;
	party_type: unknown | null;
	relative_physical_stats: unknown | null;
	time_of_day: string;
	trade_species: unknown | null;
	trigger: Trigger;
	turn_upside_down: boolean;
}

export interface Trigger {
	name: string;
	url: string;
}

export interface Species {
	name: string;
	url: string;
}
