import React from 'react';
import PropType from 'prop-types'

function PropsComponent(props){
    return <div>{props.name}</div>
}

PropsComponent.defaultProps = {
    name: "jimmy",
    age:8
}

PropsComponent.propTypes = {
    name: PropType.string,
    age: function(props, propName, componentName){
        if(!/7|8/.test(props[propName])){
            return new Error(
                `invaild prop` + propName + 'asd' + componentName
            )
        }
    },
}

const PropsTypes = () => {
    return (
        <div>
            <PropsComponent />
        </div>
    );
};

export default PropsTypes;