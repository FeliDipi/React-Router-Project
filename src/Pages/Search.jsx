import { useEffect } from "react";

const Search = ({routeParams}) =>
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

export default Search;