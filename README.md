# react-dci

Frontend application for [scala-dci](https://github.com/KamilLelonek/scala-dci) API.

## Prerequisites

Makre sure you have [NodeJS](https://nodejs.org/download/) installed.

## Installation

To install all of required dependecies run:

    ./scripts/setup.sh

## Run

Start the local dev server:

    npm start

Navigate to **http://localhost:8080/** to view the app.

## Production

To build minified production app run:

    npm run build

**Input:** `src/main.jsx`

**Output:** `build/app.js`

## Clean

To remove generated `build/app.js` run:

    npm run clean

# Demo

Website is available under:

http://squixy.zz.mu/react-dci
