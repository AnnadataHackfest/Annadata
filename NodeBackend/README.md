# Backend for Annadata

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![MIT](https://img.shields.io/github/license/AnnadataHackfest/NodeBackend?color=blue)

Backend of Annadata

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Your machine should have Npm(or Yarn) and Node.js installed to use it locally.

## Setup and Installation

### Setting up the repository locally

1. First fork the repo :fork_and_knife: to your account.  
   Go to the forked repo and clone it :busts_in_silhouette: to your local machine:

```sh
git clone https://github.com/Your_Username/NodeBackend.git
```

This will make a copy of the code to your local machine.

2. Now move to the `NodeBackend` directory.

```sh
cd NodeBackend
```

3. Now check the remote of your local code by:

```sh
git remote -v
```

The response should look like:

```sh
origin	https://github.com/Your_Username/NodeBackend.git (fetch)
origin	https://github.com/Your_Username/NodeBackend.git (push)
```

To add upstream to remote, run:

```sh
git remote add upstream https://github.com/AnnadataHackfest/NodeBackend.git
```

Again run `git remote -v`, the response should look like:

```sh
origin	https://github.com/Your_Username/NodeBackend.git (fetch)
origin	https://github.com/Your_Username/NodeBackend.git (push)
upstream	https://github.com/AnnadataHackfest/NodeBackend (fetch)
upstream	https://github.com/AnnadataHackfest/NodeBackend (push)
```

4. Once the remote is set, install all the necessary dependencies by the following command:

```sh
npm install
```

### Run locally

Run the below command to start the server:

```sh
npm run dev
```

Go to: [http://localhost:5000](http://localhost:5000)

## Tech stack

- Used [Ambeedata API](https://docs.ambeedata.com/#soil-latest-geospatial) for realtime information about soil, pollen, fire alert, air quality, water vapour and weather information.

- Used [Open Weather API](https://openweathermap.org/api) for weather forecast

- Used [Twilio](https://www.twilio.com/) for sending SMS

- Used [Node Mailer](https://nodemailer.com/about/) for sending email

- Used [Cloudinary](https://cloudinary.com/) for storing media files like photos and videos

- Used [MongoDB](https://www.mongodb.com/) for database

- Used [JWT](https://jwt.io/) for secure authentication
