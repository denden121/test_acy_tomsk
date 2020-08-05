import React from 'react';
import './ModelWindowCreate.css'

const ModelWindowCreate= (props) =>{
    return <div className={'model-create'}>
        <div className={'model-title'}>Создание сотрудника</div>
            <input id={'name-create'} type="text"   placeholder={'Введите имя сотрудника'}/>
            <input id={'surname-create'} type="text" placeholder={'Введите фамилию сотрудника'}/>
        <button onClick={props.onClickCreateWorker}>Сохранить</button>
    </div>
}

export default ModelWindowCreate;