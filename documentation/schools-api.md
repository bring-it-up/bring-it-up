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

Returns a list of schools.

### Response

Example response for GET http://localhost:4000/schools:

    [
        {
            "_id": "630daa9d4600f06162345015",
            "uid": "ubcv",
            "name": "University of British Columbia - Vancouver",
            "abbreviation": "UBC Vancouver",
            "mentalHealthCoverage": "$1500 per policy year"
        }
    ]


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
