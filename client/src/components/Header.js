import PropTypes from 'prop-types';

const Header = ({title, onAdd, statusText}) => {

    const onClick = (e) => {
        console.log('check...')
    }

    const text = statusText ? 'Close' : 'Add'
    const color = statusText ? 'Green' : 'Red'


    return (
        <div>
           <header className = 'header'>
               <h1>{title}</h1>

               <button  
                onClick = {onAdd}
                className = 'btn'
                color = {color}
                style = {{ backgroundColor : 'green'}}
                
                >{text}</button>
               </header>
        </div>
    )   
}
const headingStyle = {
    color : 'red',
    backgroundColor : 'black'

}
Header.defaultProps = {
    title : "Task Tracker",
  
}

Header.propTypes = {
    title : PropTypes.string,
}

export default Header
