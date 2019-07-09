import {
    REPORT_UPDATE,
    REPORT_CREATE,
    GET_IMAGE_PREVIEW,
    ERROR_REPORT_UPDATE,
} from '../actions/Types'

const INITIAL_STATE = {
    school: '',
    behaviour: '',
    description: '',
    date: '',
    selectedItems: [],
    data: '',
    errorType: '',
    errorDescription: '',
    loading: false,
}

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case REPORT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case REPORT_CREATE:
            return INITIAL_STATE
        case ERROR_REPORT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case GET_IMAGE_PREVIEW:
            return { ...state, imagePreview: action.payload.data }
        default:
            return state
    }
}