# Deploying Your First Model

<iframe width="100%" height="500" src="https://www.youtube.com/embed/gBP6X20E-2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Getting started with the platform is extremely easy and straightforward. Let's walk through it together with Mohnish and his video.

## Installing the Blankly Package

To deploy your very first model, we're going to use `blankly` to do it. The [Blankly Package](https://blankly.finance) helps you rapidly build and deploy trading algorithms at light speed. It has over [750 stars](https://github.com/blankly-finance/blankly) and a [buzzing discord community](https://discord.gg/xJAjGEAXNS). Let's get started by running the following commands.

:::info

You should have Python 3.7, 3.8, 3.9 or 3.10 installed in order to run the next few commands

:::

```bash
$ pip install -U blankly
$ blankly login # this initializes and logs in with the platform
$ blankly init
Proceed with the prompts...
```

:::caution

If you run into an error saying that `blankly init` command not found on windows, make sure that you have properly added your python folder to the path

:::

## Getting Started with Our Model

`$ blankly init` should get us up and running with a model. If you followed the prompts, you should have been asked to add keys and link your model to the platform all from the CLI. Now, heading to the platform, you should see the model that you just created! 

## Uploading a Backtest

Because we've added our keys, we can quickly run a backtest and send it to the platform. In your directory, run:

```bash
python bot.py
```

And you should now receive a beautiful backtest result in the platform.

## Deploying The Bot

To deploy, all we need to do is change our bottom line in `bot.py` from `s.backtest()` to `s.start()`: 

```python title="bot.py"
...

# s.backtest()
s.start() # <-- change to this
````

And now you're all set!