# Production Checklist

There are a couple of things that you should double check before deploying to production. 

## Are you managing previously open orders? 

Keep in mind that when running live, you typically will have to manage open orders especially if you are redeploying your trading algorithm. This can be mitigated in two ways. 

### Handle During Initialization

Ensure that your order tracker accurately keeps track of previous orders and handles them appropriately (checking and validating any booleans stating that you have a position, etc.)

### Handle During Model Teardown

Any time that your model finishes running, ensure that all positions are exited or that all positions are properly handled in the right way. 

## Have you paper traded before putting in real money? 

Ensure that you test your model in paper trade mode before going live with real money. Testing in a backtest environnment is very different from a production environment especially with different data feeds, order execution and more. If your model relies on accurate order execution (arbitrage), then your live trading strategy may not result in the same output as your backtest.

Blankly has the ability to easily test paper trading using Sandbox Trading that can be found [here](https://docs.blankly.finance/getting-started/sandbox_trading)

## Have you funded your brokerage account enough? 

Depending on how much cash you have at hand and in your account, ensure that your model has ample cash to be able to execute the specific data that you like. 

## Did you make sure all your data loads in correctly?

Remember, you're not loading in from a CSV or static dataset anymore, you're loading in from live data, ensure that your OHLCV data is up to date and your market orders are truly going through and executing where you are.