# Contributing

## Development

### Getting started

As initial step, setup development environment consulting [provided
instructions](/docs/guides/development-setup.md).

### Creating tickets

Always create a ticket using GitHub Issues for distinct features you're working on.

> TBD

### Making changes

#### Branching

Use [Github Flow](https://guides.github.com/introduction/flow/)

- Create a topic branch from (usually from `main`).
- Create a pull request when ready to merge or to start a discussion

Also:

- Prefix branch name with the number of corresponding issue and include some description, e.g. `8-contributing-docs`
- Keep branches small for focused work and easier review.

#### Commits

Make commits of logical and atomic units.

Use [_conventional commit messages_](https://www.conventionalcommits.org/en/v1.0.0/).

```
fix(cli): enable colors in output
```

Tagging commits with issue number aids referencing.

#### Code style

To conform recommendations run:

- `npm run lint` (`npm run lint:fix`) - for syntax
- `npm run prettier` (`npm run prettier:fix`) - for formatting

If you forget to run checks, we have CI checks in place to inform you on PR.

### Testing

Modules should provide tests to ensure correct behavior.

Consider using _test driven development_, i.e. write tests first.
