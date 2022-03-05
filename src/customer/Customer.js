import React, { useReducer, useRef, useState } from 'react';
import './style.css'
import AddUser from './AddUser'
import ListUser from './ListUser'
import EditUser from './EditUser'

// ref로 고유번호도 주자

const useData = [
    {id:1, name:'김첨지', addr:'서울'},
    {id:2, name:'휘두지', addr:'부산'},
    {id:3, name:'모다피', addr:'광주'},
    {id:4, name:'파이리', addr:'인천'},
    {id:5, name:'꼬부기', addr:'제주'},
]

const Customer = () => {
    const [users, setUsers] = useState(useData)
    const [isEdit, setIsEdit] = useState(false)
    const no = useRef(users.length + 1)

    const onEdit = () => {}
    const onAdd = () => {

    }

    const onDel = (id) => {
        setUsers(users.filter(item => item.id !== id))
    }
    return (
        <div className='Customer'>
            {/* <AddUser /> */}
            {isEdit ? <EditUser /> : <AddUser />}
            <ListUser users={users} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;