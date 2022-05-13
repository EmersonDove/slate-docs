# Model Embedables

To begin utilizing Slate Widgets, **ensure** that preview link feature is toggled before attempting any of the below. If you need assistance finding this toggle, please refer to the ```Sharing Models``` section for more information.

Next, for the ```src``` section of your ```<iframe />``` or other similar component, you will be utilizing the ```/embed/[type]``` route from [app.blankly.finance](app.blankly.finance). Examples are shown below and the query parameters are further elaborated below.

| Query Parameter | Required? | Value  | Description                                                  |
| :-------------- | --------- | ------ | ------------------------------------------------------------ |
| id              | yes       | string | Your user ID or team ID. This can be found both in your URL immediately after the base url ```/[id]``` and under the General Settings tab on your dashboard. |
| modelId         | no        | string | The model ID associated with your model. This can be found in the URL after your user ID or team ID  ```/[id]/[modelID]``` or in the General Model Settings tab within your model as well. |
| modelIds        | no        | string | Utilizes the same model IDs described above. However, this parameter allows you to embed multiple models which the user can switch between within the embed. This must be formatted in either ```modelIds=[id1],[id2]``` or ``modelIds=[id1]&modelIds=[id2]...`` format. |
| options         | no        | number | A small identifier given to you to better style your embed to your needs. Please refer to the ```Embed``` section |



Example for single model: ```http://app.blankly.finance/embed/model?id=[id]&modelId=[id]&option=[X]```

Example for multiple models: ```http://app.blankly.finance/embed/model?id=[id]&modelIds=[id1],[id2]&option=[X]``` or  ```http://app.blankly.finance/embed/model?id=[id]&modelIds=[id1]&modelIds=[id2]&option=[X]```

Make sure to **not** include the brackets in your actual url. If you see any errors displayed in your embed, please refer to the errors section within the ```embed``` section.