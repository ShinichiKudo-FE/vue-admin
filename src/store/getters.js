const getters = {
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes,
  roles: state => state.user.roles,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
}
export default getters
