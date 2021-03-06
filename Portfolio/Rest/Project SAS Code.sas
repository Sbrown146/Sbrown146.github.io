ods html close; ods html;
data rest;
infile "G:\4852\Project\RestSales.txt" dlm='09'x;
input N sales;
run;

ods html close; ods html;
proc print data = rest noobs;
run;
%macro print(x);
ods html close; ods html;
proc print data=&x noobs;
run;
%mend print;
%print(rest);
ods html close; ods html;
proc means data=rest;
run;
%macro means(x);
ods html close; ods html;
proc means data=&x noobs;
run;
%mend means;
%means(rest);
ods html close; ods html;
proc reg data=rest;
model sales=N;
run;
%macro reg(set, dep, indep);
ods html close; ods html;
proc reg data=&set;
model &dep=&indep;
run;
%mend reg;
%reg(rest,sales,N);

ods html close; ods html;
data mon;
infile "G:\4852\Project\SalesMonth.txt" dlm='09'x;
input N sales Month;
if month=1 then m1=1; else m1=0;
if month=2 then m2=1; else m2=0;
if month=3 then m3=1; else m3=0;
if month=4 then m4=1; else m4=0;
if month=5 then m5=1; else m5=0;
if month=6 then m6=1; else m6=0;
if month=7 then m7=1; else m7=0;
if month=8 then m8=1; else m8=0;
if month=9 then m9=1; else m9=0;
if month=10 then m10=1; else m10=0;
if month=11 then m11=1; else m11=0;
ods html close; ods html;
proc print data=mon noobs;
run;
%print(mon);
ods html close; ods html;
proc arima data=mon;
identify var=sales(12)crosscor = (N m1 m2 m3 m4 m5 m6 m7 m8 m9 m10 m11);
estimate input = (N m1 m2 m3 m4 m5 m6 m7 m8 m9 m10 m11) p=(1,2,3,7)(12) printall plot;
forecast lead=12 printall;
run;

/*This set is very odd.  It is clearly seasonal and time series in nature
however it has a very good R2 and the errors don't appear correlated at all
Data is multiplicative (increasing over time).*/
ods html close; ods html;
proc sgplot data=rest;
series y=N x=sales;
run;

data rest1;
set rest;
time = _n_;
Logy= log(sales);
Sqrt= sales**.5;
Qtrooty=sales**.25;
run;

ods html close; ods html;
proc arima data=rest;
identify var = sales;
identify var = sales(1);
identify var = sales(12);
identify var = sales(1,12);
run;

/*Qtrooty(12) yields
the best option for a stationary time series.  The SAC cuts off after lag 12 at
the seasonal level and dies down quickly at the nonseasonal level.  The SPAC has
spikes at 12 and 24 but they are decreasing indicating a dying down nature.*/
ods html close; ods html;
proc print data=rest;
run;


ods html close; ods html;
proc arima data=rest;
identify var = sales(12) ;
estimate p = (1,2,3,4) printall WHITENOISE=IGNOREMISS;
forecast lead=12 out=cast;
run;

/*Arima(1,2,3,7) is giving the best result so far.  Use solver to figure out HW as well*/

ods html close; ods html;
proc arima data=rest;
identify var = sales(12);
estimate p=(1,2) q=(12) printall plot ;
forecast lead=12 out=cast;
run;

ods html close; ods html;
proc arima data=rest;
identify var = sales(12);
estimate p=(1,10) q=(12) printall plot;
forecast lead=12 out=cast;
run;

ods html close; ods html;
data adjust;
infile "H:\4852\Project\RestAdjust.txt" dlm='09'x;
input N sales;
run;
ods html close; ods html;
proc print data=cast;
run;
ods html close; ods html;
proc print data=adjust noobs;
run;
ods html close; ods html;
proc reg data=adjust;
model sales=N;
run;
ods html close; ods html;
proc arima data=adjust;
identify var = sales;
identify var = sales(1);
identify var = sales(12);
identify var = sales(1,12);
run;
ods html close; ods html;
proc arima data=adjust;
identify var = sales(12);
estimate p=(1,10) q=(12) printall plot;
forecast lead=12 out=cast;
run;
ods html close; ods html;
proc arima data=adjust;
identify var = sales(12);
estimate q=(1,10) p=(12) printall plot;
forecast lead=12 out=cast;
run;
ods html close; ods html;
proc arima data=adjust;
identify var = sales(12);
estimate q=(1,2,3) p=(12) printall plot;
forecast lead=12 out=cast;
run;

ods html close; ods html;
data year2;
infile "H:\4852\Project\RestSales2.txt" dlm='09'x;
input N sales;
run;
ods html close; ods html;
proc print data=year2 noobs;
run;
ods html close; ods html;
proc reg data=year2;
model sales=N;
run;
ods html close; ods html;
proc arima data=year2;
identify var = sales;
identify var = sales(1);
identify var = sales(12);
identify var = sales(1,12);
run;
ods html close; ods html;
proc arima data=year2;
identify var = sales(12);
estimate p = (1,10) q=(12) printall plot WHITENOISE=IGNOREMISS;
forecast lead=12 out=cast;
run;

ods html close; ods html;
data adjust2;
infile "H:\4852\Project\RestAdjust2.txt" dlm='09'x;
input N sales;
run;
ods html close; ods html;
proc arima data=adjust2;
identify var = sales;
identify var = sales(1);
identify var = sales(12);
identify var = sales(1,12);
run;
ods html close; ods html;
proc print data=adjust2;
run;
ods html close; ods html;
proc arima data=adjust2;
identify var = sales(12);
estimate p = (1,2,3,10) q=(12) printall plot;
forecast lead=12 out=cast;
run;
ods html close; ods html;
proc arima data=adjust2;
identify var = sales(12);
estimate q = (1,5,10) p=(12) printall plot;
forecast lead=12 out=cast;
run;

ods html close; ods html;
data Thirteen;
infile "H:\4852\Project\RestSales3.txt" dlm='09'x;
input N sales;
run;
ods html close; ods html;
proc print data=thirteen;
run;
ods html close; ods html;
proc reg data=thirteen;
model sales=N;
run;
ods html close; ods html;
proc arima data=thirteen;
identify var=sales;
identify var=sales(1);
identify var=sales(12);
identify var=sales(1,12);
run;
ods html close; ods html;
proc arima data=thirteen;
identify var=sales(12) nlag=12;
estimate p=(1,10)(5) q=(12) printall plot WHITENOISE=IGNOREMISS;
forecast lead=12;
run;
ods html close; ods html;
data Adjust3;
infile "H:\4852\Project\Restadjust3.txt" dlm='09'x;
input N sales;
run;
ods html close; ods html;
proc reg data=adjust3;
model sales=N;
run;
ods html close; ods html;
proc arima data=adjust3;
identify var=sales(12);
estimate p=(1) q=(12) printall plot;
forecast lead=12;
run;

ods html close; ods html;
data Four;
infile "H:\4852\Project\RestSales4.txt" dlm='09'x;
input N sales;
run;
ods html close; ods html;
proc arima data=four;
identify var=sales(12);
identify var=sales(1,12);
run;
ods html close; ods html;
proc reg data=four;
model sales=n;
run;
ods html close; ods html;
proc arima data=four;
identify var=sales(12);
estimate p=(1,10)(5) q=(12) printall plot;
forecast lead=12;
run;

/*Cutting out 199-223 data points up to 2010, 216 total data points, 24 cut out*/
ods html close; ods html;
data new;
infile "H:\4852\Project\RestNew.txt" dlm='09'x;
input N sales;
if N < 217;
/*sales = log(sales);*/
run;
ods html close; ods html;
proc sgplot data=new;
series x=N y=sales;
run;
ods html close; ods html;
proc reg data=new;
model sales=n;
run;
ods html close; ods html;
proc arima data=new;
identify var = sales;
identify var = sales(1);
identify var = sales(12);
identify var = sales(1,12);
run;
ods html close; ods html;
proc arima data=new;
identify var=sales(12);
estimate p=(1,2,3,10) q=(12) printall;
forecast lead=12;
run;  /*pretty good*/

/* 2012 estimates using 228 total data points */
ods html close; ods html;
data new1;
infile "H:\4852\Project\RestNew.txt" dlm='09'x;
input N sales;
if N < 229;
run;
ods html close; ods html;
proc arima data=new1;
identify var = sales;
identify var = sales(1);
identify var = sales(12);
identify var = sales(1,12);
run;
ods html close; ods html;
proc arima data=new1;
identify var=sales(12);
estimate p=(1,3,10) q=(12) printall;
forecast lead=12;
run;

/* 2012 estimates using 240 total data points */
ods html close; ods html;
data new2;
infile "H:\4852\Project\RestNew.txt" dlm='09'x;
input N sales;
/*if N < 241;*/
run;
ods html close; ods html;
proc arima data=new2;
identify var = sales;
identify var = sales(1);
identify var = sales(12);
identify var = sales(1,12);
run;
ods html close; ods html;
proc arima data=new2;
identify var=sales(12);
estimate p=(1,10) q=(6) printall;
forecast lead=12;
run;
