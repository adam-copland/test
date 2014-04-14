function doLogin()
      {

        var userName = document.forms['validateform'].elements['user-name'].value;
        var passWord = document.forms['validateform'].elements['password'].value;
        var request = 'checkLogin';

        $.ajax ({


                    url:'http://' + localStorage.url + '/hrdatabase/appLogin.php',
                    cache:false,
                    data: {'request': request,  'user-name': userName, 'password': passWord},
                    dataType: 'json',
                    async: false,
                    success: function(data)
                    {
                        $('#errMsg').html(data.errMsg);
                        if (jQuery.trim(data.errMsg).length ==0)
                        {
                            sessionStorage.userId = userName;
                            $.mobile.changePage ("page1.html", {transition:'slide'});
                        }
                        else
                          {
                            alert (data.errMsg);
                          }
                    }

                });
      }
function doHomePage()
    {
      $.mobile.changePage ("page1.html", {transition:'slide'});
    }
function doProductPage()
    {
      $.mobile.changePage ("page2.html", {transition:'slide'});
    }
function doCameraPage()
    {
      $.mobile.changePage ("pic.html", {transition:'slide'});
    }
function doContactPage()
    {
        $.mobile.changePage ("page3.html", {transition:'slide'});
    }
function doContactUs()
    {
      $.mobile.changePage ("page3.html", {transition:'slide'});
    }
function doSettings()
    {
      $.mobile.changePage ("settings.html", {transition:'slide'});
    }
function doSaveSettings()
    {
      if (typeof(Storage) == 'undefined')
        {
          //no storage available
          alert ('Sorry, your device does not support storage');
          return;
        }
      var url = $('#urlinput').val();
      localStorage.url = url;
      $.mobile.changePage ("index.html", {transition:'slide'});
    }
      $(document).on("pageshow", "#settingsPage", function(event){
      $('#urlinput').val(localStorage.url);
});