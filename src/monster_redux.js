//______________________________________________________________ REDUX
import {createStore} from 'redux';


// это редюсер он нужен для перебора вариантов
// и выполнении действий с данными в случае совпадений
function playList(state=[], action) {
  if(action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state
}
// это стор в него передаем редюсер
// нужен для того, чтобы редакс знал о наших событиях и действиях

const store = createStore(playList);

//______________________________________ нужны для отрисовки приложения
const btn         = document.querySelector('#addTrackBtn'),
      inputValue  = document.querySelector('#input').value,
      writeToList = document.querySelector('#writeToList'),
      li          = document.createElement('li');
//______________________________________ нужны для отрисовки приложения

// метод сабскрайб нужен для того, чтобы подписаться на стор
// нужен для колбек функций при изменении стора
store.subscribe(()=> {
  console.log(store.getState());
  // для каждого трека (элемента массива)
  // записываем названия трека в елемент списка
  // и вставляем в список
  // предварительно очищаем элемент списка и сам инпут
  li.innerHTML = '';
  inputValue = '';
  store.getState().forEach((track) => {
    li.textContent = track;
    writeToList.appendChild(li);
  })

})

// метод диспатч нужен для вызова событий
// в аргумент передаем нужный нам экшен
// его ТИП увидет редюсер
// и в зависимости от данных переданых нами в пейлоад(полезная нагрузка)
// редюсер решит что делать с состоянием
store.dispatch({type:'ADD_TRACK', payload: 'Smells like spirit'})

//______________________________________________________________ REDUX


btn.addEventListener('click', () =>{
  store.dispatch({type: 'ADD_TRACK', payload: inputValue});
})
