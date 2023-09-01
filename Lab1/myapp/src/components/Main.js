import React, { Component } from "react";
import { Films } from "../shared/ListOfFilms";
import FilmsPresentation from "./FilmsPresentation";
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            Films: films
        };
    }

    render() {
        return <FilmsPresentation Films={this.state.Films} />
    }

}
export default Main;