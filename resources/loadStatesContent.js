$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $.getJSON("under45centres.json", function (data) {
        for (var i = 0; i < data.districts.length; i++) {
            if (data.districts[i].count === 0) {
                $("#states-content").append(
                    "<a href=\"#\" class=\"list-group-item d-flex justify-content-between align-items-center list-group-item-action disabled\" data-toggle=\"collapse\" data-target=\"#\" data-parent=\"#menu\">" + data.districts[i].name + "<span class=\"badge badge-secondary badge-pill\">0</span></a>"
                );
            } else {
                $("#states-content").append(
                    "<a href=\"#\" class=\"list-group-item d-flex justify-content-between align-items-center list-group-item-action\" data-toggle=\"collapse\" data-target=\"#" + data.districts[i].name + "-centers\" data-parent=\"#menu\">" + data.districts[i].name + "<span class=\"badge badge-primary badge-pill\">" + data.districts[i].count + "</span></a>\n"
                );
                var tableContent = "<div id=\"" + data.districts[i].name + "-centers\" class=\"sublinks collapse\">\n" +
                    "   <table class=\"table table-hover\">\n" +
                    "       <thead>\n" +
                    "           <tr>\n" +
                    "               <th scope=\"col\">Centre</th>\n" +
                    "               <th scope=\"col\">Pincode</th>\n" +
                    "               <th scope=\"col\">Vaccines</th>\n" +
                    "            </tr>\n" +
                    "       </thead>\n" +
                    "       <tbody>";
                for (var j=0; j < data.districts[i].centers.length; j++){
                    tableContent += "<tr>\n" +
                        "                   <td>" + data.districts[i].centers[j].name + "</td>\n" +
                        "                   <td>" + data.districts[i].centers[j].pincode + "</td>\n" +
                        "                   <td>" + data.districts[i].centers[j].available + "</td>\n" +
                        "               </tr>";
                }
                tableContent += "</tbody></table></div>";
                $("#states-content").append(
                    tableContent
                );
            }
        }
    });
});