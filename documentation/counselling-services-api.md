# Public API Methods (Counselling Services)

These docs will only document the counselling service endpoints meant to be used by the client (frontend).

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
| `school` | `string` | The school that the service belongs to, ex: "UBC" or "SFU" |
| `location` | `string` | The location of the service, if relevant (e.g. "Vancouver" if a service is available in person) |
| `serviceName` | `string` | The name of the service, e.g. "ISC Wellness Program" |
| `organization` | `string` | The name of the organization that the service belongs to, e.g. "UBC Counselling Services" |
| `serviceType` | `ServiceType array` | The type of service offered, one or more of: "Medical", "Counselling", "Crisis", "Wellness", "Workshop" |
| `urgency` | `UrgencyLevel array` | The maximum level of urgency the service caters to, one or more of: "Immediate", "Same Day", "Same Week", "Same Month" |
| `targetClients` | `string array` | The clients the service is targeted towards, e.g. "UBC students" or "Indigenous people, all ages" |
| `specialty` | `string` | The areas the service specializes in, e.g. "Trauma" or "Addiction". The input must be an ID representing the specialty, as defined in [documentation/specialties-api.md](https://github.com/bring-it-up/bring-it-up/blob/8fec92c1e5baa0d7e439be4fd09377f1c0716752/documentation/specialties-api.md) |
| `keywordSearch` | `string array` | This is internal keywords that do not get displayed, meant to refine searches |
| `delivery` | `DeliveryMethod array` | Format(s) in which the service is offered, one or more of: "In person", "Online", "Phone", "App", "Email" |
| `description` | `string` | A description of the service |
| `hours` | `object` | Operating Hours of Service represented as arrays of strings using 24-hr time (e.g. 8:30 PM = '20:30'). '0:00', '23:59' represents open all-day, empty array represents closed on that day, day key must be first 3 letters of day (e.g. Monday = mon) |
| `isFree` | `boolean` | Whether or not the service is free |
| `searchString` | `string` | A user inputted string that will search for matches in all text fields |

### Response

Example response for GET http://localhost:4000/counselling-services?specialty=trauma&school=sfu

    [
        {
            "serviceName": "SFU Indigenous Counsellors",
            "school": {
                "uid": "sfu",
                "name": "Simon Fraser University",
                "abbreviation": "SFU",
                "mentalHealthCoverage": "80% of costs, up to $500 per policy year"
            },
            "organization": "SFU Health & Counselling Services (HCS)",
            "serviceType": [
                "Counselling"
            ],
            "urgency": "Same Month",
            "targetClients": [
                "SFU students"
            ],
            "website": "https://www.sfu.ca/students/health/resources/identity/Indigenous-Students.html",
            "keywordSearch": [],
            "specialty": [
                {
                    "id": "STRESS_AXTY",
                    "label": "Stress/Anxiety"
                },
                {
                    "id": "DEPRESSION",
                    "label": "Depression"
                },
                {
                    "id": "TRAUMA",
                    "label": "Trauma"
                }
            ],
            "delivery": [
                "In Person"
            ],
            "description": "Counselling for Indigenous students is available with Tanu Gamble or Jennifer Reandy. To book an appointment, email isc_well@sfu.ca or learn more about counselling for Indigenous students here.",
            "hours": {
                "mon": [
                    "0:00", "23:59
                ],
                "tue": [
                    "0:00", "23:59
                ],
                "wed": [
                    "0:00", "23:59
                ],
                "thu": [
                    "0:00", "23:59
                ],
                "fri": [
                    "0:00", "23:59
                ],
                "sat": [
                    "0:00", "23:59
                ],
                "sun": [
                    "0:00", "23:59
                ]
            },
            "isFree" : true,
            "secondaryID": "sfu-indigenous-counsellors"
        }
    ]

### Examples

| Request  | Should Return         | 
|:-----------|:-------------|
|GET http://localhost:4000/counselling-services?delivery=app | All services that offer delivery via app (including those that use additional delivery methods) |
|GET http://localhost:4000/counselling-services?delivery=online&school=ubc | All services that are offered online AND have UBC as their associated school |
|GET http://localhost:4000/counselling-services?specialty=STRESS_AXTY&specialty=ADDICTION | All services that specialize in at least one of stress/anxiety OR addiction |


## Get a Counselling Service

`GET` `/counselling-services/:id`

Returns the counselling service with the specified ID.

### Request

Path Params:
- `id`: the ID of the service. Note that the human-readable `secondaryID` should be passed for this parameter.

### Response

Currently, the response takes the same shape as the response example in the `GET` `/counselling-services` endpoint, except it is a single object instead of an array.


### Examples

| Request  | Should Return         | 
|:-----------|:-------------|
|GET http://localhost:4000/counselling-services/isc-wellness-program | An object containing information about the ISC Wellness Program at SFU |
