import {
    sendPost
} from "./api_helper.mjs";
import generateRandomValueInstance from "./generateRandomValue_helper.mjs"
import "dotenv/config.js";
import assert from 'assert';
import {
    report
} from "./report.mjs";

let url = process.env.host + "objects"
let header = {
    "Authorization": `${process.env.access_token}`
}

let name = generateRandomValueInstance.setRandomValue(9) + ' ' + generateRandomValueInstance.setRandomValue(12);
let price = generateRandomValueInstance.generateDynamicValue(4);
let body = {
    "name": name,
    "data": {
        "year": 2019,
        "price": price,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
    }
}

let response = await sendPost({
    url: url,
    header: header,
    body: body
})

// console.log(body);
// console.log(response.data)
let response2 = await sendPost({
    url: url,
    header: header
})

try {
    console.log("negative scenario success");
    assert.equal(response2.status, 415, "data is not match");
    assert.equal(response2.data.error, "415 Unsupported Media Type. The 415 status code indicates that the origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource. One of the examples of getting 415 would be sending a request with a Content-Type header which is not equal to application/json", "data is not match");
    report({
        response: response2.data,
        statusCode: response2.status,
        result: "passed"
    })

    console.log("positive scenario success");
    assert.equal(response.data.name, name, "data is not match");
    assert.equal(response.data.data.price, price, "data is not match");
    report({
        response: response.data,
        statusCode: response.status,
        result: "passed"
    })


    // console.log("positive scenario failed");
    // assert.equal(response.data.name, "i mac pro", `data is not match actual: ${response.data.name}, expected: i mac pro`);
    // assert.equal(response.data.data.price, "1222", `data is not match actual: ${response.data.data.price} expected: 1222`);


    console.log("negative scenario failed");
    assert.equal(response2.status, 409, "data is not match");
    assert.equal(response2.data.error, "400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.", "data is not match");
} catch (error) {
    report({
        response: response2.data,
        statusCode: response.status,
        result: "failed"
    })
}