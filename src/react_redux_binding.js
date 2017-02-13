import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';

const initialState = [
  'Smells like spirit',
  'Enter sandman'
]
// редюсер для приложения
function playList(state=initialState, action) {
  if(action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state
}
const store = createStore(playList);

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
    console.log(this.props.testStore);
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
            this.props.testStore.map((track, idx) => {
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
// теперь в переменной testStore содержится наш стейт
// и в компоненте можно достучаться к стейту через переменную testStore
connect(
  state => ({
    testStore: state
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
