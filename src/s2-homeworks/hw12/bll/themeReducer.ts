const initState = {
  themeId: 1,
};

type ThemeState = typeof initState;
type ChangeThemeAction = {
  type: "SET_THEME_ID";
  id: number;
};

export const themeReducer = (state = initState, action: ChangeThemeAction): ThemeState => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): ChangeThemeAction => ({ type: "SET_THEME_ID", id }); // fix any

