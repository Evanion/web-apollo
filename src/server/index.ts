import compression from 'compression';
import express from 'express';
import path from 'path';
import middleware from './middleware';
import graphql from './graphql'

//@ts-ignore
import favicon from '../app/favicon.ico';

const app = express();

// Add gzip compression to responses
app.use(compression());

// Favicon
const faviconFileName = favicon.slice(favicon.lastIndexOf('/') + 1);
app.use('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, `../client/${faviconFileName}`)));

// Expose the public directory as /dist and point to the browser version
app.use('/dist', express.static(`${__dirname}/../client`));

// Anything unresolved is serving the application and let
// react-router do the routing!

// Check for PORT environment variable, otherwise fallback on Parcel default port
const port = process.env.PORT || 1234;

graphql.applyMiddleware({app});
app.get('/*', middleware);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
  console.log(`Grahpql is available on ${graphql.graphqlPath}`)
});
