export const actions = {
    TITLE: "TITLE",
    BODY: "BODY",
  };
  
 export function reduceFormData(state, action) {
    const { type } = action;
    const { value } = action;
  
    switch (type) {
      case actions.TITLE:
        return { ...state, title: value };
      case actions.BODY:
        return { ...state, body: value };
      default:
        return state;
    }
  }