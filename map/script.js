$(document).ready(function(){
    var $mapList = $("path");
    var $mapViewing = $(".zz");
    

    $mapList.on("mouseover",mapView);
    $mapList.on("mouseout",mapHide);

    function mapView(){
        $mapViewing.addClass("mapView");
        
    }
    function mapHide(){
        $mapViewing.removeClass("mapView");
    }

})