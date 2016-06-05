import { fetchJson, sendJson } from '../backend/Backend'
import history from '../history'

export const SET_VOTES = 'SET_VOTES';
export const SET_CURRENT_VOTE = 'SET_CURRENT_VOTE';
export const LOGIN = 'LOGIN';

export function login(username) {
  return {
    type:     LOGIN,
    username: username
  };
}

export function loadVotes() {
  return dispatch => fetchJson('/api/votes').then(allVotes => {
    dispatch({
      type:  SET_VOTES,
      votes: allVotes
    });
  });
}

export function loadVote(requestedVoteId) {
  return dispatch => fetchJson(`/api/votes/${requestedVoteId}`).then(currentVote => {
    dispatch({
      type: SET_CURRENT_VOTE,
      vote: currentVote
    });
  });
}

export function registerVote(vote, choice) {
  return dispatch => sendJson('put', `/api/votes/${vote.id}/choices/${choice.id}/vote`).then(() => {
    dispatch(routeToMain());
  });
}

export function addVote(newVote) {
  return dispatch => sendJson('post', '/api/votes', newVote).then(() => {
    dispatch(routeToMain());
  });
}

// TODO: also have a store for the title? Map like URL using mutual listeners?
export function setTitle(title) {
  return () => {
    if (typeof document !== 'undefined') document.title = title;
  }
}

export function updatePath(path) {
  return () => history.pushState(null, path);
}

export function replacePath(path) {
  return () => history.replaceState(null, path);
}

export function routeToMain() {
  return updatePath('/');
}