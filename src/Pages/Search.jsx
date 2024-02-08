import { useEffect } from "react"

export const Search = ({routeParams}) =>
{
    const searchTitle = `You has been search ${routeParams.query}`;

    useEffect(()=>
    {
        document.title = searchTitle;
    }, []);

    return (
        <h1>{searchTitle}</h1>
    )
}