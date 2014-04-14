$(document).on("pageshow", "#product-page", function(event){
$('#product-search').keyup(function() {
                          if ($('#product-search').val().length >=3)
                              {
                                  doSearch();
                              }
                              else
                                {
                                  $('#searchresults').html("");
                                }
                      });
                    });
function doSearch()
                {
                    var searchTxt = $('#product-search').val();
                    $('#searchresults').html("");
                        if  (searchTxt.length < 3)
                            {
                            alert ('Please enter something in the search field.');
                            return;
                            }

                    $.ajax ({
                    url:'http://127.0.0.1/hrdatabase/appLogin.php',
                    cache:false,
                    data: {'request': 'searchTxt', 'searchTxt':searchTxt},
                    dataType: 'json',
                    success: function(data)
                    {
                        $('#errMsg').html(data.errMsg);
                        //$('#searchresults').html(data.resultStr);
                        var outputStr = "<center><ul id='data-cell'>";
                        if (data.resultData !== null)
                        {
                                var dataArray = data.resultData;
                                for (var i=0; i < dataArray.length; i++)
                                    {
                                        outputStr = outputStr + "<li>" + "<b>" + dataArray[i].prodDesc + "</b>" + "<br>" + " - " + "<i>" + dataArray[i].prodCode + "</i>"
                                                              + "</li>";
                                    }
                                    outputStr = outputStr + "</ul></center>";
                                $('#searchresults').html(outputStr);
                        }
                    }
                    });

                }