function verifyForm(...inputs) {
    /**
     * @description verify a form input
     * @param inputs {array} inputs of a form
     * @return {boolean} if the form can be sent or not.
     */
    const rightInputs = inputs.filter(({value}) => value.trim()!=='')
    const wrongInputs = inputs.filter(({value}) => value.trim()==='')
    const ERROR_CLASS = 'error'
    const getLabelById = ({id}) => document.querySelector(`[for="${id}"]`)

    inputs.forEach(input => {
        getLabelById(input).classList.remove(ERROR_CLASS)
        input.classList.remove(ERROR_CLASS)
    })

    if(rightInputs.length < inputs.length) {
        wrongInputs.forEach(input => {
            getLabelById(input).classList.add(ERROR_CLASS)
            input.classList.add(ERROR_CLASS)
        })
        return false
    }
    return true
}


export {verifyForm}