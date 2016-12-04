angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('restara', {
    url: '/page1',
    templateUrl: 'templates/restara.html',
    controller: 'restaraCtrl'
  })

  .state('qRCode', {
    url: '/page2',
    templateUrl: 'templates/qRCode.html',
    controller: 'qRCodeCtrl'
  })

  .state('restaraCode', {
    url: '/page6',
    templateUrl: 'templates/restaraCode.html',
    controller: 'restaraCodeCtrl'
  })

  .state('restaurantConfirmation', {
    url: '/page3',
    templateUrl: 'templates/restaurantConfirmation.html',
    controller: 'restaurantConfirmationCtrl'
  })

  .state('table', {
    url: '/page7',
    templateUrl: 'templates/table.html',
    controller: 'tableCtrl'
  })

  .state('tableNumber', {
    url: '/page8',
    templateUrl: 'templates/tableNumber.html',
    controller: 'tableNumberCtrl'
  })

  .state('orders', {
    url: '/page9',
    templateUrl: 'templates/orders.html',
    controller: 'ordersCtrl'
  })

  .state('yourBill', {
    url: '/page10',
    templateUrl: 'templates/yourBill.html',
    controller: 'yourBillCtrl'
  })

  .state('total30Tip', {
    url: '/page11',
    templateUrl: 'templates/total30Tip.html',
    controller: 'total30TipCtrl'
  })

  .state('total25Tip', {
    url: '/page15',
    templateUrl: 'templates/total25Tip.html',
    controller: 'total25TipCtrl'
  })

  .state('total20Tip', {
    url: '/page16',
    templateUrl: 'templates/total20Tip.html',
    controller: 'total20TipCtrl'
  })

  .state('customAmount', {
    url: '/page14',
    templateUrl: 'templates/customAmount.html',
    controller: 'customAmountCtrl'
  })

  .state('confirmCustomAmount', {
    url: '/page17',
    templateUrl: 'templates/confirmCustomAmount.html',
    controller: 'confirmCustomAmountCtrl'
  })

  .state('payByCard', {
    url: '/page18',
    templateUrl: 'templates/payByCard.html',
    controller: 'payByCardCtrl'
  })

  .state('orderEnd', {
    url: '/page19',
    templateUrl: 'templates/orderEnd.html',
    controller: 'orderEndCtrl'
  })

  .state('demoEnd', {
    url: '/page20',
    templateUrl: 'templates/demoEnd.html',
    controller: 'demoEndCtrl'
  })

  .state('aboutTheApp', {
    url: '/page21',
    templateUrl: 'templates/aboutTheApp.html',
    controller: 'aboutTheAppCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});