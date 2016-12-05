# PredictIt API Node.js Wrapper


[PredictIt](https://predictIt.org) is a prediction marketplace where traders can bet on the outcome of political events. This repo contains a Node.js wrapper for their newly introduced API. You can get up to date information about all of their markets through this API. For basic information about how PredictIt works, please visit their [help page](https://predictit.freshdesk.com/support/solutions/articles/5000516268-trading-basics-). This API does not require any authorization.

## Quickstart

Try running this wrapper on an important market, like the predictions currently for our next Supreme Court Justice. You could do this by loading the module and then typing:

```javascript
predictIt.market('SCOTUS.NEXTJUSTICE')
  .then(data => console.log(data));
```

This would `console.log` the current market information about the next Supreme Court justice pick. You could refine your query with promises to work with the data in a number of ways. For example you could output the question the market is asking and the price of each contract in the market, along with that contracts name. That code is below:

```javascript
predictIt.market('SCOTUS.NEXTJUSTICE')
  .then(data => {
    console.log(`${data.Name}\nCurrent buy prices are at:\n\n`);

    data.Contracts.forEach(contract => {
      console.log(`$${contract.BestBuyYesCost.toFixed(2)} for ${contract.Name}`);
    });
  });
```

As of December 3rd, 2016, this would end up returning:

```
Who will be the next confirmed Supreme Court justice?
Current best buy prices are at:

$0.25 for William H. Pryor, Jr.
$0.19 for Diane Sykes
$0.11 for Thomas Lee
$0.10 for Joan Larsen
$0.10 for Raymond Kethledge
$0.08 for Ted Cruz
$0.04 for Allison Eid
$0.04 for Don Willett
$0.02 for Merrick Garland
$0.02 for Thomas Hardiman
$0.03 for Raymond Gruender
$0.02 for Steven Colloton
$0.01 for Sri Srinivasan
$0.03 for David Stras
$0.01 for Barack Obama
```

## Installation
 
In your shell run the following command to install the Node wrapper in your current directory:

```bash
npm install node-predict-it 
```

Then, in the JavaScript file that you are going to be making the API calls, load the module at the top of your script with the following:

```javascript
const predictIt = require('predictIt');
```

## Endpoints and Associated Methods

There are four endpoints that you can make calls to. Each call to the API with this wrapper will return a Promise.

### All Markets: `.all`

The endpoint that would display every market and its corresponding contracts is 

```
https://www.predictit.org/api/marketdata/all
```

You can hit this using the `.all` method. Here is an example below.

```javascript
predictIt.all()
```

Note: This API call can take a considerable amount of time and pulls in about half a megabyte of data.

### Categories: `.category`

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


You can hit this using the `category` command. Here is an example below.

```javascript
predictIt.category(6)
```

### Groups: `.group`

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


You can hit this using the `.group` command. Here is an example below.

```javascript
predictIt.category(82)
```

### Markets: `.market`

The endpoint that would display a single market and its corresponding contracts is: 
```
https://www.predictit.org/api/marketdata/ticker/<ticker-symbol>
```

Replace \<ticker-symbol\> with a ticker symbol from the PredictIt website or from another API call above. It would look something like **SYKES.SCOTUS.NEXTJUSTICE**.

You can hit this using the `.market` command. Here is an example below.

```javascript
predictIt.market('USPREZ16')
```

Across these different endpoints data is updated only every sixty seconds.

## Additional Methods

### `.contract`

If you make a market call with a contract string you will end up getting back extra data that you might not need. A contract string, like 'TRUMP.USPREZ16', used with the `.market` method will return all contracts from the 'USPREZ16' market. If you called 'USPREZ16' on it's own you might receive data on contracts you might not be interested about including 'CLINTON.USPREZ16' and 'STEIN.USPREZ16'. The `.contract` method will give you solely back that contract's data.

```javascript
predictIt.contract('TRUMP.USPREZ16')
```


## Glossary

* **Market**: A market may have multiple contracts below it or only have one the outcome only has two possible outcomes. A market will ask ask a specific question, for example: "Which party will control the US House after the 2018 midterm elections?" or "Who will win the 2016 Republican Presidential Primary?"
* **Contract**: Each market contains individual contracts. They refer to the different possible outcomes of the market. For example, within a market asking the question "Which party will win Michigan in the 2016 presidential election?" you could bet on a contract of whether the Democrats will win or whether the Republicans will win.
* **Category**: The largest bin under which PredictIt sorts their markets. E.g., *US Politics*. Each category also has subcategories, or groups.
* **Group**: Each category also contains a number of markets, and is itself contained by a category. An example would be the *Electoral College*

For more information about the PredictIt API please head to [their site](https://predictit.freshdesk.com/support/solutions/articles/12000001878-does-predictit-make-market-data-available-via-an-api-) to understand more - but take in mind that their documentation is sparse. I am not affiliated with [PredictIt.org](https://predictit.org).


## Testing

To run the included tests make sure you have installed the developer dependencies and then run:

```bash
npm test
```

This will run the tests using [Jest](https://facebook.github.io/jest/).

