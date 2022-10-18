import React, { Component } from "react";
import ScrollToTop from "./ScrollToTop";
import dumplings from "./images/dumplings.jpg";
import List from "./LandingPage/List";

const axios = require('axios');

export class RetrieveList extends Component {
    constructor() {
        super();
    
        this.state = {
          userInput: null,
          collectiondata: null,
          loaded:false, 
          listData: null,
          displayList: null,
          displayListTitle: null,
          displayListID: null,
        };
    
        this.onChange = this.onChange.bind(this);
      }
      async componentDidMount() {
        await this.getCollectionData();
        this.setState({loaded: true})
        console.log("data loaded");
      }
    onChange = (e) => {
        this.setState({
          userInput: e.target.value,
        });
      };

    onClick = (e) => {
        const {collectiondata, userInput} = this.state; 

        const filteredSuggestions = collectiondata.filter(
            (suggestion) =>
              suggestion.id.toString() === userInput
            
          );
        console.log(filteredSuggestions);
        if(filteredSuggestions.length === 1 ) {
            this.setState({
                displayList : filteredSuggestions[0].reslist,
                displayListTitle: filteredSuggestions[0].name,
                displayListID: filteredSuggestions[0].id,
                
            })

        }
    }
    async getCollectionData () {
        axios.get('https://elsa-g-backend.herokuapp.com/collections').then(resp => {
            this.setState({collectiondata : resp.data})
        });
    }

    
      
  render() {
    const {userInput, loaded,displayList, displayListTitle } = this.state;
    return (
    loaded? 
      <div className="h-full m-0" style={{ minWidth: "1000px" }}>
        <ScrollToTop />
        <div className="flex flex-row items-center justify-center">
          <div className="absolute w-screen h-screen z-0">
            <img src={dumplings} alt="dumplings"/>
          </div>
          <div className="p-10 w-screen h-screen z-10 items-start justify-center">
          <div className="flex justify-center flex-row ">

          <input 
                type="text"
                autoComplete="off"
                id="listItemName"
                name="listItemName"
                placeholder="Retrieve by id"
                className="w-1/2 border-2 h-12 rounded bg-gray-200 hover:bg-white focus:bg-white focus:border-green-500"
                onChange={this.onChange}
                value={userInput}

            />      
            <button 
                className=" btn btn-primary mx-2 py-2 px-4 h-12  text-white font-semibold bg-purple-500 rounded bg-white"
                onClick={this.onClick}
            >
            Retrieve
          </button>
          </div>
          <div className ="w-full flex justify-center">

          
            {displayList? <List title={displayListTitle} listItems={displayList} />: null}
            </div>
          </div>
        </div>
      </div>
      :null
    );
  }
}

export default RetrieveList;
