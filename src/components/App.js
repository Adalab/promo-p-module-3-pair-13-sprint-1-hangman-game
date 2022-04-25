// SCSS
import '../styles/App.scss';
// IMG
// import logo from '../images/logo.svg';
import { useState } from 'react';

function App() {
  //eventos y estados
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const handleClick = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
    console.log('holi');
  };

  //form
  const [lastLetter, setLastLetter] = useState('');
  const [solution, setSolution] = useState([]);
  const [fail, setFail] = useState([]);
  const [word, setWord] = useState('katakroker');

  const handleInput = (ev) => {
    const newValue = ev.target.value;
    setLastLetter(newValue);
    //validación de letras

    if (newValue.match('[a-zA-ZñÑ]') === null) {
      //isValid = false;
      console.log('Letra no valida', newValue);
    } else {
      if (word.includes(newValue)) {
        //solution.push(newValue);
        setSolution([...solution, newValue]);
        console.log('se mete en soluciones');
      } else {
        //fail.push(newValue);
        setFail([...fail, newValue]);
        console.log('se mete en fail');
      }
    }
  };

  const htmlFail = fail.map((failItem, i) => {
    return (
      <li className='letter' key={i}>
        {failItem}
      </li>
    );
  });

  const wordLetters = word.split('');
  const htmlSolution = wordLetters.map((solutionItem, i) => {
    if (solution.includes(solutionItem)) {
      return (
        <li className='letter' key={i}>
          {solutionItem}
        </li>
      );
    } else {
      return (
        <li className='letter' key={i}>
          {' '}
        </li>
      );
    }
  });

  ///HTML
  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>

        <button className='btn' type='button' onClick={handleClick}>
          Incrementar
        </button>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>{htmlSolution}</ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>{htmlFail}</ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='lastLetter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='lastLetter'
              id='lastLetter'
              value={lastLetter}
              onChange={handleInput}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;

/*

1-
Datos que guardamos en el estado
- La letra introducida por la usuaria
- La solución

2-
El número de errores, ¿lo tenemos que guardar en el estado para poder pintarlo, o lo podemos calcular a partir de otros datos? Calcular a partir de otro datos

El número de errores, ¿cambia siempre que la jugadora añade una letra, o solo cuando añade una letra errónea? solo cuando añade una letra errónea

¿Qué número de errores hay cuando el juego no ha empezado? 0 errores

¿Hay un número de errores mínimo y/o máximo? es lo que ocupe el muñeco 12 errores

¿Hay datos que son conjuntos de datos (como un array o un objeto) o todos los datos son simples o primitivos? si hay datos que son conjunto de datos (array con los datos de la palabra y con la letra que ya hemos usado)
palabra que tiene que adivinar la guardamos en una variable 



3- 
Cuáles son las acciones que hay que hacer al arrancar la página
- Reset para limpiar la página
- Te diga la palabra/solución que no este visible, solo muestre la cantidad de letras 

Cuáles son las acciones que hay que hacer después de un evento de la usuaria.
-Usuaria escriba la letra
-Comprobar si acierta/pierde

Evento 1 gana
- letra añadida a la solución
- no se pinta el muñeco

Evento 2 pierde
- si falla se pinta un palito en el muñeco
- se pinta también en la cantidad de letras falladas 

*/
