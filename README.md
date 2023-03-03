# About This Site

This is the code for my personal site.  I did not use any built in libraries, I built all the functionality from scratch using JS, CSS, and HTML.  This site is currently hosted on AWS.  However, I also have a version on Google Cloud using Firebase.

# AWS DEPLOYMENT

## Pushing changes to live site
The static web files are stored in an aws s3 bucket.  To push changes to live site update the contents of the s3 bucket.  Your current directory should be C:\Users\calep\OneDrive\Documents\Personal Website\github\cale-pliska.github.io

### View all files (including .git) in directory.
~~~
Get-ChildItem . -Force
~~~
### Sync current directory "." into s3 bucket excluding .git
~~~
aws s3 sync . s3://calepliska.com --exclude '.git/*'
~~~
### Check contents of s3 bucket
~~~
aws s3 ls s3://calepliska.com
~~~

### Remove all the git files in s3
~~~
aws s3 rm --recursive s3://calepliska.com/.git/
~~~

# Google Cloud Deployment
The static web files are in the public folder of my google cloud folder.

## Pushing changes to the live site
Manually copy and paste the source files to the public folder.
TODO: find a better way to do this.

### Re-deploy the application
~~~
firebase deploy
~~~
This will give the live URL.
