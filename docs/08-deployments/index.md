# Deploying Models

To deploy models, simply run 

```bash
$ blankly deploy
```

This will deploy your trading algorithm to the cloud and will ask for specific configurations into how you want to deploy your model (including how much CPU, RAM you want, name of the model description). Following the prompts in the CLI will get you up and running in no time. 

We handle all of the log collection, hosting for you, so you can focus on building more trading algortihms. All CI/CD is also handled by simply running `blankly deploy` whenever you are ready. 