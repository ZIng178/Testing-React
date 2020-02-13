import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, wait} from "@testing-library/react"

import StarWarsCharacters from "../components/StarWarsCharacters";


test("Check if previous button works", async()=>{
    const {getByText}= render(<StarWarsCharacters/>);
    let prevCharacter= getByText(/previous/i)
    fireEvent.click(prevCharacter);

    await wait(()=> expect (getByText(/previous/i)));
})

test("Check if Next button works", async()=>{
    const {getByText}= render(<StarWarsCharacters/>);
    let nextCharacter= getByText(/next/i)
    fireEvent.click(nextCharacter);

    await wait(()=> expect (getByText(/next/i)));
})