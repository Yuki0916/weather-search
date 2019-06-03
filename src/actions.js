export const SEARCH_RESULT = "SEACH/RESULT";
export const SEARCH_REPOSITORY = "SEARCH/REPOSITORY";
export const CLEAN_SEARCH_REPOSITORY = "SEARCH/CLEAN_REPOSITORY";
export const ERROR_HANDEL = "ERROR/HANDLE";
export const LOADING_ON = "LOADING/ON";
export const LOADING_OFF = "LOADING/OFF";

const fetchSuceess = (resData, inputContent) => ({
  type: SEARCH_RESULT,
  data: { ...resData, inputContent }
});

const errorHandle = failText => ({
  type: ERROR_HANDEL,
  data: failText
});

const fetchRespositorySuccess = (resBranch, resCommit, repositoryName) => ({
  type: SEARCH_REPOSITORY,
  data: {
    resBranch,
    resCommit,
    repositoryName
  }
});

const showLoadingPage = () => ({ type: LOADING_ON });
const hideLoadingPage = () => ({ type: LOADING_OFF });

export const fetchSearchRepository = inputContent => async dispatch => {
  try {
    dispatch(showLoadingPage());
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputContent}&appid=bd45fc9db8849cb46d00a451483ccd44
      `
    );
    dispatch(fetchSuceess(await response.json(), inputContent));
    dispatch(hideLoadingPage());
  } catch (err) {
    dispatch(errorHandle(err));
  }
};

export const fetchOtherPageRepository = (
  pageNumber,
  queryString
) => async dispatch => {
  try {
    dispatch(showLoadingPage());
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${queryString}&page=${pageNumber}&per_page=10`
    );
    dispatch(fetchSuceess(await response.json(), queryString));
    dispatch(hideLoadingPage());
  } catch (err) {
    dispatch(errorHandle(err));
  }
};

export const fetchRepositoryInformation = (
  repositoryName,
  ownerName
) => async dispatch => {
  try {
    dispatch(showLoadingPage());
    const resultBranch = await fetch(
      `https://api.github.com/repos/${ownerName}/${repositoryName}/branches`
    );

    const resultCommit = await fetch(
      `https://api.github.com/repos/${ownerName}/${repositoryName}/commits`
    );
    dispatch(
      fetchRespositorySuccess(
        await resultBranch.json(),
        await resultCommit.json(),
        repositoryName
      )
    );
    dispatch(hideLoadingPage());
  } catch (err) {
    dispatch(errorHandle(err));
  }
};

export const cleanSearchRepository = () => ({
  type: CLEAN_SEARCH_REPOSITORY
});
