# create-spinner

> Create an elegant spinner with ease

## Install

```shell
npm install --save create-spinner
```

## Usage

```js
const createSpinner = require('create-spinner');

const stopSpinner = createSpinner(`Some text`);
return new Promise(function(resolve, reject)  {
    if (err) {
        stopSpinner(false);
        reject(err);
    } else {
        stopSpinner(true);
        resolve();
    }
});
```

## API

### createSpinner(text, first)

Create a spinner and return a function that must be called when you want to stop the spinner.
The function takes a boolean as argument to tell if the operation was successful or not.

#### text

Type: `string`

Text to display

#### first (optional)

Type: `boolean`

If true, don't go to the next line (only useful when you create multiple spinners)

## License

MIT © [Olivier Ligot](http://www.oligot.be/)
