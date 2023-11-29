$(document).ready(function () {
  

    getdetail("0");
  StudentStationpref();


    //window.onbeforeunload = function () {
    //    var changesSaved = confirm("We have saved your changes. Are you sure you want to leave the page?");
    //    if (changesSaved) {
    //        return true;
    //    } else {
    //        return false;
    //    }
    //}



    var responsejson = "";

   


    $('#btnSave').one("click", function () {

    //$('#btnSave').click(function () {



      


        var accomo = "false";
        var contistation = 1;
        var i = 0;
        jsondata = "";
        jsonvalue = "";



        jsondata = "[";

        $('.spanclass').each(function () {
            //             $('#PS-II').is(':checked') == true
            if ($('.accomo[chkaccomo="' + $(this).attr("spn") + '"]').is(':checked') == true) {
                accomo = "true";
            }
            else {
                accomo = "false";
            }

            //if ($('#consta').is(":checked")) {
            //    contistation = 1;
            //}
            //else {
            //    contistation = 0;
            //}
            i = i + 1;
            jsondata += "{"
            jsondata += "'isActive':'1',"
            jsondata += "'PreferenceNo':'" + i + "','StationId':'" + $(this).attr("spn") + "',"
            jsondata += "'Accommodation':'" + accomo + "',"

            jsondata += "},"

        });
        jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata += "]";


        if ($('#consta').is(":checked")) {
            contistation = 1;
            jsonvalue += "'isActive':'1',"
            jsonvalue += "'ContinueStation':'"+ contistation+"',"
            jsonvalue = jsonvalue.substr(0, jsonvalue.length - 1);
            jsonvalue = '{' + jsonvalue + '}';
        }
        else {
            contistation = 0;

        }


        // alert(jsondata);
        saveprefdata(jsondata, jsonvalue, contistation);


    });

    $('#Reset').click(function () {
        window.location = self.location;
        getdetail("0");

    });


});

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function saveprefdata(data, jsonvalue, contistation) {

    $('#loading').html('<img src="../img/282.GIF"  style="z-index:1999 ; top:50%; left:40%;  position:fixed" />');
    $('#loading').show()
    $.ajax({
        type: "POST",
        url: "StudentStationPreference.aspx/saveStudentStationPref",
        contentType: "application/json; charset=utf-8",
     //   global: false,
       // async: false,

    
        data: '{ jsondata: "' + encodeURIComponent(data) + '", jsonvalue: "' + encodeURIComponent(jsonvalue) + '",  contistation: "' + encodeURIComponent(contistation) + '"}',
        dataType: "json",

      

        success: function (response) {

            var sParsedJson = jQuery.parseJSON(response.d);
            if (sParsedJson[0].message.trim() != "") {


                alert(sParsedJson[0].message);
              
               
            }
           // $('#loading').html("").hide();
          //  alert("Station Preference Submitted Successfully.");
            $('#loading').html("").hide();

            
          //  "window.location.replace("FillProbBankSkills.aspx", "_newtab");"
            window.location.replace("NEWStudentDashboard.aspx");
        
       //   this.GetType(), "OpenWindow", 
        

           // window.open('FillProbBankSkills.aspx','_newtab',true);

        }
    });

}


function getdetail(id) {
    $('#loading').html('<img src="../img/282.GIF"  style="z-index:1999 ; top:50%; left:40%;  position:fixed" />');
    $('#loading').show()
    $.ajax({
        type: "POST",
        url: "StudentStationPreference.aspx/getinfoStation",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{CompanyId: "' + id + '" }',
        dataType: "json",
        success: function (response) {

            $('#loading').html("").hide();

            var sParsedJson = jQuery.parseJSON(response.d);

            for (var i = 0; i < sParsedJson.length; i++) {
                $("#Sno").text(i + 1);

                $(".list ul").append('<li class="col-sm-12 item-blue clearfix ui-state-default" ><span  cls="' + sParsedJson[i].Sno + '" spn="' + sParsedJson[i].StationId + '" cname="' + sParsedJson[i].Companyname + '" class="spanclass  uiicon ui-icon-arrowthick-2-n-s">' + sParsedJson[i].Companyname + '</span>&nbsp;&nbsp;&nbsp;&nbsp;<div class="ui-state-default sortable-number"><span id="spnRank" class="">' + sParsedJson[i].Sno + '</span></div><input type="checkbox" chkaccomo="' + sParsedJson[i].StationId + '" class = "accomo pull-right" name="accomoPreference"   value="' + sParsedJson[i].StationId + '"></li>');
    }
        }
    });
    $('#loading').html("").hide();
}

function StudentStationpref() {
    $('#loading').html('<img src="../img/282.GIF"  style="z-index:1999 ; top:50%; left:40%;  position:fixed" />');
    $('#loading').show()
    $.ajax({
        type: "POST",
        url: "StudentStationPreference.aspx/chkStationpref",
        contentType: "application/json; charset=utf-8",
        global: false,
        async: false,
        data: '{contactid: "0"}',
        dataType: "json",
        success: function (response) {
            if (response.d == '[]') {

                $('#loading').html("").hide();
                return false;
            }
            $('#loading').html("").hide();
            var sParsedJson = jQuery.parseJSON(response.d);
            $(".list ul").empty()
            for (var i = 0; i < sParsedJson.length; i++) {
             var sno=   $("#Sno").text(i + 1);
             $(".list ul").append('<li class="col-sm-12 item-blue clearfix ui-state-default" ><span  cls="' + (i+1) + '" spn="' + sParsedJson[i].StationId + '" cname="' + sParsedJson[i].Companyname + '" class="spanclass uiicon ui-icon-arrowthick-2-n-s">' + sParsedJson[i].Companyname + '</span>&nbsp;&nbsp;&nbsp;&nbsp;<div class="ui-state-default sortable-number" ><span id="spnRank" class="">' + (i+1) + '</span></div><input type="checkbox" chkaccomo="' + sParsedJson[i].StationId + '" class = "accomo pull-right" name="accomoPreference"   value="' + sParsedJson[i].StationId + '"></li>');

                if (sParsedJson[i].Accommodation == "true") {
                    $('input[type="checkbox"][name="accomoPreference"][value="' + sParsedJson[i].StationId + '"]').attr("checked", "checked")
                }
                
            }
        }
    });
    $('#loading').html("").hide();
}

function show() {
   
    $('#loading').show()
}
function hide() {
    $('#loading').html("").hide();
}
