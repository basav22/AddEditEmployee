export default function employeeList(state, action) {
    let newState = state || [];
    switch(action.type) {
        case "ADD_EMPLOYEE": 
            // Add to localstorage and return
            newState = [...newState, action.payload];
            break;
        case "REMOVE_EMPLOYEE": 
            newState = state.filter( (employee) => {
                return employee.id !== action.payload.id;
            });
            break;
        default: 
            newState = JSON.parse(localStorage.getItem("employeeList"));
    }

    localStorage.setItem("employeeList", JSON.stringify(newState));

    return newState;
}