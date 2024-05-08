# Tampermonkey Scripts

A collection of Tampermonkey scripts that I find useful.

## Scripts
- [Go to Jira Ticket](src/goToJira.ts) - Assign a hotkey to open a Jira ticket referenced in a GitHub pull request.

## Building

The scripts are written in TypeScript and need to be compiled into JavaScript in order to be run.

Run `npm run build` to build all scripts. They will be added to the `dist` directory (created after build).

## Using

1. Copy the generated `dist/<script-name.js>` file content into a new [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) script and save it.
2. Configure any constants using the `CONFIG` object in each script.
3. Configure different `@match` rules if necessary.
