# Homepass Core Contribution guidelines

This guidelines briefly explain how to contribute to core in an effective manner,
making sure to keep high quality standards and making it easier for your contributions
to make through.

We'd love for you to contribute to this source code and to make the service even better than
it is today! Here are the guidelines we'd like you to follow:

- [Team members](#team)
- [Contributing code](#contributing)
- [Commit Message Guidelines](#commit)
- More to come :)

<a name="team"></a>

## Team members

Currently, the core team members are:

- Peter Cosemans <peter@homepass.ai> (Homepass)
- Thomas Claessens <thomas.claessens@euri.com> (Euricom)
- Jeroen Sneyers <jeroen.sneyers@euri.com> (Euricom)

<a name="contributing"></a>

## Contributing code

When contributing your code, please follow these guidelines:

- Do not include many changes in every commit. Commits should be focused and address one single problem or feature. By
  having **multiple, small commits** instead of few large ones, it is easier to track what you are doing, revert changes
  in case of an error and help you out if needed.
- **Be explicit** and write useful comment.
- **Keep things simple**. Avoid big functions, long nested loops or `if` statements.
- Try to keep **backwards-compatibility**. Code that breaks current configurations and installations is difficult to
  deploy, and therefore we try to avoid it.
- Add **unit tests** to verify that your code not only works but also keeps working over time. Try to cover **most of your code** with tests. The bigger the test coverage, the more reliable and better our product is.
- Add proper **documentation** explaining your how to use your new feature or how your code changes things.

<a name="commit"></a>

## Git Commit Guidelines

See also: <https://conventionalcommits.org/>

You must use following commit message:

```
<type>(<scope>): <subject>

<body>

<footer>
```

`<subject>` is a short (max 72 characters) description of your change. If you need more text use the `<body>`.

Allowed `<type>` styles (Required):

- feat (A new feature)
- fix (A bug fix)
- docs (Documentation only changes)
- style (Formatting, missing semi colons, etc; no code change)
- refactor (A code change that neither fixes a bug nor adds a feature)
- perf (A code change that improves performance)
- test (adding missing tests, refactoring tests; no production code change)
- chore (Changes to the build process or auxiliary tools)
- revert (Reverts a previous commit)
- wip (Work in progress)

Allowed `<scope>` values (optional):

- `*` (global)
- More to come

Message footer:

```
Closes #123, #245, #992
```

## Publish modules

```bash
$ lerna publish
```

## Link modules during development

```bash

# in the module root folder
$ yarn link
success Registered "@homepass2018/aws".
info You can now run `yarn link "@homepass2018/aws"` in the projects where you want to use this package and it will be used instead.

# in the app/api root folder
$ yarn link "@homepass2018/aws
```
