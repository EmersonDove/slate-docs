# Backtests

Backtests are a core part of the platform and a core part of being able to build a profitable strategy. The strict definition of backtesting is that it utilizes historical data and runs your model as if it was "simulating" it in real-time. Though we won't get into the implications of how to properly backtest well, which you can take a look at all of the resources here: 

* [Key Backtesting Metrics](https://blankly.finance/list-of-performance-metrics)
* [Backtesting Pitfalls - 3 Pitfalls To Avoid](https://blankly.finance/backtesting-pitfalls-to-avoid)
* [Backtesting 101](https://blankly.finance/backesting-101)

And of course the many resources that are found online. 

## How does Blankly Slate help with backtesting? 

### A Unified View of All Your Backtests

You will be running thousands and thousands of backtests. Blankly Slate helps unify the process of being able to store, export, visualize, and compare those backtests to enable you to understand how your algorithm is making trades, what trades have occurred, how it does on risk/reward, how it does compared to a benchmark, and many other questions of the like. We do this by providing a streamlined view of all of your backtests per model and a view of all your metrics right upfront.

You can easily access the backtests by heading over to the `Backtests` tab. 

![Backtest Page](/img/backtests/backtest-page.png)

### Compare Previous Backtests and Backtests Across Models

One of the signature features of Blankly Slate is the ability to easily compare backtests across models and previous backtests. We enable you to compare as many backtests and be able to add benchmarks as well to really figure out how different models act. 

![Compare Backtest](/img/backtests/compare.png)

This can help you analyze different versions of your models, how previous algorithms perform, how they perform different, and ultimately identify what makes your best algorithm the best. 

You can easily compare backtests by clicking the compare button on the backtests page and on an individaul backtest.

:::tip

It's always a good idea to compare your backtests to a wide variety of different models or one of our [starter models](/starter-models) as this can see if you're heading in the direction of true alpha

:::

### Metrics Calculated for You

If you choose to use the [Blankly Package](https://package.blankly.finance) or if you use another library and export backtests (see the [integrations](/integrations/bt)), we automatically calculate additional metrics for you to help you understand your model performance. These metrics include Sharpe, Sortino, Tail Risk Ratio, Calmar, Win Rate % and many more. We also help you calculate rolling metrics as well. These are all easily displayed and categorized for you out of the box. We're always happy to add more if you'd like too :D.

![Metrics](/img/backtests/metrics.png)

:::tip
Understanding all the metrics can be really crazy, check out Investopedia and some of the metrics broken down [in these docs](https://docs.blankly.finance/metrics/metrics)
:::

### Benchmarks that Make Sense

We enable you to easily compare your algorithm to a buy and hold strategy on any asset across exchange. This allows for an easy way to see how your model performs against your base asset and against specific indexes. Simply press the Add Benchmark button on an individual backtest page.

![Benchmarks](/img/backtests/benchmarks.png)

And there's always more to come so stay posted as we continue to build out more features to help empower backtests! 

