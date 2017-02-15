import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

// __REDUX_DEVTOOLS_EXTENSION__ это нужно для редакс девтулс
const store = createStore(
    reducer
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)


class App extends Component {
  addTrack() {
      // взяли переменную this.trackInput из атрибута ref в input
      console.log('addTrack', this.trackInput.value)


      //  так мы диспатчим добавление треков через редакс
      this.props.onAddTrack(this.trackInput.value)
      // для того чтобы очищать инпут
      this.trackInput.value = ''
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div>
          {/*
              присвоили в переменную
              this.trackInput значение input
              и теперь мы можем использовать это значение
              внутри компонента по переменной this.trackInput
          */}
        <input type='text' ref={(input) => {this.trackInput = input} } />
        <button onClick={() => this.addTrack.bind(this)}>addTrack</button>
        <ul>
          {
            this.props.tracks.map((track, idx) => {
              <li key={idx}>
                {track}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

// коннект функция декоратор
// принимает в аргумент функции
// mapStateToProps и mapDispatchToProps
// тем самым переводит в проперти(свойства)
// состояние(стейт) или действия/посылки(диспатчи) из редакса
// теперь в переменной tracks содержится наш стейт
// и в компоненте можно достучаться к стейту через переменную tracks
connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    // так нам доступен становится
    // метод onAddTrack
    // через this.props.onAddTrack()
    // в компоненте мы напишем так
    // this.props.onAddTrack(this.trackInput.value)
      onAddTrack: (trackName) => {
          dispatch({
              type: 'ADD_TRACK',
              payload: trackName
          })
      }
  })
)(App)
// dispatch в сторе это второй аргумент = функция
// которая принимает объект методов


//-----------------------------------------------------------------------./reducers/index.js
import {combineReducers} from 'redux';
import tracks from './tracks';
import playlists from './playlists';

export default combineReducers({
    tracks, playlists
});


// ./reducers/tracks.js
const initialState = [
      'Smells like spirit',
      'Enter sandman'
  ]

export default function tracks(state=initialState, action) {
  if(action.type === 'ADD_TRACK') {
    return [...state.tracks, action.payload]
  }
  return state
}

// ./reducers/playlists.js

// редюсер для приложения
const initialState =  [
  'work playlist',
  'home playlist'
]

export default function playlist(state=initialState, action) {
    if(action.type ==='ADD_PLAYLIST') {
        return [...state, action.payload]
    }
}
