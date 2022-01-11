import React, { useState } from 'react'
import axios from "axios"

function Home() {

    const [category, setCategory] = useState("");
    const [language, setLanguage] = useState("");
    const [genre, setGenre] = useState("");
    const [sort, setSort] = useState("");



   
    function submitHanddler(e) {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Post request' })
        };

        console.log(category, language, genre, sort);
        alert("Something went wrong")

        try {
            axios.post(`https://hoblist.com/movieList?category=${category}&language=${language}&genre=${genre}&sort=${sort}`)
                .then(response => {
                    console.log(response);

                })

        } catch (e) {
            alert("Something went wrong");
            console.log(e);
        }

    }

    return (
        <>
            <h1>Fill the following.</h1>
            <form onSubmit={submitHanddler}>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" className="form-control" placeholder="eg. movies" onChange={(event) => setCategory(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Language</label>
                    <input type="text" className="form-control" placeholder="eg. kannada" onChange={(event) => setLanguage(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Genre</label>
                    <input type="text" className="form-control" placeholder="eg. all" onChange={(event) => setGenre(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Sort</label>
                    <input type="text" className="form-control" placeholder="eg. voting" onChange={(event) => setSort(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark  btn-block">Post</button>
            </form>
        </>
    )
}

export default Home;
