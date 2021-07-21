
  export const getUsersAge = () => {
    return fetch('/users/age', {
      method: "GET"
    }).then(res => res.json())
  }

  export const getUsersData = () => {
      return fetch('/users', {
        method: "GET"
      }).then(res => res.json())
  }