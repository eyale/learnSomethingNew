import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';

// редюсер для приложения
const initialState = [
  'Smells like spirit',
  'Enter sandman'
]
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
  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <input type='text' />
        <button>addTrack</button>
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
  dispatch => ({})
)(App)
