# Backtest Embedables

To begin utilizing Slate Widgets, **ensure** that the **model or backtest** sharing feature is toggled before attempting any of the below. If you need assistance finding this toggle, please refer to the ```Sharing Model``` or ```Sharing Backtests``` sections for more information.

Next, for the ```src``` section of your ```<iframe />``` or other similar component, you will be utilizing the ```/embed/[type]``` route from [app.blankly.finance](https://app.blankly.finance). Examples are shown below and the query parameters are further elaborated below.

| Query Parameter | Required? | Value  | Description                                                  |
| :-------------- | --------- | ------ | ------------------------------------------------------------ |
| id              | yes       | string | Your user ID or team ID. This can be found both in your URL immediately after the base url ```/[id]``` and under the General Settings tab on your dashboard. |
| modelId         | yes       | string | The model ID associated with your model. This can be found in the URL after your user ID or team ID  ```/[id]/[modelID]``` or in the General Model Settings tab within your model as well. |
| backtestId      | yes       | string | The model ID associated with your backtest. This can be found in the URL after your user ID or team ID  and after the model ID at ```/[id]/[modelID]/[backtestID]``` or on your backtest page as the name of the backtest. |
| options         | no        | number | A small identifier given to you to better style your embed to your needs. Please refer to the ```Embed``` section |



Example for backtest: ```http://app.blankly.finance/embed/backtest/embed/backtest?id=[id]&modelId=[id]&backtestId=[id]&option=[X]```

Make sure to **not** include the brackets in your actual url. If you see any errors displayed in your embed, please refer to the errors section within the ```embed``` section.