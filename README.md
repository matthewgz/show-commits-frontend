# Github API integration to show commits (Frontend)

This project consumes the GitHub API to obtain the commits made in this project and that of the `show-commits-backend` repository.

To carry out this, the Next JS framework was used to be able to make SSR and Material UI for the design part.

And to obtain the data, the API developed in the repository `show-commits-backend` is consumed

## Installation

1. For installation, you will first need to clone this project on your workstation.

2. Once the project is cloned, you must enter the project using a terminal and execute the following command to complete the installation.

```bash
npm install
```

## Configuration

Before starting the project make sure the `.env.local` is correctly configured. Copy `.env.example` and consider these values:

```bash
# Put the API URL of the show-commits-backend project
NEXT_PUBLIC_ENV_BACKEND_API="http://localhost:8000/"
```

## Available Scripts

In the project directory, you can run:

`npm run dev`

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
The project will reload if you make edits.

`npm run build`

Builds the app for production.

`npm run start`

Start the project with the files generated for production.
