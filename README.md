# PredictIt API Node.js Wrapper

[PredictIt](https://predictIt.org) is a prediction marketplace where traders can bet on the outcome of political events. This repo contains a Node.js wrapper for their newly<sup>1</sup>  introduced API. You can get up to date information about all of their markets through this API. For basic information about how PredictIt works, please visit their [help page](https://predictit.freshdesk.com/support/solutions/articles/5000516268-trading-basics-). This API does not require any authorization.

## Quickstart

TODO - have a code example here and some of the output for a specific market

## Endpoints

There are four endpoints that you can make calls to.

### All Markets

The endpoint that would display every market and its corresponding contracts is 

```
https://www.predictit.org/api/marketdata/all/
```

You can hit this using the TODO command. Here is an example below.

```
TODO: EXAMPLE HERE
```

### Categories

The endpoint that would display every market below a specific category is: 

```
https://www.predictit.org/api/marketdata/category/<category-id>
```

Where \<category-id\> is one of the three possible markets. They, and their corresponding IDs, are:

ID   | Category
---- | ----------
4    | World
6    | US Elections
13   | US Politics


You can hit this using the TODO command. Here is an example below.

```
TODO: EXAMPLE HERE
```

### Groups

The endpoint that would display every market in a specific group is:

```
https://www.predictit.org/api/marketdata/group/<group-id>
```

Where \<group-id\> is one of fourteen possible groups. They are listed below with their IDs:

| ID | Group (World)    |   | ID  | Group (US Elections) |   | ID | Group (US Politics) |
|----|------------------|---|-----|----------------------|---|----|--------------------|
| 49 | Mideast & Africa |   | 55  | State & Local        |   | 37 | White House        |
| 50 | Americas         |   | 67  | National             |   | 38 | Congress           |
| 51 | Asia/Pacific     |   | 75  | Electoral College    |   | 39 | Supreme Court      |
| 52 | Europe           |   | 77  | Fundraising          |   | 45 | Other Events       |
|    |                  |   | 82  | Congress             |   | 81 | Cabinet            |


You can hit this using the TODO command. Here is an example below.

```
TODO: EXAMPLE HERE
```

### Markets

The endpoint that would display a single market and its corresponding contracts is: 
```
https://www.predictit.org/api/marketdata/ticker/<ticker-symbol>
```

Replace \<ticker-symbol\> with a ticker symbol from the PredictIt website or from another API call above. It would look something like **SYKES.SCOTUS.NEXTJUSTICE**.

You can hit this using the TODO command. Here is an example below.

```
TODO: EXAMPLE HERE
```

Across these different endpoints data is updated only every sixty seconds.

## Glossary

* **Market**: A market may have multiple contracts below it or only have one the outcome only has two possible outcomes. A market will ask ask a specific question, for example: "Which party will control the US House after the 2018 midterm elections?" or "Who will win the 2016 Republican Presidential Primary?"
* **Contract**: Each market contains individual contracts. They refer to the different possible outcomes of the market. For example, within a market asking the question "Which party will win Michigan in the 2016 presidential election?" you could bet on a contract of whether the Democrats will win or whether the Republicans will win.
* **Category**: The largest bin under which PredictIt sorts their markets. E.g., *US Politics*. Each category also has subcategories, or groups.
* **Group**: Each category also contains a number of markets, and is itself contained by a category. An example would be the *Electoral College*


For more information about the PredictIt API please head to [their site](https://predictit.freshdesk.com/support/solutions/articles/12000001878-does-predictit-make-market-data-available-via-an-api-) to understand more - but take in mind that their documentation is sparse.

[1]: Their API was released on October 18th, 2016.
