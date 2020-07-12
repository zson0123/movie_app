import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location);
  }

  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <div className="detail">
          <img src={location.state.poster} alt={location.state.title}></img>
          <div className="detail_content">
            <div className="detail_title">
              <h3>
                {location.state.title}{" "}
                <span className="detail_year">({location.state.year})</span>
              </h3>
            </div>
            <div className="detail_summary">
              <p>
                <strong>
                  <em>Summary:</em>
                </strong>{" "}
                {location.state.summary}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
