import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// __REDUX_DEVTOOLS_EXTENSION__ это нужно для редакс девтулс
// composeWithDevTools - добавляет девтулс ко всему что мы запишем внутрь

const store = createStore(
    reducer
    , composeWithDevTools(applyMiddleware(thunk))
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

// создаем функцию findInput для того что бы обрабатывать searchInput

  findInput() {
      console.log('findInput', this.searchInput.value);

      this.props.onFindTrack(this.searchInput.value)
  }

  render() {
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

        <input type='text' ref={(input) => {this.searchInput = input} } />
        <button onClick={() => this.findInput.bind(this)}>Find track</button>

        <ul>
          {
            this.props.tracks.map((track, idx) => {
              <li key={idx}>{track.name}</li>
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


// мы фильтруем именно в коннекте для того, что бы нам возвращалось значение
// согласно результата редюсера filterTracks
connect(
  state => ({
    tracks: state.tracks.filter((track) => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    // так нам доступен становится
    // метод onAddTrack
    // через this.props.onAddTrack()
    // в компоненте мы напишем так
    // this.props.onAddTrack(this.trackInput.value)
      onAddTrack: (name) => {
          const payload = {
              id: Date.now().toString(),
              name
          }
          dispatch({
              type: 'ADD_TRACK',
              payload
          })
      },
      onFindTrack: (name) => {

          dispatch({
              type: 'FIND_TRACK',
              payload: name
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
import filterTracks from './filter.js'

export default combineReducers({
    tracks, playlists, filterTracks
});


// ./reducers/tracks.js
export default function tracks(state=[], action) {
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
    if(action.type === 'ADD_PLAYLIST') {
        return [...state, action.payload]
    }
}

// ./reducers/filter.js

export default function filterTracks(state=[], action) {
    if(action.type === 'FIND_TRACK') {
        return action.payload
    }
    return state;
}
