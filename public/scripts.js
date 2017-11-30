var button = document.querySelector("#clickMe");


button.addEventListener("click",function(e) {
    e.preventDefault();
    window.open('https://secure.helpscout.net/dashboard/');
    window.open('https://app.asana.com/');
    $.ajax({
      url: "/open"
    });
});
