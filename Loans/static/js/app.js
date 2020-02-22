var $table_body=document.querySelector('tbody');
//var $table_check=$table_body.rows;
var $reset_button=document.querySelector("#reset-btn");
var $search_button=document.querySelector("#filter-btn");


var $PV=document.querySelector("#value");
var $loan_type=document.querySelector("#PMT");
var $down_pmt=document.querySelector("#down_payment");
var $N=document.querySelector("#years");
var $M=document.querySelector("#per_year");
var $I=document.querySelector("#interest");


$search_button.addEventListener('click', Initiate_Search_Button);
$reset_button.addEventListener('click', Hard_Reset);


var $result_PV=document.querySelector("#loan_value_p");
var $result_PMT_type=document.querySelector("#PMT_type_p");
var $result_down_pmt=document.querySelector("#Down_pmt_p")
var $result_N=document.querySelector("#years_p");
var $result_M=document.querySelector("#payments_p");
var $result_NM=document.querySelector("#total_payments_p");
var $result_I=document.querySelector("#int_p");
var $result_PMT=document.querySelector("#PMT_p");
// var $result_Sum_PMT=document.querySelector("#sum_pmt_p");
var $result_Sum_75=document.querySelector("#breakeven_75");
var $result_Sum_50=document.querySelector("#breakeven_50");
var $result_Sum_INT=document.querySelector("#sum_int_p");
var $result_be=document.querySelector("#breakeven_p");
// var $OLB_clear=document.querySelector("#plot_OLB");
// var $Guage_clear=document.querySelector("#plot_guage");
// var $Pie_clear=document.querySelector("#plot_pie");
// var $Pvi_clear=document.querySelector("#plot_pvi");


function Hard_Reset() {
    $table_body.innerHTML="";
    // $OLB_clear.innerHTML="";
    // $Guage_clear.innerHTML="";
    // $Pie_clear.innerHTML="";
    // $Pvi_clear.innerHTML="";
    $result_PV.innerHTML="Loan Value:";
    $result_PMT_type.innerHTML="Payment Type:";
    $result_down_pmt.innerHTML="Down Payment:"
    $result_N.innerHTML="Number of Years:";
    $result_M.innerHTML="Payments per Year";
    $result_NM.innerHTML="Total Payments:"
    $result_I.innerHTML="Interest Rate:";
    $result_PMT.innerHTML="Payment:"
    // $result_Sum_PMT.innerHTML="Total Amount Paid:";
    $result_Sum_INT.innerHTML="Total Interest Paid:";
    $result_be.innerHTML="Breakeven Payment:";
    $result_Sum_75.innerHTML="75% Paid:";
    $result_Sum_50.innerHTML="50% Paid:";

    principal_payment=[];
    interest_payment=[];
    payment=[];
    data=[];
    OLB_array=[];
    trace1={};
    trace2={};
    trace3={};
    trace4={};
    data={};
    data_pie={};
    data_OLB={};
    layout_pie={};
    layout_OLB={};
    layout={};

    $PV.value="";
    // $loan_type.value="";
    $down_pmt.value="";
    $N.value="";
    $M.value="";
    $I.value="";
}


var principal_payment=[];
var interest_payment=[];
var payment=[];
var data=[];
var OLB_array=[];

function Initiate_Search_Button() {
    $table_body.innerHTML="";
    $result_PV.innerHTML="";
    $result_PMT_type.innerHTML="";
    $result_down_pmt.innerHTML="";
    $result_N.innerHTML="";
    $result_M.innerHTML="";
    $result_NM.innerHTML="";
    $result_I.innerHTML="";
    $result_PMT.innerHTML="";
    // $result_Sum_PMT.innerHTML="";
    $result_Sum_INT.innerHTML="";
    $result_be.innerHTML="";
    $result_Sum_75.innerHTML="";
    $result_Sum_50.innerHTML="";

    principal_payment=[];
    interest_payment=[];
    payment=[];
    data=[];
    OLB_array=[];
    trace1={};
    trace2={};
    trace3={};
    trace4={};
    data={};
    data_pie={};
    data_OLB={};
    layout_pie={};
    layout_OLB={};
    layout={};

    var $PV_given=$PV.value.trim();
    var $Dwn_given=$down_pmt.value.trim();
    var $PMT_given=$loan_type.value.trim();
    var $N_given=$N.value.trim();
    var $M_given=$M.value.trim();
    var $Total_NM=$N_given*$M_given;

    //CHECK THIS AND FIX IF NEEDED
    if ($PMT_given=="End of Month"){
        var $I_given=(($I.value.trim())/100)/$M_given;
        var $D_given=1;
    }
    if ($PMT_given=="Start of Month"){
        //var $I_given=(($I.value.trim()/$M_given)/(1+($I.value.trim()/$M_given)))/100;
        var $I_given=(($I.value.trim())/100)/$M_given;
        var $D_given=(1+$I_given);
    }
    

    var $PV_adjusted=$PV_given-$Dwn_given;
    var $PMT=((($PV_adjusted*($I_given/($D_given))))/(1-((1+$I_given)**(-$N_given*$M_given))));
    var $Total_Paid=($PMT * $N_given * $M_given);
    var $Total_INT=($Total_Paid-$PV_adjusted);
    var $Breakeven_point=Math.trunc(Math.ceil($N_given*$M_given + 1 + Math.log(.5)/Math.log(1+($I_given)))/12);
    var $Breakeven_month=Math.round(((Math.ceil($N_given*$M_given + 1 + Math.log(.5)/Math.log(1+($I_given)))/12)-($Breakeven_point))*12);

    var $Breakeven_loop=Math.ceil($N_given*$M_given + 1 + Math.log(.5)/Math.log(1+($I_given)));

    $result_PV.append(`Loan Value: $${$PV_given}`);
    $result_PMT.append(`Payment Type: ${$PMT_given}\n`);
    $result_down_pmt.append(`Down Payment: $${$Dwn_given}`);
    $result_N.append(`Number of Years: ${$N_given}`);
    $result_M.append(`Payments per Year: ${$M_given}`);
    $result_NM.append(`Total Payments: ${$Total_NM}`);
    $result_I.append(`Interest Rate: ${$I_given.toFixed(4)}%`);
    $result_PMT.append(`Payment: $${$PMT.toFixed(2)}`);
    // $result_Sum_PMT.append(`Total Amount Paid: $${$Total_Paid.toFixed(2)}`);
    $result_Sum_INT.append(`Total Interest Paid: $${$Total_INT.toFixed(2)}`);

    $result_Sum_75.append(`75% Paid: Year: ${Math.trunc((Math.ceil(($N_given*$M_given)+((Math.log(1-((.75*($PV_adjusted*$I_given))/$PMT)))/Math.log(1+$I_given))))/12)}, Month: ${(Math.trunc(($N_given*$M_given)+((Math.log(1-((.75*($PV_adjusted*$I_given))/$PMT)))/Math.log(1+$I_given))))%12}`);

    $result_Sum_50.append(`50% Paid: Year: ${Math.trunc((Math.trunc(($N_given*$M_given)+((Math.log(1-((.50*($PV_adjusted*$I_given))/$PMT)))/Math.log(1+$I_given))))/12)}, Month: ${((Math.trunc(($N_given*$M_given)+((Math.log(1-((.50*($PV_adjusted*$I_given))/$PMT)))/Math.log(1+$I_given))))%12)+1}`);

    if ($Breakeven_point>=0){
        $result_be.append(`Breakeven: Year: ${$Breakeven_point+1}, Month: ${$Breakeven_month}`);
    }
    if ($Breakeven_point<0 || $Breakeven_month<0){
        $result_be.append(`Breakeven: Start of Loan`);
    }

    //For table (cannot get jquery to work for this.)

    var table = d3.select("#summary-table");
    var tbody = table.select("tbody");
    var trow;

    if ($Breakeven_loop>=5){
        for (var i=(($Breakeven_loop-5)); i < (($Breakeven_loop)+5); i++) {
            trow = tbody.append("tr");
            trow.append("td").text(i);
            trow.append("td").text(`$${($PMT*(((1-(1+($I_given))**(-($Total_NM-i))))/($I_given/$D_given))).toFixed(2)}`);
            trow.append("td").text(`$${$PMT.toFixed(2)}`);
            trow.append("td").text(`$${($PMT*(1+($I_given))**(-($Total_NM+1-i))).toFixed(2)}`);
            trow.append("td").text(`$${($PMT-($PMT*(1+($I_given))**(-($Total_NM+1-i)))).toFixed(2)}`);
            trow.append("td").text(`${(((1+($I_given))**(-($Total_NM+1-i)))*100).toFixed(2)}%`);
            trow.append("td").text(`${((1-(1+($I_given))**(-($Total_NM+1-i)))*100).toFixed(2)}%`);
            
        }
    }
    else{
        for (var j=0; j<10; j++) {
            trow = tbody.append("tr");
            trow.append("td").text(j);
            trow.append("td").text(`$${($PMT*(((1-(1+($I_given))**(-($Total_NM-j))))/($I_given/$D_given))).toFixed(2)}`);
            trow.append("td").text(`$${$PMT.toFixed(2)}`);
            trow.append("td").text(`$${($PMT*(1+($I_given))**(-($Total_NM+1-j))).toFixed(2)}`);
            trow.append("td").text(`$${($PMT-($PMT*(1+($I_given))**(-($Total_NM+1-j)))).toFixed(2)}`);
            trow.append("td").text(`${(((1+($I_given))**(-($Total_NM+1-j)))*100).toFixed(2)}%`);
            trow.append("td").text(`${((1-(1+($I_given))**(-($Total_NM+1-j)))*100).toFixed(2)}%`);

        }
    }
    

    for (var k=1; k < $Total_NM; k++){
        payment.push(k);
        principal_payment.push((($PMT*(1+($I_given))**(-($Total_NM+1-k)))));
        interest_payment.push(($PMT-($PMT*(1+($I_given))**(-($Total_NM+1-k)))));
        OLB_array.push(($PMT*((1-((1+($I_given))**(-($Total_NM-k))))/($I_given/$D_given))).toFixed(2));
    };


    
    var trace1 = {
        type: "line",
        name: "Principal",
        x: payment,
        y: principal_payment,
        hovertemplate: 'Principal: %{y:$.2f}<extra></extra>',
        line: {
            color: "#589738"
        }
    };
    var trace2 = {
        type: "line",
        name: "Interest",
        x: payment,
        y: interest_payment,
        hovertemplate: 'Interest: %{y:$.2f}<extra></extra>',
        line: {
            color: "#990000"
        }
    };

    var layout = {
        title: `Pricipal vs Interest Payment`,
        xaxis: {
            title: {
                text: "Payment #"
            }
        },
        yaxis: {
            title: {
                text: "Portion of Payment"
            }
        },
        paper_bgcolor: "rgba(0,0,0,0)",
        showlegend: false
      };

    data = [trace1, trace2];
    Plotly.newPlot("plot_pvi", data, layout);

    // Guage chart?
    
    if ($Breakeven_loop>=0){
    var degrees=180-(($Breakeven_loop)*(180/$Total_NM)), radius=.5;
    }
    else{
        $Breakeven_loop=0;
        var degrees=180-(($Breakeven_loop)*(180/$Total_NM)), radius=.5;
    }
    var radians=degrees*Math.PI/180;
    var x=radius*Math.cos(radians);
    var y=radius*Math.sin(radians);

    var path1 = (degrees < 45 || degrees > 135) ? 'M -0.0 -0.025 L 0.0 0.025 L ' : 'M -0.025 -0.0 L 0.025 0.0 L ';

    var mainPath = path1, pathX = String(x), space = ' ', pathY =String(y), pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    var data = [{ 
        type: 'scatter',
        x:[0], y:[0],
        marker: {size: 14, color:'850000'},
        showlegend: false,
        name: 'Breakeven',
        text: $Breakeven_loop,
        hoverinfo: `text`},
        { values: [1,1,1,3],
    rotation: 90,
    text: [`${($N_given)-Math.round($N_given/3)}-${($N_given)}`, `${Math.round(($N_given/3))+1}-${($N_given)-Math.round($N_given/3)-1}`, `1-${Math.round(($N_given)/3)}`, ''],
    textinfo: 'text',
    textposition:'inside',
    marker: {colors:['rgba(183,28,28, .5)','rgba(249, 168, 37, .5)', 'rgba(110, 154, 22, .5)','rgba(0,0,0,0)']},
    labels: [`Final ${Math.round($N_given/3)} Years`, `Middle ${Math.round($N_given/3)} Years `, `First ${Math.round($N_given/3)} Years`, ``],
    hoverinfo: 'label',
    hole: .5,
    type: 'pie',
    showlegend: false
  }];
  
  var layout = {
    shapes:[{
        type: 'path',
        path: path,
        fillcolor: '850000',
        line: {
          color: '850000'
        }
      }],
    title: "Breakeven Point:",
    paper_bgcolor: "rgba(0,0,0,0)",
    height: 400,
    width: 400,
    xaxis: {zeroline:false, showticklabels:false,
               showgrid: false, range: [-1, 1]},
    yaxis: {zeroline:false, showticklabels:false,
               showgrid: false, range: [-1, 1]}
  };
  
  Plotly.newPlot('plot_guage', data, layout, {displayModeBar: false});

//   var pie_colors=['rgba(255,167,0, 0.8)','rgba(10,117,153, 0.8)'];
  //var pie_colors1=['rgba(10,117,153, 0.8)','rgba(255,167,0, 0.8)']

  //Pie chart
  var trace3={
      type:"pie",
      values: [$PV_given, $Total_INT.toFixed(0)],
      labels: ['Principal', 'Interest'],
      showlegend: false,
      marker:{
        colors: ['rgb(20, 156, 88)', 'rgb(238, 11, 11)']
      },
  };
  var data_pie=[trace3];
  var layout_pie={
      title: "Total Pricinpal vs Interest",
      height: 400,
      width: 400,
      paper_bgcolor: "rgba(0,0,0,0)",
  };


  Plotly.plot('plot_pie', data_pie, layout_pie);

  //OLB Graph
  var trace4 = {
    type: "line",
    name: "Remaining Balance",
    x: payment,
    y: OLB_array,
    hovertemplate: 'Remaining Balance: %{y:$.2f}<extra></extra>',
    line: {
        color: "#0000FF"
        }
    };

  var data_OLB=[trace4];
  var layout_OLB={
      title: "Outstanding Loan Balance",
      xaxis: {
        title: {
            text: "Payment #"
        }
    },
    yaxis: {
        title: {
            tickformat: '$000,000',
            text: "Remaining Balance"
        }
    }
  };

  Plotly.newPlot('plot_OLB', data_OLB, layout_OLB);

}



