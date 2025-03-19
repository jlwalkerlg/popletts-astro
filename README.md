# Poplett's

## Configuration

For local development, create a `.env` file in the project root directory with the following environment variables.

| Variable   | Description                                                                                                                     | Example                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| `SITE`     | The hostname from which you'll run your project, e.g. `http://localhost:4321` for local development.                            | `http://localhost:4321` |
| `BASE_URL` | The base path to be appended to the hostname, which can be useful when deployed to certain hosting providers like GitHub Pages. | `/popletts/`            |

For deployment, make sure these variables are available during the build process.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
