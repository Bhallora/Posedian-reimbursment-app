const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Please Enter your Name'
    }
    if (!values.employeeCode) {
        errors.employeeCode = 'Please Enter your Employee Code'
    }
    if (!values.expenseDetail) {
        errors.expenseDetail = "Details Required"
    }
    if (!values.amount) {
        errors.amount = "Amount must be entered"
    } else if (!/^[0-9]/i.test(values.amount))
        return errors
}
export default validate