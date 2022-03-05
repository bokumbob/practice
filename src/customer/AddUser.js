import React from 'react';

const AddUser = () => {
    return (
        <form>
            <h2>명단 추가</h2>
            <p>
                <label>이름</label>
                <input type="text" />
            </p>
            <p>
                <label>주소</label>
                <input type="text" />
            </p>
            <button>추가</button>
        </form>
    );
};

export default AddUser;