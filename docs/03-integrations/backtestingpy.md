# backtesting.py

Slate can integrate with backtesting.py to upload your backtests to the cloud, so you can view more advanced metrics,
share your backtest, compare with other backtests, and more.

Here's how:

## Running your backtesting.py strategy

An example backtesting.py `Strategy` is provided here, but if you have another one you want to backtest, you should use
that.

```python
from backtesting import Backtest, Strategy
from backtesting.lib import crossover
from backtesting.test import SMA, GOOG


# SmaCross Strategy from backtesting.py docs
class SmaCross(Strategy):
    n1 = 10
    n2 = 20

    def init(self):
        close = self.data.Close
        self.sma1 = self.I(SMA, close, self.n1)
        self.sma2 = self.I(SMA, close, self.n2)

    def next(self):
        if crossover(self.sma1, self.sma2):
            self.buy()
        elif crossover(self.sma2, self.sma1):
            self.sell()


bt = Backtest(GOOG, SmaCross,
              cash=10000, commission=.002,
              exclusive_orders=True)
result = bt.run()
```

## Uploading to Slate

The `Backtest::run` method returns an object that you can pass to slate to upload your backtest to the cloud.

Initialize slate, and then pass the result object to the `slate.integrations.backtesting.post_backtest` method.

```python
# first, initialize slate
slate = slate.Slate()

# call post_backtest with the `result` object we got from `bt.run()` earlier.
# since backtesting.py has no concept of symbols/tickers and only operates on data, we need to give slate the symbol
# name too.
slate.integrations.backtesting.post_backtest(result, 'GOOG')
```

You're done! Open up your model on the platform to view, share, and compare your backtest.
