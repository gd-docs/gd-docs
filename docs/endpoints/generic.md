# Sending Requests

## Requirements

To make a successful request to the Geometry Dash servers, there are a couple factors to consider:

- Cloudflare
- Request Type
- Rate Limits

### Cloudflare
The Geometry Dash servers are protected using a service called [Cloudflare](https://www.cloudflare.com/). In order to send a successful request, bypassing cloudflare is essential. In order to that, you must:

- send the request to the `www.` subdomain,
- send the request with an empty user-agent.

If you don't follow these steps, cloudflare will block the request and you will recieve [error 1020](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1020/).

### Request Type
In 99% of cases, Geometry Dash requires you to send an HTTP `POST` request. The request parameters require the following header: `Content-Type: application/x-www-form-urlencoded`.

### Rate Limits
Sending too many requests at a given time will result in you becoming rate limited and not being able to send any more requests for a certain duration. As the number of requests required to start a rate limit changes, we are unable to provide exact numbers, but as of November 3rd, 2023, they are roughly:
- 20x downloadGJLevel per minute, all other data-retrieval endpoints - 2 per second

However, there are some longer-term limits applied on top of that as well.

## Common Parameters
Several POST params are common across many or almost all requests. Here's a list of them:

| Param         | Type    | Description |
| ------------- | ------- | ----------- |
| secret        | string  | A constant string that is required for a request to go through. See [list of secrets](/reference/secrets.md) |
| gameVersion   | integer | <ParamDesc name="gameVersion"/> |
| binaryVersion | integer | <ParamDesc name="binaryVersion"/> |
| [uuid](/topics/encryption/id#uuid) | integer | <ParamDesc name="uuid"/> |
| [udid](/topics/encryption/id#udid) | string  | <ParamDesc name="udid"/> |
| accountID     | integer | <ParamDesc name="accountID"/> |
| [gjp2](/topics/gjp) | string  | <ParamDesc name="gjp2"/> |
| dvs           | integer | <ParamDesc name="dvs"/> |
| gdw           | boolean | <ParamDesc name="gdw"/> |
| gdl           | boolean | <ParamDesc name="gdl"/> |
