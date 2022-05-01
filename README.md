# openapi-js-client

OpenapiJsClient - JavaScript client for openapi-js-client
接入jugugu区块链全包的全部接口，访问IP需要连续管理员，添加业务服务器IP
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptApolloClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install openapi-js-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your openapi-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpenapiJsClient = require('openapi-js-client');


var api = new OpenapiJsClient.DefaultApi()
var opts = {
  'inlineObject': new OpenapiJsClient.InlineObject() // {InlineObject} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.isPhoneRegPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenapiJsClient.DefaultApi* | [**isPhoneRegPost**](docs/DefaultApi.md#isPhoneRegPost) | **POST** /IsPhoneReg | 检查手机号是否注册
*OpenapiJsClient.DefaultApi* | [**juguguLoginCodeandReturnInfoPost**](docs/DefaultApi.md#juguguLoginCodeandReturnInfoPost) | **POST** /Jugugu_LoginCodeandReturnInfo | ①获取验证码图片
*OpenapiJsClient.DefaultApi* | [**jugugugRegAndVerifyandReturnInfoPost**](docs/DefaultApi.md#jugugugRegAndVerifyandReturnInfoPost) | **POST** /Jugugug_RegAndVerifyandReturnInfo | ③注册Jugugu


## Documentation for Models

 - [OpenapiJsClient.InlineObject](docs/InlineObject.md)
 - [OpenapiJsClient.InlineObject1](docs/InlineObject1.md)
 - [OpenapiJsClient.InlineObject2](docs/InlineObject2.md)
 - [OpenapiJsClient.InlineResponse200](docs/InlineResponse200.md)
 - [OpenapiJsClient.InlineResponse2001](docs/InlineResponse2001.md)


## Documentation for Authorization

All endpoints do not require authorization.
