var $table_body=document.querySelector('tbody');
var $search_button=document.querySelector("#filter-btn");
var $stock=document.querySelector("#search_input");

var apiKey = "Xs-x2MU7aKJe4kY1zBMK";

var $avg_open=document.querySelector("#avg_open");
var $avg_close=document.querySelector("#avg_close");
var $avg_vol=document.querySelector("#avg_vol");
var $int_high=document.querySelector("#int_high");
var $int_low=document.querySelector("#int_low");
var $dividend=document.querySelector("#dividend");
var $difference=document.querySelector("#difference");

var $MA_check=document.querySelector("#customSwitch1");
var $Date_start=document.querySelector("#date_start_input");
var $Date_end=document.querySelector("#date_end_input");
var $Time_check=document.querySelector(".custom-control-input");

var $stock_name=document.querySelector("#stock_name_int");
var $date_start_html=document.querySelector("#date_start");
var $date_end_html=document.querySelector("#date_end");


$search_button.addEventListener('click', Initiate_Search_Button);


function Get_Data(rows, index){

  return rows.map(function(row){
    return row[index];

  });
}


function Moving_Average(arr, ma_period=10){

  var ma = [];
  
  for (var i=0; i<arr.length-ma_period+1; i++) {
    var sum=0;
    for (var j=0; j<ma_period; j++) {
      sum += arr[i + j];
    }
    ma.push(sum / ma_period);
  }

return ma;
}


function Initiate_Search_Button(){

    $table_body.innerHTML="";
    $return_stock="";
    $return_ma="";
    $return_time="";
    $return_start="";
    $return_end="";

   
    $stock_name.innerHTML="Stock: ";
    $date_start_html.innerHTML="Start Date: ";
    $date_end_html.innerHTML="End Date: ";
    $avg_open.innerHTML="Average Open:  ";
    $avg_close.innerHTML="Average Close: ";
    $avg_vol.innerHTML="Average Volume: ";
    $int_high.innerHTML="Interval High: ";
    $int_low.innerHTML="Interval Low: ";
    $dividend.innerHTML="Dividend: ";
    $difference.innerHTML="Interval Change: ";


    $return_stock=$stock.value.trim().toUpperCase();
    $return_ma=$MA_check.checked;
    $return_start=$Date_start.value.trim();
    $return_end=$Date_end.value.trim();

    var $return_time="";

    if(document.getElementById('customRadio1').checked==true) {
      $return_time='daily';
    }
    else if(document.getElementById('customRadio2').checked==true) {
      $return_time='weekly';
    }
    else if(document.getElementById('customRadio3').checked==true){
      $return_time="monthly";
    }


    var queryUrl = `https://www.quandl.com/api/v3/datasets/WIKI/${$return_stock}.json?start_date=${$return_start}&end_date=${$return_end}&collapse=${$return_time}&api_key=${apiKey}`;

    d3.json(queryUrl).then(function(data){
        var name=data.dataset.name;
        var stock=data.dataset.dataset_code;
        var start_date=data.dataset.start_date;
        var end_date=data.dataset.end_date;
        var dates=Get_Data(data.dataset.data, 0);
        var opening_prices=Get_Data(data.dataset.data, 1);
        var closing_prices=Get_Data(data.dataset.data, 4);
        var high_prices=Get_Data(data.dataset.data, 2);
        var low_prices=Get_Data(data.dataset.data, 3);
        var volume=Get_Data(data.dataset.data, 5);
        var dividend=Get_Data(data.dataset.data, 6);
        

        var avg_close_array=[];
        var avg_open_array=[];
        var high_prices_array=[];
        var low_prices_array=[];
        var avg_volume_array=[];
        var avg_div_array=[];

        var avg_close_sum=0;
        var avg_open_sum=0;
        var avg_vol_sum=0;
        var avg_div_sum=0;


        var table = d3.select(".table");
        var tbody = table.select("tbody");
        var trow;
        var change;

        if ($return_stock==stock){

          for (var i=0; i<dates.length; i++) {
            trow = tbody.append("tr");
            trow.append("td").text(dates[i]);
            trow.append("td").text(`$${opening_prices[i]}`);
            trow.append("td").text(`$${closing_prices[i]}`);
            trow.append("td").text(`$${high_prices[i]}`);
            trow.append("td").text(`$${low_prices[i]}`);
            trow.append("td").text(volume[i]);
            change=closing_prices[i]-opening_prices[i]
            
            if (change>=0){
              trow.append("td").attr("id", "alert").text(`+$${change.toFixed(2)}`);
            }
            else{
              trow.append("td").attr("id", "bad_alert").text(`-$${-1*(change).toFixed(2)}`);
            };
      
            high_prices_array.push(high_prices[i]);
            low_prices_array.push(low_prices[i]);
            avg_close_array.push(closing_prices[i]);
            avg_open_array.push(opening_prices[i]);
            avg_volume_array.push(volume[i]);
            avg_div_array.push(dividend[i]);

          }


          $stock_name.append(`${$return_stock} ${$return_time.toUpperCase()}`); //.substr(1).toUpperCase();
          $date_start_html.append(`${$return_start}`);
          $date_end_html.append(`${$return_end}`);
          $return_time="";


          for(var i in avg_open_array) { avg_open_sum += avg_open_array[i]; }
          $avg_open.append(`$${(avg_open_sum/avg_open_array.length).toFixed(2)}`);

          for(var i in avg_close_array) { avg_close_sum += avg_close_array[i]; }
          $avg_close.append(`$${(avg_close_sum/avg_close_array.length).toFixed(2)}`);

          for(var i in avg_volume_array) { avg_vol_sum += avg_volume_array[i]; }
          $avg_vol.append(`${(avg_vol_sum/avg_volume_array.length).toFixed(2)}`);

          $int_high.append(`$${Math.max(...high_prices_array)}`);

          $int_low.append(`$${Math.min(...low_prices_array)}`);

          for(var i in avg_div_array) { avg_div_sum += avg_div_array[i]; }
          $dividend.append(`$${(avg_div_sum/avg_div_array.length).toFixed(2)}`);

          if (avg_open_array[0]>=(avg_close_array[avg_close_array.length-1])){
            $difference.append(`+$${(avg_open_array[0]-avg_close_array[avg_close_array.length-1]).toFixed(2)}`);
          }
          else{
            $difference.append(`-$${-1*((avg_open_array[0]-avg_close_array[avg_close_array.length-1])).toFixed(2)}`);
          }
          


            var trace1 = {
                type: "scatter",
                mode: "lines",
                name: name,
                x: dates,
                y: closing_prices,
                line: {
                    color: "#17BECF"
                }
          };
      
        
          var trace2 = {
            type: "candlestick",
            x: dates,
            high: high_prices,
            low: low_prices,
            open: opening_prices,
            close: closing_prices
          };
      

          if ($return_ma==true){
            var ma_set=10;
            var ma_closing=Moving_Average(closing_prices, ma_set);
            

          var trace3 = {
            type: "scatter",
            mode: "lines",
            name: "Moving Average",
            x: dates.slice(0, dates.length-ma_set),
            y: ma_closing
          };

          var data = [trace1, trace2, trace3];
        }

          else{
            // document.querySelector("#Moving_header").innerHTML="";
            var data = [trace1, trace2];
          }
      
          var layout = {
            title: `${$return_stock} closing prices`,
            xaxis: {
              range: [start_date, end_date],
              type: "date"
            },
            yaxis: {
              autorange: true,
              type: "linear"
            },
            showlegend: false
          };
      
          Plotly.newPlot("plot_stock", data, layout);
        };
      })
    }
