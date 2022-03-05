import React from 'react';
import ItemUser from './ItemUser'

const ListUser = ({users, onDel, onEdit}) => {
    return (
        <div>
            <h2 className='users'>퍼케몬 완장대</h2>
            <table>
                <colgroup>
                <col className='w1' />
                <col className='w2' />
                <col className='w3' />
                </colgroup>
                <thead>
                <tr>
                    <th>이름</th>
                    <th>주소</th>
                    <th>관리</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map(users => <ItemUser key={users.id} users={users} onDel={onDel} onEdit={onEdit} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListUser;