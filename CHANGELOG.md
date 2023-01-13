# Changelog

## 1.23.0

### Minor Changes

- [`a84bfd3`](https://github.com/justeattakeaway/pie/commit/a84bfd3eaed89f8dcf4bdd030643f47e10fa3296) - Updated commitlint config naming grammar.

### Patch Changes

- [`fb76fe9`](https://github.com/justeattakeaway/pie/commit/fb76fe92ba64cf8135bdeba7f37bb8c56f853c52) - Added README.md file into .changeset/

## 1.22.0

### Minor Changes

- [`4c7f01a`](https://github.com/justeattakeaway/pie/commit/4c7f01a52d16918a334e303f4502e96fe93d815b) - Updated Commitlint and Changeset configs

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v1.21.1

_December 20, 2022_

### Fixed

- CI failure on `main` due to execution of visual review PR comment step.

## v1.21.0

_December 8, 2022_

### Added

- Automatic PR reminder to check visual changes in Percy
- Ensure visual tests don't run on draft PRs.

## v1.20.0

_December 2, 2022_

### Added

- New package.json scripts for system / visual / snapshot updating.
- New `turbo.json` config for system / visual tests.
- The following devDependencies used for testing - `dree` / `@percy/cli` / `@percy/webdriverio` / `cross-env` / `jest-expect-message`.
- Modify GitHub Actions to allow for preview deployments.

## v1.19.0

_November 24, 2022_

### Added

- WebDriverIO dependencies + coresponding `turbo.json` config.

## v1.18.3

_November 24, 2022_

### Fixed

- `.gitignore` dist folder exemption causing dist output not to be published. Have modified to be the same specificity as package `files` setting.

## v1.18.2

_November 24, 2022_

### Changed

- Updated `@justeat/fozzie` to `10.9.0`

## v1.18.1

_November 15, 2022_

### Added

- `CODEOWNERS` file with the `@justeat/ui-senior-reviewers` set as reviewers for `pie-microsite`
- Root level devDependency of `@justeattakeaway/pie-icons`

## v1.18.0

_November 1, 2022_

### Added

- `nvmrc` file to lock the node version at 16 for local development

### Changed

- Use `actions/cache@v3` instead of `v2` to use Node 16 (was 12 before)

### Removed

- Remove `test` command in `husky` to prevent building entire monorepo on each commit

## v1.17.0

_October 22, 2022_

### Added

- `pie-icons-react` package to `/tools`.
- add `/esm` folders to .gitignore

## v1.16.1

_October 13, 2022_

### Changed

- add more granular config to the GitHub actions file for running on pushes to main and PRs

## v1.16.0

_October 10, 2022_

### Added

- `pie-icons-vue` package to `/tools` (as a beta release).

### Changed

- `devDependencies` moved from `pie-icons-vue` package to root (and some minor dependency bumps)

## v1.15.0

_October 6, 2022_

### Changed

- Removing build filter so that it builds all packages that Turborepo finds

## v1.14.0

_October 6, 2022_

### Changed

- Updating Turborepo config to cache more stuff
- `devDependencies` moved to root from the pie-icons package

## v1.13.1

_October 03, 2022_

### Changed

- Fixed Husky to work with Yarn 2+

## v1.13.0

_September 23, 2022_

### Added

- Linting step to GitHub workflow

### Changed

- Split out GitHub actions workflow into separate jobs

## v1.12.0

_September 16, 2022_

### Added

- Code of conduct file
- GH pages deployment for PIE Microsite

### Fixed

- `stylelint` errors.

## v1.11.0

_September 05, 2022_

### Added

- `precommit` checks for sensitive information.

## v1.10.0

_September 2, 2022_

### Added

- Moved most dev dependencies from pie-microsite into root level depedencies
- Dependency resolution fix to `.yarnrc.yml` for `stylelint-config-recommended-scss` and `stylelint-config-standard-scss` as recommended in [this github issues thread](https://github.com/stylelint-scss/stylelint-config-recommended-scss/issues/89#issuecomment-988536998)

## v1.9.0

_August 22, 2022_

### Added

- Colour copy and images.

## v1.8.0

_August 17, 2022_

### Added

- Spacing copy and images.

## v1.7.0

_August 15, 2022_

### Changed

- Header logo wrapper name.
- Scss pie token reference.

## v1.6.0

_August 15, 2022_

### Added

- Header logo and styles.
- Scss watch helper for entire scss directory.
- gitignore file.

## v1.5.0

_July 28, 2022_

### Added

- `husky` pre-commit hooks for linting.

## v1.4.0

_July 28, 2022_

### Added

- `stylelint`, `stylelint-scss` & `@justeat/stylelint-config-fozzie` for linting purposes.
- `lint:style` setting for linting within `turbo.json`.

## v1.3.0

_July 26, 2022_

### Changed

- Switched from 'plug and play' to node_modules based dependencies

## v1.2.0

_July 20, 2022_

### Added

- `@justeat/browserslist-config-fozzie` dev dependency to be referenced by apps and packages

## v1.1.0

_July 18, 2022_

### Changed

- Removed `docs` and `sites` folders so that all websites live directly under `apps` folder

## v1.0.0

_June 15, 2022_

### Added

- Initial Files
