class MainController {
  constructor ($http) {
    'ngInject';
    let vm = this;
    vm.currentTab = 'table';
    $http.get('app/main/data.json').success(function(res){
      // console.log(res);
      vm.people = res;
    });
  }
}

export default MainController;
