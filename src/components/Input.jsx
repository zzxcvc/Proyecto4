const Input = (props) => {
    const { id, type, handleInput} = props

    return(
        <div className="input">
            <label htmlFor={id}></label>
            <input className="form-control"
            type={type || 'password'}
            id={id}
            name={id}
            onChange={(e)=>handleInput(e)}
            />
        </div>
    )
}

export default Input