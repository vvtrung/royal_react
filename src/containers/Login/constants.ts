import keyMirror from 'fbjs/lib/keyMirror';

export const ActionTypes = keyMirror({
  LOGIN: undefined,
});

export const PASSWORD_REGEX = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])^([a-zA-Z0-9]{6,})$/;
