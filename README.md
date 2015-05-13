## Skelton

Example skeleton for Node-RED UI, with apologies to fans of the late great Red Skelton.

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

