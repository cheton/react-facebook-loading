# react-facebook-loading [![build status](https://travis-ci.org/cheton/react-facebook-loading.svg?branch=master)](https://travis-ci.org/cheton/react-facebook-loading) [![Coverage Status](https://coveralls.io/repos/github/cheton/react-facebook-loading/badge.svg?branch=master)](https://coveralls.io/github/cheton/react-facebook-loading?branch=master)

[![NPM](https://nodei.co/npm/react-facebook-loading.png?downloads=true&stars=true)](https://nodei.co/npm/react-facebook-loading/)

The [Facebook loading animation](https://css-tricks.com/the-facebook-loading-animation-in-css) for React.

Demo: https://cheton.github.io/react-facebook-loading

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-facebook-loading](https://github.com/cheton/react-facebook-loading):

  ```
  npm install --save react react-facebook-loading
  ```

2. At this point you can import `react-facebook-loading` and its styles in your application as follows:

  ```js
  import FacebookLoading from 'react-facebook-loading';

  // Be sure to include styles at some point, probably during your bootstraping
  import 'react-facebook-loading/dist/react-facebook-loading.css';
  ```

## Usage

```js
<FacebookLoading
    delay={0}
    duration={800}
    zoom={1}
    style={{ margin: '0 auto' }}
/>
```


## API

### Properties

<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>delay</td>
      <td>Number|String</td>
      <td>0</td>
      <td>Specify a delay for the start of an animation. The value is defined in seconds (s) or milliseconds (ms). If you specify a number, rather than a regular string, it will use <b>ms</b> as the unit.</td>
    <tr>
      <td>duration</td>
      <td>Number|String</td>
      <td>800</td>
      <td>Specify how long an animation takes to complete one cycle. The value is defined in seconds (s) or milliseconds (ms). If you specify a number, rather than a regular string, it will use <b>ms</b> as the unit.</td>
    </tr>
    <tr>
      <td>zoom</td>
      <td>Number</td>
      <td>1</td>
      <td>Specify the zoom level of the content.</td>
    </tr>
  </tbody>
</table>

## License

MIT
