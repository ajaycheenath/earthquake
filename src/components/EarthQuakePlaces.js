import React, { Component } from 'react';
import RightDrawer from "../uic/RightDrawer";
import appStyle from "../css/app.css";
import Header from "../uic/Header";
import Content from "../uic/Content";

//This class shows the list of places and the number of earthquakes occurance in a right drawer.
//Also allow user to click on each earthquake place, which will display all the occurances in that place on google map
class EarthQuakePlaces extends Component {

  //use below method if we expect data change after mounting the component
  componentWillReceiveProps(nextProps) {

  }

  render() {
      const {selectedPlace, show, showEarthQuakesPlaceOnMap, onClose, earthquakes, earthquakePlaces} = this.props;
      return (
        <RightDrawer show={show} onClose={onClose}>
          <Header >Earthquake affected {Object.keys(earthquakePlaces).length} places</Header>
          <Content>
            {Object.keys(earthquakePlaces).map( (place, index) => {
              const cardStyle = (selectedPlace == place) ? appStyle.infoCardSelected : appStyle.infoCard;
              return (
                <div key={index} className={cardStyle} onClick={() => showEarthQuakesPlaceOnMap(place)}>
                  <div className={appStyle.placeSelection}><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>  {place} <span className="badge pull-right">{earthquakePlaces[place]}</span></div>
                </div>
              );
            })}
          </Content>
        </RightDrawer>
      );
  }
}

export default EarthQuakePlaces;
