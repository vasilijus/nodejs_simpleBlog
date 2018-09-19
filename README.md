"# node.js Simple blog (fullstack)"
https://www.youtube.com/watch?time_continue=997&v=ixVQjTwqfe0
<br />
-- Video 1 --
1.npm init.
2.create app.js file.
3.npm install express     , package...
4.npm run start 
5.npm install nodemon -D     , package...   -D -> development dependancy ( upon changes, the server will make automatic reloads...)
-- Video 2 --
1.npm install mongoose  , DB install , Will be using mLab(free 500Mb of free space)
2.CREATE A FREE ACCOUNT
3.Store the DB connecion in keys.js file, mongoURI
4.require mongoose in app.js -> mongoose.connect(keys.mongoURI)
5.Setup a post Schema