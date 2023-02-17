import type { Result } from "./index.ts";

/**
 * Converts an array of results to a CSV string.
 * @param results The results to convert.
 * @returns The results as a CSV string.
 */
export function toCSV(results: Result[]): string {
	return results
		.map(([from, to, trigger]) => `"${from}","${to}","${trigger}"`)
		.join("\n");
}
