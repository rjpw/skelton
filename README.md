## Skelton

## ARCHIVED

This project has been inactive for years, and has been retired.

<hr/>

Example skeleton for Node-RED UI, with apologies to fans of the late great Red Skelton.

The work represents an experimental playground for a static code analysis project based on the results
generated by [FindBugs](http://findbugs.sourceforge.net).

![Screenshot](/src/images/skelton2.png?raw=true "Skelton screenshot")

## Generator

The generator used for the initial skeleton was [generator-react-webpack](https://github.com/newtriks/generator-react-webpack).

## Caveats

The project is in its earliest stages, and until this caveat is removed from the README it cannot even be counted on to successfully build.

The choice of source analysis target project (Tomcat 6.0.41) was made with the greatest respect for the project and its developers. An older version was chosen to permit comparisons with later editions.

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

The following links contain reference material or libraries that have been useful in this project.

* [generator-react-webpack](https://github.com/newtriks/generator-react-webpack)
* [highlight.js](https://highlightjs.org/)
* [highlights.js docs](http://highlightjs.readthedocs.org/en/latest/)
* [Days-Hours Heatmap](http://bl.ocks.org/oyyd/859fafc8122977a3afd6)
* [House Hunting on Trulia](http://www.trulia.com/vis/tru247/)
* [r-layout](https://github.com/Zinggi/RLayout)
* [rangy - a javascript range and selection library](https://github.com/timdown/rangy)
* [Overriding Text Selection Color with CSS](https://css-tricks.com/overriding-the-default-text-selection-color-with-css/)
* [Selecting over SPAN tags](http://stackoverflow.com/questions/3904400/how-to-highlight-user-selected-text-within-a-piece-of-text-which-has-already-bee?rq=1)
* [Safe user selection (across elements)](http://stackoverflow.com/questions/304837/javascript-user-selection-highlighting?rq=1)

## Resources to consider

* [React Boilerplate](https://github.com/mbrio/react-boilerplate)
* [PRISM](http://prismjs.com/index.html)
* [Mark and Share](https://github.com/SmartTeleMax/MaSha)
* [react-grid-layout](https://github.com/STRML/react-grid-layout)
* [Reusable Chart Components with React and D3](http://busypeoples.github.io/post/d3-with-react-js/)
* [D3 in React](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/)
* [react-datagrid](https://github.com/zippyui/react-datagrid)

