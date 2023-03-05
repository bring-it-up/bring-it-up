# Public API Methods (Specialties)

These docs will only document the specialty endpoints meant to be used by the client (frontend).

## Overview

| Method     | Resource                    | Description                       |
|:-----------|:----------------------------|:----------------------------------|
| `GET` | [`/specialties`](#Get-Specialties) | returns the list of specialties as an object |

## Get Specialties

`GET` `/specialties`

Returns an object where each property is the specialty's ID, and each value is an object containing attributes for the specialty. The full list of specialties can be found below.

### Request

Query Params: There are no query parameters for this request.


### Response

Example response for GET http://localhost:4000/specialties :

    {
        "STRESS_AXTY": {
            "id": "STRESS_AXTY",
            "label": "Stress/Anxiety"
        },
        "DEPRESSION": {
            "id": "DEPRESSION",
            "label": "Depression"
        },
        ... more
    }


## Full List of Specialties

| id  | label         | 
|:-----------|:-------------|
| STRESS_AXTY | Stress/Anxiety |
| DEPRESSION | Depression |
| TRAUMA | Trauma |
| ACADEMICS | Academics |
| LONELINESS | Loneliness |
| RELATIONSHIPS | Relationships |
| CULTURAL_ADJST | Cultural Adjustment |
| IDENTITY | Identity |
| MTL_HEALTH_DSDR | Mental Health Disorder |
| PHOBIA | Phobia |
| EMOTIONAL_REG | Emotional Regulation |
| PHYSICAL | Physical Well-being |
| COPING_CHANGE | Coping with Change |
| TIME_MGMT | Time Management |
| CRISIS | Crisis |
| ADDICTION | Addiction |
| EATING_DSDR | Eating Disorder |