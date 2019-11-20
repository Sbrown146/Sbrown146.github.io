

// Table and button declarations
var $table_body=document.querySelector('tbody');
var $table_check=document.querySelector('tbody').rows;
var $reset_button=document.querySelector('#reset-btn');
var $search_button=document.querySelector('#filter-btn');


// Variable declarations
var $input_variable1=document.querySelector('#datetime');
var $input_variable2=document.querySelector('#city');
var $input_variable3=document.querySelector('#state');
var $input_variable4=document.querySelector('#country');
var $input_variable5=document.querySelector("#shape");
var $input_variable6=document.querySelector('#durationMinutes');
var $input_variable7=document.querySelector('#comments');


// EventListeners for both search and reset buttons.
$search_button.addEventListener('click', Initiate_Search_Button);
$reset_button.addEventListener('click', Hard_Reset);


// Variables for the search log next to the table.
var $search_log=document.querySelector(".search");
var $search_date=document.querySelector(".search-date");
var $search_city=document.querySelector(".search-city");
var $search_state=document.querySelector(".search-state");
var $search_country=document.querySelector(".search-country");
var $search_shape=document.querySelector(".search-shape");
var $search_duration=document.querySelector(".search-duration");
var $search_comments=document.querySelector(".search-comments");
var $search_fail=document.querySelector(".search-fail");
var $search_reset=document.querySelector(".search-reset");



// Stores the data.js file.  Acts as a dynamic holder for data.js.
var Temp_data_holder=data;


// Function to create the table.
function Initiate_table(){

    // Sets up column names.
    for (var i=0; i<Temp_data_holder.length; i++){
        var info=Temp_data_holder[i];
        var table=Object.keys(info);
        let $table_row=$table_body.insertRow(i);

        // Adds data for rows.
        for (var j=0; j<table.length; j++){
            var table_contents=table[j];
            var $table_cell=$table_row.insertCell(j);
            $table_cell.innerText=info[table_contents];
        }
    }
}


// This load the table when the page is first opened/refreshed.
Initiate_table();


// Reset button function.  Resets the table in 3 steps:
    // 1) Sets the Temp_data_holder back to the data.js file.
    // 2) Blanks all input variables.
    // 3) Creates the default table for display.

function Hard_Reset(){
    $table_body.innerHTML="";

    $search_log.innerHTML="";
    $search_reset.innerHTML="Table has been reset.";
    $search_date.innerHTML="";
    $search_city.innerHTML="";
    $search_state.innerHTML="";
    $search_country.innerHTML="";
    $search_shape.innerHTML="";
    $search_duration.innerHTML="";
    $search_comments.innerHTML="";
    $search_fail.innerHTML="";

    Temp_data_holder=data;

    $input_variable1.value="";
    $input_variable2.value="";
    $input_variable3.value="";
    $input_variable4.value="";
    $input_variable5.value="";
    $input_variable6.value="";
    $input_variable7.value="";

    Initiate_table();
}



// Search Button function.

function Initiate_Search_Button(){

    // Blanks table and stores any input variables.
    $table_body.innerHTML="";
    $search_log.innerHTML="Search Includes:  ";
    $search_date.innerHTML="";
    $search_city.innerHTML="";
    $search_state.innerHTML="";
    $search_country.innerHTML="";
    $search_shape.innerHTML="";
    $search_duration.innerHTML="";
    $search_comments.innerHTML="";
    $search_fail.innerHTML="";
    $search_reset.innerHTML="";

    // Search variables
    var input_variable_date=$input_variable1.value.trim();
    var input_variable_city=$input_variable2.value.toLowerCase().trim();
    var input_variable_state=$input_variable3.value.toLowerCase().trim();
    var input_variable_country=$input_variable4.value.toLowerCase().trim();
    var input_variable_shape=$input_variable5.value;
    var input_variable_duration=$input_variable6.value.toLowerCase().trim();
    var input_variable_comments=$input_variable7.value;


    // This is the default if no search criteria is entered and the search button is pushed.

    if (input_variable_date==="" && input_variable_city==="" && input_variable_state==="" && input_variable_country==="" && input_variable_shape==="" && input_variable_duration==="" && input_variable_comments===""){
        Initiate_table();
        $search_log.innerHTML="Search Includes:";
        $search_date.append("No search criteria entered.  Please search again.");
        return $table_body.innerHTML="";
    } 


    // Loops to filter data for matching date, city, state, country, shape, duration and comments.

    // Date
    if (input_variable_date!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_date){
            var input_variable_date_filter=get_date.datetime;
            return input_variable_date_filter===input_variable_date;
        });
    }

    // City
    if (input_variable_city!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_city){
            var input_variable_city_filter=get_city.city;
            return input_variable_city_filter===input_variable_city;
        });
    }

    // State
    if (input_variable_state!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_state){
            var input_variable_state_filter=get_state.state;
            return input_variable_state_filter===input_variable_state;
        });
    }

    // Country
    if (input_variable_country!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_country){
            var input_variable_country_filter=get_country.country;
            return input_variable_country_filter===input_variable_country;
        });
    }

    // Shape
    if (input_variable_shape!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_shape){
            var input_variable_shape_filter=get_shape.shape;
            return input_variable_shape_filter===input_variable_shape;
        });
    }


    // Finally!  Both duration and comments are set to search their respective fields, not match them due to their uneven formatting.  This simple task.....took WAY too much time to get to work.  However, success was achieved when I realized that input_variable_duration_filter appears to return an object (or something that is neither an array or string) and thus has to be reformatted as a string to use something like string.prototype.includes().  After that breakthrough, both now work properly.


    // Duration
    if (input_variable_duration!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_duration){
            var input_variable_duration_filter=get_duration.durationMinutes;
            var input_variable_duration_match=new String(input_variable_duration_filter);
            return input_variable_duration_match.includes(input_variable_duration);
        });
    }

    // Comments
    if (input_variable_comments!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_comments){
            var input_variable_comments_filter=get_comments.comments;
            var input_variable_comments_match=new String(input_variable_comments_filter);
            return input_variable_comments_match.includes(input_variable_comments);
        });
    }


        if (input_variable_date!=""){
            $search_date.append((`Date selected:  ${input_variable_date}`));
        }
        
        if (input_variable_city!=""){
            $search_city.append((`City selected:  ${input_variable_city}`));
        }

        if (input_variable_state!=""){
            $search_state.append(`State selected:  ${input_variable_state}`);
        }

        if (input_variable_country!=""){
            $search_country.append(`Country selected:  ${input_variable_country}`);
        }
        
        if (input_variable_shape!=""){
            $search_shape.append(`Shape selected:  ${input_variable_shape}`);
        }
        
        if (input_variable_duration!=""){
            $search_duration.append(`Duration selected: ${input_variable_duration}`);
        }

        if (input_variable_comments!=""){
            $search_comments.append(`Comments selected:  ${input_variable_comments}`);
        }

        
        // This initiates the table based on search criteria.  Also blanks all variables so there are no holdovers for another search.  Added a "no results found" if no matching criteria is found.

        Initiate_table();

        if ($table_check.length<1){
            $search_fail.append("No matches found.");
        }

        Temp_data_holder=data;
        $input_variable1.value="";
        $input_variable2.value="";
        $input_variable3.value="";
        $input_variable4.value="";
        $input_variable5.value="";
        $input_variable6.value="";
        $input_variable7.value="";

    };

    