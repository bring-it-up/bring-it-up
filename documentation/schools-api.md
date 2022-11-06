# Public API Methods (Schools)

These docs will only document the school endpoints meant to be used by the client (frontend).

## Overview

| Method     | Resource                    | Description                       |
|:-----------|:----------------------------|:----------------------------------|
| `GET` | [`/schools`](#Get-Schools) | returns a list of schools |
| `GET` | [`/schools/:uid`](#Get-a-School) | returns a single school by `uid` |

---

## Get Schools

`GET` `/schools`

Returns a list of schools.  Use the following URL parameters to filter the services. You may use multiple parameters and multiple values for the same parameter. If multiple values for the same parameter are present, they are treated as an OR condition. Different parameters will form an AND condition.

### Request

Query Params:

| Parameter  | Type         | Description                       |
|:-----------|:-------------|:----------------------------------|
| `uid` | `string` | The unique identifier of the school (e.g "ubc") |
| `name` | `string` | The name of the school (e.g. "University of British Columbia - Vancouver" |
| `abbreviation` | `string` | The abbreviated name of the school (e.g. "UBC Vancouver") |
| `mentalHealthCoverage` | `string` | The mental health coverage provided to students by the school (e.g. "$1500 per policy year" |

### Response

Example response for GET http://localhost:4000/schools:

    [
        {
            "uid": "ubcv",
            "name": "University of British Columbia - Vancouver",
            "abbreviation": "UBC Vancouver",
            "mentalHealthCoverage": "$1250 per policy year"
        }
    ]

### Examples

| Request  | Should Return         | 
|:-----------|:-------------|
|GET http://localhost:4000/schools?uid=ubcv&uid=sfu | Schools with uid=ubcv and uid=sfu |

## Get a School

`GET` `/schools/:uid`

Returns the school with the specified unique identifier.

### Request

Path Params:
- `uid`: the unique identifier of the service

### Response

The response takes the same shape as the response example in the `GET` `/schools` endpoint, except it is a single object
instead of an array.


### Examples

| Request  | Should Return         | 
|:-----------|:-------------|
|GET http://localhost:4000/schools/ubcv | An object containing information about UBC Vancouver |
