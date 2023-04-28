const React = require('react');
const Default = require('./layouts/default');

const Show = ({ bread,index }) => {
    console.log(bread.name);
    return(
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
                have gluten.
            </p>
            <img width="480" src={bread.image} alt={bread.name}/>
            <li>
                <a href='/breads'>Go home</a>;

            </li>
            
            
                <form action={`breads/${index}?_method=DELETE`}method="POST"></form>
                <input type="submit" value="DELETE"/>
        </Default>
    );
};

module.exports = Show;