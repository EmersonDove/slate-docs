# Jesse-AI

Slate can integrate with Jesse-AI to upload your backtests to the cloud, so you can view more advanced metrics, share
your backtest, compare with other backtests, and more.

Here's how:

## Backtesting your Jesse-AI strategy

You need to check the "Export JSON" option in the Jesse-AI backtesting form. Then run your backtest as normal. 
Once it completes, Jesse will print the path to the JSON file.

## Uploading to Slate

The JSON file exported from Jesse contains all the information Slate needs.

Initialize slate, then pass the path to the exported JSON file to the `slate.integrations.jesse.post_backtest` method.

```python
# first, initialize slate
slate = slate.Slate()

# call post_backtest with the path to the exported JSON file.
slate.integrations.jesse.post_backtest('path/to/backtest.json')
```

You're done! Open up your model on the platform to view, share, and compare your backtest.
