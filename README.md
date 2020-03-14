# gig-code-challenge


### How to get the project and run tests locally:

```sh
# Clone project
git clone https://github.com/GeorgeSas/gig-code-challenge.git
```

```sh
# Install dependencies
npm install
```

```sh
# Execute tests in GUI
npm run test:open
```

```sh
# Execute tests in --headless mode
npm run test:run
```

```sh
# Execute tests via tags
npm run test:tags TAGS="@Authentication" 
npm run test:tags TAGS="@ShoppingCart" 
npm run test:tags TAGS="@Smoke" 
npm run test:tags TAGS="@Regression" 
```

```sh
# Execute tests per feature file
npm run test-headless:authentication
npm run test-headless:shopping
```
