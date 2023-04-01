const numberArrayReducer = (state: number[], param: {
  action: "add" | "rm" | "clear",
  value?: number,
}) => {
  switch (param.action) {
    case "add":
      return !!param.value
        ? [...state, param.value]
        : state;
    case "rm":
      const _state = [...state];
      !!param.value && _state.splice(_state.indexOf(param.value), 1);

      return _state;
    case "clear":
      return [...state.splice(0)]
    default:
      return state;
  }
};

export default numberArrayReducer;