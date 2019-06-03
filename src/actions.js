export const SEARCH_RESULT = 'SEACH/RESULT'
export const CLEAN_SEARCH_REPOSITORY = 'SEARCH/CLEAN_REPOSITORY'
export const ERROR_HANDEL = 'ERROR/HANDLE'
export const LOADING_ON = 'LOADING/ON'
export const LOADING_OFF = 'LOADING/OFF'

const fetchSuceess = (resData, inputContent) => ({
  type: SEARCH_RESULT,
  data: { ...resData, inputContent },
})

const errorHandle = failText => ({
  type: ERROR_HANDEL,
  data: failText,
})

const showLoadingPage = () => ({ type: LOADING_ON })
const hideLoadingPage = () => ({ type: LOADING_OFF })

export const fetchSearchRepository = inputContent => async dispatch => {
  try {
    dispatch(showLoadingPage())
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputContent}&appid=bd45fc9db8849cb46d00a451483ccd44
      `
    )
    dispatch(fetchSuceess(await response.json(), inputContent))
    dispatch(hideLoadingPage())
  } catch (err) {
    dispatch(errorHandle(err))
  }
}

export const cleanSearchRepository = () => ({
  type: CLEAN_SEARCH_REPOSITORY,
})
