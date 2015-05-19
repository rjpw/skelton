## Skelton

Example skeleton for Node-RED UI, with apologies to fans of the late great Red Skelton.

The work represents an experimental playground for a static code analysis project based on the results
generated by [FindBugs](http://findbugs.sourceforge.net).

## Generator

The generator used for the initial skeleton was [generator-react-webpack](https://github.com/newtriks/generator-react-webpack).

## Caveat

The project is in its earliest stages, and until this caveat is removed from the README it cannot even be counted on to successfully build.

## Loading Data

The database can be reproduced from the data directory with the following steps:

1: Change to the data directory at the command line (i.e. relative to this directory)

    cd data

2: Run the mongodb shell

    mongo

3: Create (or use) the findbugs database

    use findbugs;

4: Load the data with the import script

    load('import.js');

## Regarding Analysis

The file in our data directory called "Analysis-July30.json" was generated by running FindBugs against the
data found in the [tomcat 6.0.41 source code](https://archive.apache.org/dist/tomcat/tomcat-6/v6.0.41/src/apache-tomcat-6.0.41-src.tar.gz).

This application builds a client application that displays that source code, but rather than include this in the project
please create a directory under "src" (relative to this readme) called "javasrc", and in it please extract the contents
of the tomcat source code. On Linux, this might look like this: 

```
mkdir src/javasrc
cd src/javasrc
cp ~/Downloads/apache-tomcat-6.0.41-src.tar.gz .
tar xzf apache-tomcat-6.0.41-src.tar.gz
```

Crucially, the resulting tree should contain the following folder:

    ./src/javasrc/apache-tomcat-6-0.41-src/java

The build process will copy the java source code into the correct destination folder.

## Useful Links

The following links contain reference material that has been useful in this project.

* [generator-react-webpack](https://github.com/newtriks/generator-react-webpack)
* [React Boilerplate](https://github.com/mbrio/react-boilerplate)
* [Mark and Share](https://github.com/SmartTeleMax/MaSha)
* [highlight.js](https://highlightjs.org/)
* [highlights.js docs](http://highlightjs.readthedocs.org/en/latest/)
* [PRISM](http://prismjs.com/index.html)
* [Days-Hours Heatmap](http://bl.ocks.org/oyyd/859fafc8122977a3afd6)
* [House Hunting on Trulia](http://www.trulia.com/vis/tru247/)

