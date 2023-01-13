# CI Readme

This readme is to guide you on how to use the new commiting and versioning tools added to Pie.


# Commitizen & Commitlint

- Commitizen is a tool that allows users to define a standard of committing rules and enforces writing descriptive commit messages.
- It also allows for automated semantic versioning and changelogs based on the commit.
- This works alongside Commitlint.

- Commit lint checks if your commit message follows the conventional commit format which is the same format used by Commitzen.

## Making a Commit

Once you have made a change in the Repo and are ready to commit your changes, you can use the commit command below to start your commit editing.
```
git cz
```

Once you run this command, you'll be presented with the following options which you can scroll through with arrow keys on your keyboard.

```
? Select the type of change that you're committing:: (Use arrow keys)
❯ feat:        A new feature 
  fix:         A bug fix 
  docs:        Documentation only changes 
  style:       Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) 
  refactor:    A code change that neither fixes a bug nor adds a feature 
  perf:        A code change that improves performance 
  test:        Adding missing tests or correcting existing tests 
(Move up and down to reveal more choices)
``` 

> These options can be configured in the [commitlint.config.js file](https://github.com/JoshuaNg2332/pie/blob/main/commitlint.config.js).

Once you have selected which prompt best fits with your change, you'll be asked to describe the scope of your change. This should be a component name such as `pie-icons`.
```
? What is the scope of this change (e.g. component or file name) :skip:
```

Once you have done this, the next step would be to add a short description to your change which will serve as the heading of the commit.
```
? Write a short, imperative tense description of the change :skip:
```

Once you have written your description, you'll be asked if you want to write a longer description of your change.
```
? Provide a longer description of the change :skip:
```

The next option is asking if its a breaking change?
```
? Are there any breaking changes?: (y/N) 
```

And the final question is if this affects any open issues.
```
? Does this change affect any open issues?: (y/N) 
```

Once this is done, you can then push these changes to your branch and will be viewable in your PR with the correct formatting.


# Changesets

- Changesets is a tool that allows users to bundle relevant package changes together into a single release helping flatten bump style single releases per package and handles internal dependencies into a multi-package-repository as well as updates changelogs in a single joint release with a single command.

## Bumping component version

Once you've committed your first change, you can also create a Changesets version bump. Generally this would be done towards the end of your changes so that Changesets can detect all packages affected.

Firstly, you can run the command below and you'll be presented with the prompt of changed and unchanged packages. You can select the packages you have changed using your arrow keys and the spacebar to select.
```
yarn changeset
```
```
🦋  Which packages would you like to include? … 
◉ changed packages
  ◉ pie-microsite
◯ unchanged packages
  ◯ pie
  ◯ @justeattakeaway/pie-icons
  ◯ @justeattakeaway/pie-icons-react
  ◯ @justeattakeaway/pie-icons-vue
```

The next options are to check if the change is a major, minor or patch change which you can select. If Major or Minor options aren't selected, it'll assume it is a patch bump.

```
🦋  Which packages should have a major bump? … 
◯ all packages
  ◯ pie-microsite@1.32.1
```
```
🦋  Which packages should have a minor bump? … 
◯ all packages
  ◯ pie-microsite@1.32.1
```
```
The following packages will be patch bumped:
🦋  pie-microsite@1.32.1
🦋  Please enter a summary for this change (this will be in the changelogs).
🦋    (submit empty line to open external editor)
🦋  Summary ›  
```

Next would be to enter a summary for your change. This will be your Changelog. Once you've done this, you'll be prompted to confirm as seen below.
```
🦋  === Summary of changesets ===
🦋  patch:  pie-microsite
🦋  
🦋  Note: All dependents of these packages that will be incompatible with
🦋  the new version will be patch bumped when this changeset is applied.
🦋  
🦋  Is this your desired changeset? (Y/n) › true
```

Once this is done, a new file will be generated in the .changeset folder which contains any and all changelog relevant edits.
You can then commit and push this the same way as described in the previous section. You can use the `changeset` option in Commitizen for this.
Once pushed, you will see the Changeset bot change in your PR as that will detect your Changeset file.
This can now be merged once you are happy with your changes.

> Note that if this was actually implemented, this does not alter your changelog until after CI has merged your PR into Main.

If you would like to manually update Main to see your changelog update, after merging, checkout to main and pull the latest version.

Then run;
```
GITHUB_TOKEN=YOUR_PERSONAL_ACCESS_TOKEN_HERE npx changeset version
```
> Your Personal Access Token will need repo:status and read:user permissions

This will then run Changesets on Main and will generate your Changelog. You can then commit this into main. 

> Once again, this step would in future, be handled by the CI.
