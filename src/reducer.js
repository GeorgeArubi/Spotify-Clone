export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing
    //token: 
    //"BQDIkw5nFR4P8X2hQSGqtEmBSXlSUc9zuuRNbbpRar4Fr4jpXd1kskIgPnJv7JtgO0rCf0qs9j4xCpE8_HS0supPLY78EbbFT9v2S2lQ3QgVFO-7NXQJkLrRfWae9lEk8PzhBYDzBV46YFOG4ls9hyye_frP7Un35M0PIi-fkhr8jWrh"
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }  
            
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
}

export default reducer;