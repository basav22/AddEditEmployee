export function addEmployee(employee) {
    return {
        type: 'ADD_EMPLOYEE',
        payload: employee
    }
}

export function removeEmployee(employee) {
    return {
        type: 'REMOVE_EMPLOYEE',
        payload: employee
    }
}