export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const updateTodo = (data) => {
    return {
        type: "UPDATE_TODO",
        payload: data
    }
}

export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"
    }
}

