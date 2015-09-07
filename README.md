# d3-kefex - EDUCATIONAL VERSION OF D3
d3-kefex is an educational version of d3 from kiran kumar (Front End Developer) and team, with new and existing technical papers from stanford visualization group - mike bostock, jason davies and VIS group. Currently, this project is under pre-development plan with research on existing papers, code practice, algorithms, architecture and unit tests.

Technical specifications and architecture from source is completely same with credit giving to d3 team and will be introducing new features with HTML5 API's Web Audio, WebRTC, Realtime Analytic enabled modules as d3-kefex modules.

## Installing

Download the latest version here:

* <https://github.com/mbostock/d3/releases>

Or, to link directly to the latest release, copy this snippet:

```html
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
```

## Using

When developing locally, note that your browser may enforce strict permissions for reading files out of the local file system. **If you use [d3.xhr](wiki/Requests) locally (including d3.json et al.), you must have a local web server.** For example, you can run Python's built-in server:

    python -m SimpleHTTPServer 8888 &

or for Python 3+

    python -m http.server 8888 &

If you have have PHP installed you could try

    php -S localhost:8888

or if you are running Ruby you can use

    ruby -run -e httpd . -p 8888

Once this is running, go to <http://localhost:8888/>.

Or if you are running nodejs you can do

    npm install http-server -g
    http-server

Another option is to start a local jetty instance, by using the jetty-runner library with the JVM already installed on your system. In order to achieve this you'll need to download [jetty-runner](http://central.maven.org/maven2/org/eclipse/jetty/jetty-runner/9.3.0.M0/jetty-runner-9.3.0.M0.jar), then you can simply do:

    java -jar jetty-runner-9.3.0.M0.jar  --port 8080  .

and this will start the server on http://localhost:8080 as usual from the current directory, or a different directory, simply changing '.' to the path to that directory.

D3 supports the asynchronous module definition (AMD) API. For example, if you use [RequireJS](http://requirejs.org/), you may load as follows:

```js
require.config({paths: {d3: "http://d3js.org/d3.v3.min"}});

require(["d3"], function(d3) {
  console.log(d3.version);
});
```

## Modifying

If you want to modify how D3 is implemented, click the "Fork" button in the top-right corner of this page, and then clone your fork from the command line by replacing *username* with your GitHub username:

```bash
git clone git://github.com/username/d3.git
```

The D3 repository should work out of the box if you just want to create new visualizations using D3. On the other hand, if you want to extend D3 with new features, fix bugs, or run tests, you should [fork the D3 repository](/mbostock/d3), and install [Node.js](http://nodejs.org/) (version 0.10.x or higher). From the root directory of this repository, you can then install D3's dependencies:

    npm install

To run the tests, use:

    make test

PROJECT IS UNDER MIT LICENSE
