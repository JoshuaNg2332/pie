module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
    'type-enum': [
        2,
        'always',
            [
            'Build',
            'Changeset',
            'Chore',
            'Ci',
            'Config',
            'Docs',
            'Feat',
            'Fix',
            'Perf',
            'Refactor',
            'Revert',
            'Style',
            'Test',
            ],
        ],
    },
    prompt: {
      settings: {},
      messages: {
        skip: ':skip',
        max: 'upper %d chars',
        min: '%d chars at least',
        emptyWarning: 'can not be empty',
        upperLimitWarning: 'over limit',
        lowerLimitWarning: 'below limit'
      },
      questions: {
        type: {
          description: "Select the type of change that you're committing:",
          enum: {
            Feat: {
              description: 'A new feature',
              title: 'Features',
            },
            Fix: {
              description: 'A bug fix',
              title: 'Bug Fixes',
            },
            Docs: {
              description: 'Documentation only changes',
              title: 'Documentation',
            },
            Style: {
              description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
              title: 'Styles',
            },
            Refactor: {
              description: 'A code change that neither fixes a bug nor adds a feature',
              title: 'Code Refactoring',
            },
            Perf: {
              description: 'A code change that improves performance',
              title: 'Performance Improvements',
            },
            Test: {
              description: 'Adding missing tests or correcting existing tests',
              title: 'Tests',
            },
            Build: {
              description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
              title: 'Builds',
            },
            Ci: {
              description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
              title: 'Continuous Integrations',
            },
            Chore: {
              description: "Other changes that don't modify src or test files",
              title: 'Chores',
            },
            Revert: {
              description: 'Reverts a previous commit',
              title: 'Reverts',
            },
            Changeset: {
              description: 'Updates version number of affected packages',
              title: 'Changesets',
            },
            Config: {
              description: 'Updates configuration file',
              title: 'Config',
            },
          },
        },
        scope: {
          description:
            'What is the scope of this change (e.g. component or file name)',
        },
        subject: {
          description: 'Write a short, imperative tense description of the change',
        },
        body: {
          description: 'Provide a longer description of the change',
        },
        isBreaking: {
          description: 'Are there any breaking changes?',
        },
        breakingBody: {
          description:
            'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
        },
        breaking: {
          description: 'Describe the breaking changes',
        },
        isIssueAffected: {
          description: 'Does this change affect any open issues?',
        },
        issuesBody: {
          description:
            'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
        },
        issues: {
          description: 'Add issue references (e.g. "fix #123", "re #123".)',
        },
      },
    }
  };