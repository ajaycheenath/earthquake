import React, { Component } from 'react';
import appStyle from "../css/app.css";
import RightDrawer from "../uic/RightDrawer";
import RangeSelector from "../uic/RangeSelector";
import Content from "../uic/Content";
import Button from "../uic/Button";
import EarthQuakePlaces from "./EarthQuakePlaces";
import EarthQuakeList from "./EarthQuakeList";
import {getAllEarthquakes, getAllEarthquakesMarkers, getAllEarthquakesPlaces, getMagnitudeRange, setMapCenter, resetMapCenter} from "../config/Utils";

//This component shows three header its Over section, Magniture section and Affected places info
class EarthquakesDetails extends Component {

  constructor (props) {
    super(props);
    //Abstracted out earthquakes and map details so that in future we can move those into components without disturbing EarthquakesDetails component
    const earthquakes = getAllEarthquakes();
    const markers = getAllEarthquakesMarkers();
    const earthquakePlaces = getAllEarthquakesPlaces();
    const magnitudeRange = getMagnitudeRange();
    this.state = {
      showMagnitudes: false,
      magnitudeFilter: undefined,
      showEarthQuakeList: false,
      showPlaces: false,
      id: undefined,
      earthquakes,
      markers,
      earthquakePlaces,
      magnitudeRange
    }
  }
  //method to display magnitue range selection
  renderMagnitudeRangeSelection () {
    const {magnitudeFilter, magnitudeRange} = this.state;
    const {min, max} = magnitudeRange;
    const minumRange = Math.floor(min);
    const maximumRange = Math.floor(max);
    return <RangeSelector start={minumRange} end={maximumRange} selectedRange={magnitudeFilter} onClick={this.showEarthquakesOfMagnitude}/>
  }

  showEarthquakesOfMagnitude = (magnitudeFilter) => {
    const {earthquakes, markers} = this.state;
    this.setState({showMagnitudes: false, magnitudeFilter, selectedPlace: undefined, selectedID: undefined});
    earthquakes.map( (earthquake, index) => {
        const {magnitude} = earthquake;
        if(!magnitudeFilter || Math.floor(magnitude) === magnitudeFilter) {
            markers[index].setVisible(true);
        } else {
          markers[index].setVisible(false);
        }

    });
    resetMapCenter();
  }

  showEarthQuakesPlaceOnMap = (selectedPlace) => {
    const {earthquakes, markers} = this.state;
    this.setState({selectedPlace, magnitudeFilter: undefined, selectedID: undefined});
    earthquakes.map( (earthquake, index) => {
        let setCenter = true;
        const {id, coords1, coords2} = earthquake;
        if(earthquake.place.endsWith(selectedPlace)) {
            markers[index].setVisible(true);
            if(setCenter){
              setCenter = false;
              setMapCenter(coords2, coords1);
            }
        } else {
          markers[index].setVisible(false);
        }
    });
    this.setState({showPlaces: false});//Close the places drawer after slection
  }

  showMagnitudes = () => {
    this.setState({showMagnitudes: true});
  }
  //Shows a specific earthquake area / place on google map
  showEarthQuakeOnMap = (selectedID) => {
    const {earthquakes, markers} = this.state;
    this.setState({selectedID, showEarthQuakeList: false, selectedPlace: false, magnitudeFilter: undefined});
    earthquakes.map( (earthquake, index) => {
        const {id, coords1, coords2} = earthquake;
        if(selectedID === id) {
            markers[index].setVisible(true);
            setMapCenter(coords2, coords1);
        } else {
          markers[index].setVisible(false);
        }
    });
  }

  showEarthQuakeList = (flag) => {
    this.setState({showEarthQuakeList: flag});
  }

  showPlaces = (flag) => {
    this.setState({showPlaces: flag});
  }

  displayShowMeAllLink () {
    const {magnitudeFilter, selectedID, selectedPlace} = this.state;
    return magnitudeFilter != undefined ||  selectedID != undefined || selectedPlace != undefined;
  }

  render() {
    const {showMagnitudes, showEarthQuakeList, showPlaces, selectedPlace, selectedID, earthquakes, magnitudeRange, earthquakePlaces} = this.state;
    const {min, max} = magnitudeRange;
    const minumRange = Math.floor(min);
    const maximumRange = Math.ceil(max);
    return (
      <div>
        <div className="col-md-4">
          <h3 className="text-center">In 24 Hours</h3>
          <div className="text-center">There were <span className={appStyle.scale} onClick={() => this.showEarthQuakeList(true)}>{earthquakes.length}</span> earthquakes reported. </div>
          {this.displayShowMeAllLink() && <div className="text-center"><a href="#" className={appStyle.specialLink} onClick={() => this.showEarthquakesOfMagnitude(undefined)}>show me all</a></div>}
        </div>
        <div className="col-md-4">
            <h3 className="text-center">Magnitude</h3>
            <div className="text-center">Ranging from {min} to {max}</div>
            <div className={appStyle.space}></div>
            <div className="text-center">{this.renderMagnitudeRangeSelection()}</div>
        </div>
        <div className="col-md-4">
            <h3 className="text-center">Places</h3>
            <div className="text-center">Around the globe <span className={appStyle.scale} onClick={() => this.showPlaces(true)}>{Object.keys(earthquakePlaces).length}</span> places got affected.</div>
        </div>
        <EarthQuakePlaces earthquakes={earthquakes} earthquakePlaces={earthquakePlaces} show={showPlaces} selectedPlace={selectedPlace} onClose={() => this.showPlaces(false)} showEarthQuakesPlaceOnMap={this.showEarthQuakesPlaceOnMap}/>
        <EarthQuakeList earthquakes={earthquakes} show={showEarthQuakeList} onClose={() => this.showEarthQuakeList(false)} showEarthQuakeOnMap={this.showEarthQuakeOnMap} selectedID={selectedID}/>
      </div>
    );
  }
}

export default EarthquakesDetails;
