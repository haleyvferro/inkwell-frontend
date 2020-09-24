export const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    user: user
  }
}

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

export const currentUser = (user) => {
  return {
    type: "CURRENT_USER",
    user: user
  }
}

export const deleteGMNote = (id, gmnId) => {
  return {
    type: "DELETE_GM_NOTE",
    id: id,
    gmnId: gmnId
  }
}

export const editGMNote = (id, gmnId, note) => {
  return {
    type: "EDIT_GM_NOTE",
    id: id,
    gmnId: gmnId,
    note: note
  }
}

export const newGMNote = (gmnId, note) => {
  return {
    type: "EDIT_GM_NOTE",
    gmnId: gmnId,
    note: note
  }
}