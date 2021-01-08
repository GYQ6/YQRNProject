/**
 * 接受action, 然后进行辑处理
 * 判断 发送过来的action是不是我们需要的
 * 如果是我们需要的, 就应该 return一个新的state
 */
exports.reducer = (state, action) => {
  switch (action.type) {
    case 'REFRESH_LIST':
      return {refreshEvent: '赶紧刷新'};
    default:
      return state;
  }
};
