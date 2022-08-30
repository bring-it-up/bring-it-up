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