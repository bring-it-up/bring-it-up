import {School} from "../models/school.model";

export function getFilter(key: string, query: any) {
    const regExp : RegExp[] = [];
    if (query && Array.isArray(query)) {
        (query as string[]).forEach(function(opt: string) {
            regExp.push( new RegExp(opt, "i") );
        });
    }

    const filter = query ?
        regExp.length == 0 ?
            { [key]: {$regex: query, $options: 'i'} }
            :
            { [key]: {$in: regExp} }
        :
        {};

    return filter;
}

export function getAggregation(match: any) {
    return [
        match,
        {
            $lookup: {
                from: School.collection.name,
                localField: 'school',
                foreignField: 'uid',
                as: 'school',
            },
        },
        {
            $unwind: {
                path: "$school",
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $project: {
                _id: 0,
                __v: 0,
                'school._id': 0,
                'school.__v': 0,
            },
        },
    ];
}