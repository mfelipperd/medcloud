import React, { useState } from 'react';
import style from '../Styles/Formulario.module.css';
import api from '../api';

function Form() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');

  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      name,
      birthDate,
      email,
      adress,
    };
    const response = await api.post('/records', data);
    return response;
  };

  return (
    <div className={style.main}>
      <div className={style.width}>
        <form action="" className={style.formulario}>
          <fieldset>
            <legend>CADASTRO</legend>
            <label htmlFor="name" className={style.name}>
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                className={style.name}
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="adress">
              <input
                type="text"
                name="adress"
                value={adress}
                placeholder="Endereço"
                onChange={(e) => setAdress(e.target.value)}
              />
            </label>
            <label htmlFor="birthDate">
              <input
                type="date"
                name="birthDate"
                placeholder="dd-mm-yyyy"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </label>
            <label htmlFor="submitButtom">
              <button type="submit" onClick={submitData}>
                {' '}
                Enviar
                {' '}
              </button>
              <button type="submit">
                {' '}
                Consultar
                {' '}
              </button>
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Form;
