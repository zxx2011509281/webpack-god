var ajax = new XMLHttpRequest();

ajax.open('get','/user');

ajax.send();

ajax.onreadystatechange = function () {
   if (ajax.readyState==4 &&ajax.status==200) {
　　　　console.log(ajax.responseText);
  　　}
}