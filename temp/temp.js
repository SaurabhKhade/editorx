var axios = require('axios');
var data = JSON.stringify({
           "code":`
#include<stdio.h>
int main() {
  int a;
  scanf("%d",&a);
  printf("%d",a);
}
           `
            ,
           "language":"c",
           "input":"15"
           });

var config = {
  method: 'post',
  url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response.data.output);
})
.catch(function (error) {
  console.log(error);
});