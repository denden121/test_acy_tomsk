import React from 'react';
import './ModelWindowSave.css'

const ModelWindowSave = (props) =>{
    return(
        <div>
            <div className={'model-title'}>Редактирование сотрудника</div>

            <input id={'name-save'} type="text" placeholder={'Введите имя сотрудника'}/>
            <input id={'surname-save'} type="text" placeholder={'Введите фамилию сотрудника'}/>
            <button onClick={props.onClickButtonEdit}>Сохранить</button>
        </div>
    )
}

export default ModelWindowSave;