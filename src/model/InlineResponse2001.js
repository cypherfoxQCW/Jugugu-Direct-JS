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

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0.0
 */
class InlineResponse2001 {
    /**
     * @member {String} state
     * @type {String}
     */
    state;
    /**
     * @member {String} msg
     * @type {String}
     */
    msg;
    /**
     * @member {String} phone
     * @type {String}
     */
    phone;
    /**
     * @member {String} virifycodeid
     * @type {String}
     */
    virifycodeid;
    /**
     * @member {String} virifyimage
     * @type {String}
     */
    virifyimage;
    /**
     * @member {String} confluxaddress
     * @type {String}
     */
    confluxaddress;
    /**
     * @member {String} ethaddress
     * @type {String}
     */
    ethaddress;
    /**
     * @member {String} token
     * @type {String}
     */
    token;

    

    /**
     * Constructs a new <code>InlineResponse2001</code>.
     * @alias module:model/InlineResponse2001
     * @param state {String} 响应状态分为：-1,0,1 分别代表响应错误、响应提示、响应成功
     * @param msg {String} 响应状态为-1时该值为错误信息。响应状态为0时，该值为响应提示信息。响应状态为1时该值为空字符串
     * @param phone {String} 
     * @param virifycodeid {String} 验证码图片的ID值
     * @param virifyimage {String} data:image/png;base64
     * @param confluxaddress {String} 树图区块链地址
     * @param ethaddress {String} 以太坊、Arbitrum、polygon、BSC等EVM链地址
     * @param token {String} 用户登录识别令牌，用于后续多个函数的交互，作为输入参数
     */
    constructor(state, msg, phone, virifycodeid, virifyimage, confluxaddress, ethaddress, token) { 
        
        InlineResponse2001.initialize(this, state, msg, phone, virifycodeid, virifyimage, confluxaddress, ethaddress, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state, msg, phone, virifycodeid, virifyimage, confluxaddress, ethaddress, token) { 
        obj['state'] = state;
        obj['msg'] = msg;
        obj['phone'] = phone;
        obj['virifycodeid'] = virifycodeid;
        obj['virifyimage'] = virifyimage;
        obj['confluxaddress'] = confluxaddress;
        obj['ethaddress'] = ethaddress;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('virifycodeid')) {
                obj['virifycodeid'] = ApiClient.convertToType(data['virifycodeid'], 'String');
            }
            if (data.hasOwnProperty('virifyimage')) {
                obj['virifyimage'] = ApiClient.convertToType(data['virifyimage'], 'String');
            }
            if (data.hasOwnProperty('confluxaddress')) {
                obj['confluxaddress'] = ApiClient.convertToType(data['confluxaddress'], 'String');
            }
            if (data.hasOwnProperty('ethaddress')) {
                obj['ethaddress'] = ApiClient.convertToType(data['ethaddress'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }
}



export default InlineResponse2001;

