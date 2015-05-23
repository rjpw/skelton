The files in this directory are described below.

## convert.js

A node script used to convert XML to JSON. It is best run from this directory.

Example usage (will create tomcat-6.0.41_findbugs.json):

```
node convert tomcat-6.0.41_findbugs.xml
```

## import.js

Import script to populate a mongodb database suitable for this application. It must be run from within mongodb. For an example of its use see [Loading Data](https://github.com/rjpw/skelton#loading-data).

## Analysis-July30.json

Data from a particular analysis, imported to MongoDB (see project README.md).

## messages.xml

Copied from the FindBugs source code (version 3.0.1), this file shows all the messages used in its UI. 

## messages.json

JSON version of messages.xml, coverted using [this tool](https://x2js.googlecode.com/hg/demo.html)

## findbugs_mt4j_core.json and findbugs_mt4j_core.xml

Sample FindBugs data for the project [MT4j](http://www.mt4j.org/mediawiki/index.php/Main_Page)

## tomcat-6.0.41_findbugs.json and tomcat-6.0.41_findbugs.xml

Newer run of FindBugs and converted JSON file for Tomcat 6.0.41 java scource.
