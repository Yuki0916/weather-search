import { combineReducers } from 'redux'
import {
  SEARCH_RESULT,
  CLEAN_SEARCH_REPOSITORY,
  ERROR_HANDEL,
  LOADING_ON,
  LOADING_OFF,
} from './actions'

function dataStore(
  state = {
    QueryString: '',
    ErrorMessage: '',
    Loading: false,
    Dialog: {
      ErrorMessage: '',
    },
    WeatherResultList: [],
  },
  action
) {
  switch (action.type) {
    case SEARCH_RESULT:
      if (action.data.cod === '404') {
        return {
          ...state,
          Dialog: {
            Message: action.data.message,
          },
        }
      }
      return {
        ...state,
        WeatherResultList: [
          {
            Name: action.data.name,
            ID: action.data.id,
            Temp: Math.round(action.data.main.temp - 273.15),
            Weather: action.data.weather[0],
            WeatherPicture: `http://openweathermap.org/img/w/${
              action.data.weather[0].icon
            }.png`,
          },
          ...state.WeatherResultList.filter(item => item.ID !== action.data.id),
        ],
      }

    case CLEAN_SEARCH_REPOSITORY:
      return {
        ...state,
        Dialog: {
          BranchList: [],
          CommitList: [],
          RepositoryName: '',
        },
      }
    case ERROR_HANDEL:
      console.error(`ERROR_HANDEL ${action.data}`)
      return {
        ...state,
        Dialog: {
          Message: action.data,
        },
      }
    default:
      return state
  }
}

function pageControl(
  state = {
    Loading: false,
    Dialog: false,
  },
  action
) {
  switch (action.type) {
    case LOADING_ON:
      return {
        ...state,
        Loading: true,
      }
    case LOADING_OFF:
      return {
        ...state,
        Loading: false,
      }
    case CLEAN_SEARCH_REPOSITORY:
      return {
        ...state,
        Dialog: false,
      }
    case SEARCH_RESULT:
      if (action.data.cod === '404') {
        return {
          ...state,
          Dialog: true,
        }
      }
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({ dataStore, pageControl })

export default rootReducer
