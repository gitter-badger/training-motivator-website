# training-motivator-website

[![Join the chat at https://gitter.im/KamilLelonek/training-motivator-website](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/KamilLelonek/training-motivator-website?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A website for Training Motivator during [BattleHack Berlin 2015](https://2015.battlehack.org/berlin).

## Prerequisites

Makre sure you have [NodeJS](https://nodejs.org/download/) installed.

## Installation

To install all of required dependecies run:

    npm install

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

## Test

To test the application execute:

  	npm run test

# Demo

Website is available under:

[http://training-motivator.divshot.io/](http://training-motivator.divshot.io/)

# Deployment

1. Firsly, make sure that you have [Divshot](https://divshot.com/) account created.

2. Next, configure application to work with *Divshot*.

		./scripts/configure-divshot.sh
		
	Which will authorize your account and connect the website with *Divshot* application.
	
3. Push the website:

	**Development**

		./scripts/deploy-development.sh

	**Production**

		npm run deploy

4. And visit [training-motivator website](https://divshot.com/).
