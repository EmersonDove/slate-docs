# Going Live with Blankly Slate

You've created your market-beating strategy. It's performed well on your backtests and has provided you with the metrics that make you feel ready to let it trade live. This guide is going to show you how to deploy your strategy live from the Package to Slate.

This guide assumes you
- Set up your project and model on Slate
- Used the Blankly Package to create your algorithm

If you have not yet set up your project and model on Blankly Slate, check out [this guide](/getting-started/deploying) to learn how to do so.

## Ensure Your Script is Ready For Deployment

Make sure your bot.py runs locally. Common reasons for your script not to run include:
- Switching your code to Binance and non-USD exchanges
- Binance TLD is not being configured correctly
- Using sandbox keys
- Not having shorting enabled on Alpaca
- Switching to Alpaca and trying to trade a crypto asset

If you feel you're running into any of these issues, check out [this guide](/getting-started/deploying) to learn how to fix them.

Additionally, ensure your blankly.Strategy in your bot.py is ready for deployment.
```python
...
strategy.start()
```

Also, make sure you're logged into Blankly locally. If not, run 
``` shell
$  blankly login
```

Finally, before you deploy to Slate, make sure you store all your requirements in your `bot.py` script in a requirements.txt locally.
``` shell
# requirements.txt
blankly
numpy
pandas
scipy
scikit-learn
```

## Deploy your script to Blankly Slate

If your script is ready to be deployed, simply run
```shell
$  blankly deploy
```
You will be prompted with a plan to host your strategy. When you deploy a script, your strategy gets hosted on a server in the cloud. Therefore, you need to choose which CPU and RAM configuration best fits your needs. Additionally, you will need to enter a description of your strategy.

Once you've entered all the required information, your strategy will be up and running in the cloud 🚀