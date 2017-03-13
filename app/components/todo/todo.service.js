class TodoService {
  constructor($http,$q) {
    this.$q = $q;
    this.$http = $http;
  }
  getTodos() {
    return this.$q.when([{
      title: 'Default',
      selected: false
    }]);
  }
}

TodoService.$inject = ['$http','$q'];

export default TodoService;