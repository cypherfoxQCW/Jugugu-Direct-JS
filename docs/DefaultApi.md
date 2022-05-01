# OpenapiJsClient.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**isPhoneRegPost**](DefaultApi.md#isPhoneRegPost) | **POST** /IsPhoneReg | 检查手机号是否注册
[**juguguLoginCodeandReturnInfoPost**](DefaultApi.md#juguguLoginCodeandReturnInfoPost) | **POST** /Jugugu_LoginCodeandReturnInfo | ①获取验证码图片
[**jugugugRegAndVerifyandReturnInfoPost**](DefaultApi.md#jugugugRegAndVerifyandReturnInfoPost) | **POST** /Jugugug_RegAndVerifyandReturnInfo | ③注册Jugugu



## isPhoneRegPost

> InlineResponse200 isPhoneRegPost(opts)

检查手机号是否注册

检查手机号是否注册，返回“true”和“false”字符串

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';

let apiInstance = new OpenapiJsClient.DefaultApi();
let opts = {
  'inlineObject': new OpenapiJsClient.InlineObject() // InlineObject | 
};
apiInstance.isPhoneRegPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## juguguLoginCodeandReturnInfoPost

> InlineResponse2001 juguguLoginCodeandReturnInfoPost(opts)

①获取验证码图片

获取用于防御机器人的验证码图片，phone的传参必须为空字符串

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';

let apiInstance = new OpenapiJsClient.DefaultApi();
let opts = {
  'inlineObject2': new OpenapiJsClient.InlineObject2() // InlineObject2 | 
};
apiInstance.juguguLoginCodeandReturnInfoPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## jugugugRegAndVerifyandReturnInfoPost

> InlineResponse2001 jugugugRegAndVerifyandReturnInfoPost(opts)

③注册Jugugu

注册jugugu，注意三点 1.phone的传参必须为11位的国内手机号。 2.robotcodeid和robotcode是通过【①】获得 3.code短信验证码通过【②】 4.paymentpassword区块链短密钥，该密钥为用户进行链上交互使用，密钥设置长度&gt;9位，且包含0-1 A-B a-b 已经特殊字符[~!@#$%^&amp;*?_+;&#39;,./\\|·！￥（）{}：“《》？、，。；’”\&quot;《》…-]+

### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';

let apiInstance = new OpenapiJsClient.DefaultApi();
let opts = {
  'inlineObject1': new OpenapiJsClient.InlineObject1() // InlineObject1 | 
};
apiInstance.jugugugRegAndVerifyandReturnInfoPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

