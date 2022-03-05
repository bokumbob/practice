import React from 'react';
import PropTypes from 'prop-types';

const Test1Sub = ({id, label, text, handleChange, ...rest}) => {
    //rest는 객체 배열 함수를 파라미터를 사용한다
    // ...rest로 그 외 나머지 값 전부를 rest라는 객체에 모아줌
    // js 나머지 연산자
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} value={text} onChange={handleChange} {...rest} />
        </div>
    );
};

Test1Sub.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  };

export default Test1Sub;