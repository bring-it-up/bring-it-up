# Public API Methods

These docs will only document the endpoints meant to be used by the client (frontend).

## Overview

| Method     | Resource                    | Description                       |
|:-----------|:----------------------------|:----------------------------------|
| `GET` | [`/counselling-services`](###get-counselling-services) | returns a (filtered) list of counselling services |
| `GET` | [`/counselling-services/:id`](###get-a-counselling-service) | returns a single counselling service by `id` |

---

## Get Counselling Services

`GET` `/counselling-services`

Returns a list of counselling services. Use the following URL parameters to filter the services. You may use multiple parameters and multiple values for the same parameter. If multiple values for the same parameter are present, they are treated as an OR condition. Different parameters will form an AND condition.

### Request

Query Params:

| Parameter  | Type         | Description                       |
|:-----------|:-------------|:----------------------------------|
| `school` | `string` | The school that a service belongs to, ex: "UBC" or "SFU" |
| `isAllDay` | `boolean` | Whether or not the service is available 24/7 |
| ... more | | |

### Response

...

### Examples

...


## Get a Counselling Service

`GET` `/counselling-services/:id`

Returns the counselling service with the specified ID.

### Request

Path Params:
- `id`: the ID of the service

