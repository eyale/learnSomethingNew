//______________________________ the Action file ______________________________
export const MODIFY_NAME = "MODIFY_NAME";
export const SAVE_NAME = "SAVE_NAME";

/**
* This is the action we will call from our component whenever the user presses a button.
Literally every letter that they will type,
this action will be called with the new value in the text input field. 
Pay attention to the type and payload in this function. 
This is what we will use in the reducer to "modify" our model with the new values.
**/

export const modifyName = (name) => ({
  type: MODIFY_NAME,
  payload: { name }
})

/**
This is the action we will call when the user presses the save name button. 
Notice how we don't pass any value in. 
That is because the reducer already holds that value. 
Also there is no payload. The reason for that is the reducer doesn't need one. 
There is no extra information needed for the reducer step.
Also, normally this would call an api endpoint and all that jazz, 
but for brevity's sake I won't include that.
**/

export const saveName = () => ({
  type: SAVE_NAME
})

//______________________________ the Reducer file ______________________________
// import the actions
import * as constants from 'actions.js'

/**
The initial state is used to define your reducer. 
Usually you would just set this to default values and empty strings. 
The reason this is needed is so that 
when using these values you are guaranteed to at least have some default value. 
Think of it as the default constructor.
**/

const initialState = {
  name: '',
  isSaved: false
}

/**
This action part is the part that will "listen" for emitted actions. 
So the saveName and modifyName functions that we defined earlier will be handled in here. 
The action parameter is what is being returned (the type and payload) in the functions above.
**/

const name = (state=initialState, action) => {
  switch (action.type) {
    /**
      in REDUX the state is immutable. 
      You must always return a new one,
      which is why use the ES6 spread operator
      to copy the values from the states that's passed in.
    **/
    case constants.MODIFY_NAME:
      return {
        ...state,
        name: action.payload.name
      }
    case constants.SAVE_NAME:
      return {
        ...state,
        isSaved: !state.isSaved
      }
    default:
      return {...state}
  }
}
export default name

//__________________________ the Smart component file __________________________

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Name from './presentational/Name';
import * as actions from './actions/name';
/**
Both the actual values 
(name and isSaved) as well 
as the function to call those actions are passed in as props.**/

class NameContainer extends Component {
  render() {
    return (
      <Name
        name={this.props.name}
        isSaved={this.props.isSaved}
        modifyName={this.props.modifyName}
        saveName={this.props.saveName}
      />
    )
  }
}
/**
All this does is get the values that are saved in the reducer, 
and return it to the component so that we can call them using this.props
**/

const mapStateToProps = (state, ownProps) => {
  /**
    using REDUX stores, 
    it allows us to just access the reducer values by going state.name. 
    Notice how name is what is being exported in the reducer above
  **/
  const {name, isSaved} = state.name;
  return {name, isSaved};
  /**
    In mapStateToProps we were mapping the state variables as properties 
    to pass into our presentational component. 
    In mapDispatchToProps we are mapping the action functions to our
     container to be able to pass it into our presentational component.
  **/
}

const mapDispatchToProps = (dispatch) => ({
    modifyName: (name) => {
      dispatch(action.modifyName(name));
    },
    saveName: () => {
      dispatch(action.saveName());
    }
})
/**
  This is the reason we are able to pass in the functions 
  and variables as props to our container. 
  It's the connect function from the react-redux library that does all the magic.
**/
export default connect(mapStateToProps, mapDispatchToProps)(NameContainer);

//__________________________ the Dumb component file __________________________
/**
* the dumb component which will 
use the props passed in from the smart component 
based on a user's actions
 */
 import React, {Component} from 'react';

 class Name extends Component {
   render() {
     return (
       <div>
         <input
           value={this.props.name}
           placeholder='Full Name'
           onChange={(name)=> this.props.modifyName(name)}
         />

         <button onClick={()=> this.props.saveName()}>
            {'Save'}
          </button>
       </div>
     )
   }
 }

 export default Name;
