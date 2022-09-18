import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <main>
            <h1>Sobre a empresa</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, possimus? Numquam accusantium ullam eveniet ex necessitatibus nam saepe facilis, velit quam animi! Quas praesentium accusamus maxime quae voluptatibus dolore fuga!</p>
            <Link to="/">Home</Link>
        </main>
    )
}