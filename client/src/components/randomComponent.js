import React, { useEffect, useState } from "react";

export default function RandomComponent({str}) {
    const [someData, setsomeData] = useState("");
    const [loading, setloading] = useState(true);

    useEffect(async () => {
        const url = "http://localhost:4000/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setsomeData(data[0].item);
        setloading(false);
    }, []);

    return (<div>{loading ? <div>{str}</div> : <div>{someData}</div>}</div>)
}