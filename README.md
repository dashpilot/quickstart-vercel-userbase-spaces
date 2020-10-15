# quickstart-vercel-userbase-spaces
Vercel function to save data and images to S3/Digitalocean Spaces. Uses userbase.com for authentication. This project is similar to my other project https://github.com/dashpilot/quickstart-netlify-spaces, but for Vercel and Userbase.

## How To:

### 1. Deploy this repo to Vercel

Deploy this repo to Vercel using the 'Deploy to Vercel'-button below:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/dashpilot/quickstart-netlify-spaces"><img src="https://www.netlify.com/img/deploy/button.svg" /></a>

### 2. Add your S3 and Userbase credentials as environment variables

In Vercel, go to settings > environment variables and create the following environment variables for your Amazon S3/Digitalocean Spaces settings and Userbase secret key

`S3_ENDPOINT`: your S3/Spaces endpoint (e.g ams3.digitaloceanspaces.com)\
`S3_KEY`: your S3/Spaces key\
`S3_SECRET`: your S3/Spaces secret\
`S3_BUCKET`: your S3/Spaces bucket\
`UB_KEY`: your userbase.com secret key

### 3. Fill in your Userbase.com app id
Fill in your Userbase.com app id in public/index.html (just below userbase.init)

### 4. Press the :star: button
Don't forget to press the :star: button to let me know I should continue improving this project

