# Pokeapi Evolution Chains

Retrieves the evolution chain of a Pokémon.

This is in reference to [the Reddit post](https://www.reddit.com/r/programmingrequests/comments/11498hg/pull_data_from_pokeapi_and_put_it_in_plain_text/) in the [r/programmingrequests](https://www.reddit.com/r/programmingrequests/) subreddit.

## Requirements

-   [Deno](https://deno.land/)

## Usage

```bash
deno run --allow-net --allow-write ./src/index.ts
```

Alternatively, you can use the provided `run` task (requires Deno version 1.20.1 or higher):

```bash
deno task run
```

## Results

The results are stored in CSV format in the `./evolutions.csv` file.

This file can easily be imported into a spreadsheet application like Excel or Google Sheets.
