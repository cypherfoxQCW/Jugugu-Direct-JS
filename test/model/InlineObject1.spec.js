/**
 * 直接模式
 * 接入jugugu区块链全包的全部接口，访问IP需要连续管理员，添加业务服务器IP
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenapiJsClient);
  }
}(this, function(expect, OpenapiJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenapiJsClient.InlineObject1();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineObject1', function() {
    it('should create an instance of InlineObject1', function() {
      // uncomment below and update the code to test InlineObject1
      //var instane = new OpenapiJsClient.InlineObject1();
      //expect(instance).to.be.a(OpenapiJsClient.InlineObject1);
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new OpenapiJsClient.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property robotcodeid (base name: "robotcodeid")', function() {
      // uncomment below and update the code to test the property robotcodeid
      //var instane = new OpenapiJsClient.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property robotcode (base name: "robotcode")', function() {
      // uncomment below and update the code to test the property robotcode
      //var instane = new OpenapiJsClient.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new OpenapiJsClient.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property paymentpassword (base name: "paymentpassword")', function() {
      // uncomment below and update the code to test the property paymentpassword
      //var instane = new OpenapiJsClient.InlineObject1();
      //expect(instance).to.be();
    });

  });

}));
