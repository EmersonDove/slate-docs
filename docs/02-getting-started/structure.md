# Understanding Slate Structure

You've just signed up for Blankly Slate and are ready to immerse yourself in the realm of algorithmic trading. This guide will show you how to create your first model with the Blankly Package and upload it to Blankly Slate.
Let's start with some terminology. Models are your trading algorithms that can be backtested and run live. Projects are a collection of models. Think of projects as a folder and models as files in your folder.

## Setting up Your Project on Slate

After logging in, you will be greeted with a welcome screen prompting you to create your project and model. Fill out the name and description of your first project and model. Let our system know what stage you are in with building your trading algorithm and what backtesting framework you are using so it can better guide you. When you're ready, click \"Let's Get Started\" and your first model and project will be created.



You will be redirected to your new project's dashboard. Here you will see your recently created model that has not been pushed to the cloud. Click on your model and you will be prompted with a setup page to get your trading algorithm up to the cloud.

## Setting up Your Model on Blankly Slate

How you get your trading algorithm onto Blankly Slate depends on what stage your algorithm is at and if you are using the Blankly Package or not. For now, we're going to assume you're using the Blankly Package. See our [integrations](/integrations/backtestingpy) to see how to get configured with a different framework.

 ## Preparing Your Model with the Blankly Package

Start by creating a new local directory to contain your model. Next run 

```shell
$  pip install blankly
```
to install the Blankly Package. Depending on your Python configuration locally, it may be easier to install the Blankly Package in an environment management system like Conda. See [Installing the Blankly Package with Conda](https://docs.blankly.finance/getting-started/installation) to create an environment using Conda and install the Blankly Package.

Next, log into Blankly Slate by running 
```shell
$  blankly login
```
A browser tab will pop up prompting you to log in to your account. After logging in, you can close the tab. Once you're back at your terminal, it's time to initialize your trading algorithm. Run
```shell
$  blankly init
```
to create your first trading algorithm. Once prompted, choose your current project with the left-right arrow keys. Then, choose the correct model.

Now, open up the editor of your choice and navigate to the directory you were previously working in. You will see some newly created files. For right now, we're just going to focus on keys.json and bot.py files. bot.py is your trading algorithm script. It is the file to implement your trading strategy, run backtests, and deploy your strategy in real-time. Right now, it just performs a backtest on a simple RSI trading strategy. 

Any algorithm you write will use an exchange's API. To use this API, you will need keys. Your bot.py script currently connects to Coinbase Pro, so if you wish to use it without modification you will need to fetch Coinbase Pro keys. See this [YouTube video](https://www.youtube.com/watch?v=8A-JpVojRvM) to learn how to get Coinbase keys and set them up with the Blankly Package. 

## Uploading Your Model onto Slate

Time to get our first model onto Blankly Slate. To do so, run
``` shell
$ python bot.py
```

And boom 💥. A new browser tab will open up showing the results of your model's backtest. On this page, you'll be able to see your account value through the period specified in your script, various backtesting metrics, and the different transactions that your backtest made.