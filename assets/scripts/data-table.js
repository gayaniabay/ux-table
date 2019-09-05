
    var dataSet = [
    [ "David Katz", "System Architect", "David Thomson", "United States", "0.03", "0.93" , "Actions"],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" , "x"],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" , "x"]
];
 
$(document).ready(function() {
    $('#advanced-table').DataTable( {
       // data: dataSet,
        responsive: true, 
        fixedHeader: true,  
        // columns: [
        //     { title: "Users" },
        //     { title: "Social media accounts" },
        //     { title: "Close friends" },
        //     { title: "Country" },
        //     { title: "Treat score" },
        //     { title: "Influence score" },
        //     { title: "Actions" }
        // ]
    } );
} );
