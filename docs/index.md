---
sidebar_position: 1
---

# Introducing Blankly Slate

<blockquote> Blankly is making quantitative finance more accessible for everyone </blockquote>

## The Quick Run-Down

We built the [Blankly Package](https://package.blankly.finance) from the ground up to make it faster than ever to from a trading idea to a production ready live algorithm. However, we knew that we couldn't stop there. There are countless other items that you have to worry about including server instances, internet acess, continuous deployment, data connections, and much more just to ensure that your model is always running live. This is where [Blankly Slate](https://blankly.finance) comes in. Blankly Slate empowers all the work that you've been doing with the Blankly Package or any other trading framework and empowers you to build, backtest, and deploy without having to actively manage the infrastructure when you want to go live. We help keep track of all your backtests, share them across your teammates, compare, and deploy with live metrics, PNL calculations per algorithm, and so much more. 

***We want to build an application that empowers you to focus on building better trading algorithms above all else, not focusing on infrastructure, sharing results, and more, doing research and trading as much as possible.***

### Easily manage all of your backtests across your models

As you work, you're constantly changing your models and your algorithms to adapt. This creates tons and tons of backtests. We introduce the ability of storign all of these backtests as you change your model, creating descriptions of the different runs. This helps look at how your model performs in different conditions, on different tickers, in different markets, and empowers you to gain insights in comparing across models as well (which models outperform in which specific scenarios). The best part of this is that we do this all for you. Simply [export a backtest to us](/backtests/export) or, if you're using the [blankly package](https://github.com/blankly-finance/blankly), run `blankly login`, and you're automatically set such that whenever you run a backtest locally, it immediately gets updated and displayed in the cloud. 

![Manage Backtests](/img/backtests/backtests.png)

### More Metrics -> More Insights: Benchmarks, Comparisons, More...

Not only do we store your backtests, but we calculate even more metrics for you that range from risk/reward ratios, to statistics on your returns, volatility, and much more that to calculate on your own would require extensive amounts of formatting or additional libraries. You can easily compare these metrics across all of your backtests all from one place and one UI and easily add benchmark and their associated metrics as well. 

![Add Benchmarks](/img/backtests/benchmarks.png)

We support all the major cryptocurrencies through Coinbase, OKX, FTX, Kraken, and Binance, all equity markets through Alpaca, and Forex through OANDA. 

![Manage Metrics](/img/backtests/metrics.png)

### Easily Manage Your Live Deployments

One of the most awesome features that we pride ourselves on is being live-first, and being completely free about it. We ensure that all of our exchanges in the package enable you to go from backtesting to live by simply switching one line of code. This is the same with the platform. 

![Live Deployments](/img/live/live-top.png)

By simply running `blankly deploy` if you're using the package, we'll take your code, package it up, and get it ready to deploy in our secure cloud where your algorithm is run isolated and directly connected to the exchange. 

![Live Deployments](/img/live/logs.png)

You can easily manage logs, see live trades and more from our UI without having to go to your brokerage service. You can easily debug your live deployments and start out with [paper trading](https://docs.blankly.finance/getting-started/sandbox_trading#creation) as we easily log all of the errors and your print statements.

![Live Deployments](/img/live/transactions.png)


### All Your Algorithms in One Place

Whether you have an arbitrage trading strategy or a leveraged SPY strategy, or using deep learning to analyze earnings and sentiment, see all of your models in one place. Get an accurate view of what you're trading on and what exchanges you're using all from one unified dashboard.

![Live Deployments](/img/live/dashboard.png)

### Work in Teams, Not Siloes

We support teams right out of the box, easily form a team and get up and running as different people post backtests, manage their own models, and more. You can see other people's results, compare them to your model, and do all kinds of things using the same features as above. 

![Team Creation](/img/live/team-creation.png)

We're constantly adding more things as we listen to all the questions and ideas you all have! Feel free to reach out to us! We're here to help out as much as we can :D.