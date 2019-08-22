import React, { useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {
    title:'',
    director:'',
    metascore: '',
    stars:''
};

const UpdateMovie = props => {
    const [movie, setMovie] = useState();

    
    return (
        <div>
            <h2>Update Item</h2>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="Title"
                    value={movie.title}
                />
                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="Director"
                    value={movie.director}
                />
                <input
                    type="number"
                    name="metascore"
                    onChange={changeHandler}
                    placeholder="Metascore"
                    value={movie.metascore}
                />
                <input
                    type="number"
                    name="stars"
                    onChange={changeHandler}
                    placeholder="Stars"
                    value={movie.stars}
                />
            </form>
        </div>
    )
}

export default UpdateMovie;