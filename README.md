# quickstart-vercel-userbase-spaces

Vercel function to save data and images to S3/Digitalocean Spaces. Uses userbase.com for authentication. This project is similar to my other project https://github.com/dashpilot/quickstart-netlify-spaces, but for Vercel and Userbase. Contains a full example in index.html

## How To:

### 1. Deploy this repo to Vercel

Deploy this repo to Vercel using the 'Deploy to Vercel'-button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdashpilot%2Fquickstart-vercel-userbase-spaces&env=S3_ENDPOINT,S3_KEY,S3_SECRET,S3_BUCKET,UB_SECRET)

### 2. Add your S3 and Userbase credentials as environment variables

During the deploy, you'll be asked for the following environment variables (or add them later under settings > environment variables):

`S3_ENDPOINT`: your S3/Spaces endpoint (e.g ams3.digitaloceanspaces.com)\
`S3_KEY`: your S3/Spaces key\
`S3_SECRET`: your S3/Spaces secret\
`S3_BUCKET`: your S3/Spaces bucket\
`UB_SECRET`: your userbase.com secret key

### 3. Fill in your Userbase.com app id

Fill in your Userbase.com app id in public/index.html (just below userbase.init) and visit index.html to log in. After you've logged in, press the 'save test data'-button to test if everything works. You should now see a data.json file in your S3/Spaces bucket.

### 4. Press the :star: button

Don't forget to press the :star: button to let me know I should continue improving this project
