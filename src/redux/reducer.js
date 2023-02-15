const state = {
    data:'redux的原始数据'
}

const reducer = function (prevState = state, action) {
    switch (action.type) {
        case 'SET_PARENT_DATA': {
            console.log(('触发了'),action)
            return {
                data:action.data
            }
        }
        case 'SET_CHILDREN_DATA':{
            console.log(('触发了'),action)
            return {
                data:action.data
            }
        }
        default:{
            return prevState
        }
    }
}

export  default reducer