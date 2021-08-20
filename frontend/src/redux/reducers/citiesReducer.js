const citiesReducer = (state = {citiesList: [], filteredCities: [], chosenCity: {}}, action) =>{
    switch(action.type){
        case 'GET_ALL_CITIES':
            return {
                ...state,
                citiesList: action.payload,
                filteredCities: action.payload
            }
        case 'GET_FILTERED_CITIES':
            let filtered = state.citiesList.filter((city)=> city.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return {
                ...state,
                filteredCities: filtered
            }
        case 'GET_ONE_CITY':
            let chosen = state.citiesList.find((city)=>city._id === action.payload)
            return {
                ...state,
                chosenCity: chosen
            }
        default:
            return state
    }
}

export default citiesReducer