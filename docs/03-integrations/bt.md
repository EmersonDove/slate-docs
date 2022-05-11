# bt

Slate can integrate with bt to upload your backtests to the cloud, so you can view more advanced metrics, share your
backtest, compare with other backtests, and more.

Here's how:

## Running your backtesting.py strategy

An example bt `Strategy` is provided here, but if you have another one you want to backtest, you should use that.

```
from bt import Strategy, Backtest

data = bt.get('spy,agg', start='2010-01-01')
strategy = Strategy('s1', [bt.algos.RunMonthly(), bt.algos.SelectAll(), bt.algos.WeighEqually(), bt.algos.Rebalance()])
backtest = Backtest(strategy, data)
result = bt.run(backtest)
```

## Uploading to Slate

The `Backtest::run` method returns an object that you can pass to slate to upload your backtest to the cloud.

Initialize slate, and then pass the result object to the `slate.integrations.bt.post_backtest` method.

```python
# first, initialize slate
slate = slate.Slate()

# call post_backtest with the `result` object we got from `bt.run()` earlier.
slate.integrations.bt.post_backtests(result)
```

You're done! Open up your model on the platform to view, share, and compare your backtest.

