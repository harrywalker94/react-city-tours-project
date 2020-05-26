import React, { Component } from "react";
import Tour from "../Tour/tour";
import "./tourList.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    //console.log(id);
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    // Looking for tours in the state, for each and every tour, check for id matches the id we are passing in.
    // If it does match, return the tour, if not remove the tour
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;

    return (
      <section className="tourList">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
