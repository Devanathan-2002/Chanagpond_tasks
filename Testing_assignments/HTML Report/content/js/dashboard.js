/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 98.36065573770492, "KoPercent": 1.639344262295082};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9426229508196722, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, ""], "isController": false}, {"data": [1.0, 500, 1500, "heavy-engineeringRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "locationsRequest"], "isController": false}, {"data": [1.0, 500, 1500, "consumer-productsRequest"], "isController": false}, {"data": [1.0, 500, 1500, "heavy-engineeringRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "engineering-data-managementRequest"], "isController": false}, {"data": [1.0, 500, 1500, "GetRequest2"], "isController": false}, {"data": [1.0, 500, 1500, "webinar-Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "industrial-machinery-equipmentRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "webinar-Request-1"], "isController": false}, {"data": [0.0, 500, 1500, "GetRequest"], "isController": false}, {"data": [1.0, 500, 1500, "industrial-machinery-equipmentRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "control-panelRequest"], "isController": false}, {"data": [1.0, 500, 1500, "locationsRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "locationsRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "GetRequest2-1"], "isController": false}, {"data": [1.0, 500, 1500, "GetRequest2-0"], "isController": false}, {"data": [1.0, 500, 1500, "contactRequest"], "isController": false}, {"data": [1.0, 500, 1500, "product-designRequest"], "isController": false}, {"data": [1.0, 500, 1500, "design-automationRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "design-automationRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "electrical-cadRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "aboutRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "electrical-cadRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "aboutRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "control-panelRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "control-panelRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "case-studyRequest"], "isController": false}, {"data": [1.0, 500, 1500, "contactRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "contactRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "webinar-Request"], "isController": false}, {"data": [1.0, 500, 1500, "electrical-cadRequest"], "isController": false}, {"data": [1.0, 500, 1500, "consumer-productsRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "intelligent-automationRequest"], "isController": false}, {"data": [1.0, 500, 1500, "case-studyRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "case-studyRequest-0"], "isController": false}, {"data": [0.0, 500, 1500, "GetRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "design-automationRequest"], "isController": false}, {"data": [1.0, 500, 1500, "aboutRequest"], "isController": false}, {"data": [0.5, 500, 1500, "GetRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "consumer-productsRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "value-analysisRequest"], "isController": false}, {"data": [1.0, 500, 1500, "digital-assuranceRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "digital-assuranceRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "intelligent-automationRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "intelligent-automationRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "digital-customer-experienceRequest"], "isController": false}, {"data": [1.0, 500, 1500, "engineering-data-managementRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "engineering-data-managementRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "value-analysisRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "plc-based-systemRequest"], "isController": false}, {"data": [1.0, 500, 1500, "heavy-engineeringRequest"], "isController": false}, {"data": [1.0, 500, 1500, "value-analysisRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "digital-customer-experienceRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "product-designRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "digital-customer-experienceRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "product-designRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "industrial-machinery-equipmentRequest"], "isController": false}, {"data": [1.0, 500, 1500, "plc-based-systemRequest-1"], "isController": false}, {"data": [1.0, 500, 1500, "plc-based-systemRequest-0"], "isController": false}, {"data": [1.0, 500, 1500, "digital-assuranceRequest"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 61, 1, 1.639344262295082, 349.344262295082, 0, 2873, 218.0, 437.8, 534.6999999999998, 2873.0, 5.708937763219467, 164.05326903954142, 1.0854147168928403], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["", 1, 1, 100.0, 0.0, 0, 0, 0.0, 0.0, 0.0, 0.0, Infinity, Infinity, NaN], "isController": false}, {"data": ["heavy-engineeringRequest-1", 1, 0, 0.0, 204.0, 204, 204, 204.0, 204.0, 204.0, 204.0, 4.901960784313726, 186.39418658088238, 0.756357230392157], "isController": false}, {"data": ["locationsRequest", 1, 0, 0.0, 435.0, 435, 435, 435.0, 435.0, 435.0, 435.0, 2.2988505747126435, 91.31196120689656, 0.5792025862068966], "isController": false}, {"data": ["consumer-productsRequest", 1, 0, 0.0, 398.0, 398, 398, 398.0, 398.0, 398.0, 398.0, 2.512562814070352, 95.8920579459799, 0.7753611809045226], "isController": false}, {"data": ["heavy-engineeringRequest-0", 1, 0, 0.0, 233.0, 233, 233, 233.0, 233.0, 233.0, 233.0, 4.291845493562231, 2.4644581545064375, 0.662218347639485], "isController": false}, {"data": ["engineering-data-managementRequest", 1, 0, 0.0, 379.0, 379, 379, 379.0, 379.0, 379.0, 379.0, 2.638522427440633, 74.90414742744063, 0.8657651715039578], "isController": false}, {"data": ["GetRequest2", 1, 0, 0.0, 445.0, 445, 445, 445.0, 445.0, 445.0, 445.0, 2.247191011235955, 156.23683286516854, 0.6320224719101124], "isController": false}, {"data": ["webinar-Request-0", 1, 0, 0.0, 196.0, 196, 196, 196.0, 196.0, 196.0, 196.0, 5.1020408163265305, 2.730389030612245, 0.6875797193877551], "isController": false}, {"data": ["industrial-machinery-equipmentRequest-1", 1, 0, 0.0, 199.0, 199, 199, 199.0, 199.0, 199.0, 199.0, 5.025125628140704, 177.4203046482412, 0.8391567211055276], "isController": false}, {"data": ["webinar-Request-1", 1, 0, 0.0, 219.0, 219, 219, 219.0, 219.0, 219.0, 219.0, 4.5662100456621, 193.15871147260273, 0.6153681506849316], "isController": false}, {"data": ["GetRequest", 1, 0, 0.0, 2873.0, 2873, 2873, 2873.0, 2873.0, 2873.0, 2873.0, 0.3480682213713888, 20.306585559519664, 0.08157848938391925], "isController": false}, {"data": ["industrial-machinery-equipmentRequest-0", 1, 0, 0.0, 189.0, 189, 189, 189.0, 189.0, 189.0, 189.0, 5.291005291005291, 3.172536375661376, 0.8835565476190476], "isController": false}, {"data": ["control-panelRequest", 1, 0, 0.0, 435.0, 435, 435, 435.0, 435.0, 435.0, 435.0, 2.2988505747126435, 51.8902658045977, 0.6914511494252874], "isController": false}, {"data": ["locationsRequest-1", 1, 0, 0.0, 218.0, 218, 218, 218.0, 218.0, 218.0, 218.0, 4.587155963302752, 179.8308486238532, 0.5778741399082569], "isController": false}, {"data": ["locationsRequest-0", 1, 0, 0.0, 217.0, 217, 217, 217.0, 217.0, 217.0, 217.0, 4.608294930875576, 2.3851526497695854, 0.5805371543778802], "isController": false}, {"data": ["GetRequest2-1", 1, 0, 0.0, 226.0, 226, 226, 226.0, 226.0, 226.0, 226.0, 4.424778761061947, 305.21467090707966, 0.6222345132743363], "isController": false}, {"data": ["GetRequest2-0", 1, 0, 0.0, 219.0, 219, 219, 219.0, 219.0, 219.0, 219.0, 4.5662100456621, 2.497146118721461, 0.6421232876712328], "isController": false}, {"data": ["contactRequest", 1, 0, 0.0, 393.0, 393, 393, 393.0, 393.0, 393.0, 393.0, 2.544529262086514, 118.360368956743, 0.6311625318066157], "isController": false}, {"data": ["product-designRequest", 1, 0, 0.0, 397.0, 397, 397, 397.0, 397.0, 397.0, 397.0, 2.5188916876574305, 62.6500511649874, 0.7625551007556675], "isController": false}, {"data": ["design-automationRequest-1", 1, 0, 0.0, 209.0, 209, 209, 209.0, 209.0, 209.0, 209.0, 4.784688995215311, 110.65527811004785, 0.7382625598086124], "isController": false}, {"data": ["design-automationRequest-0", 1, 0, 0.0, 187.0, 187, 187, 187.0, 187.0, 187.0, 187.0, 5.347593582887701, 3.070688502673797, 0.8251169786096256], "isController": false}, {"data": ["electrical-cadRequest-0", 1, 0, 0.0, 218.0, 218, 218, 218.0, 218.0, 218.0, 218.0, 4.587155963302752, 2.607153096330275, 0.6943448967889908], "isController": false}, {"data": ["aboutRequest-0", 1, 0, 0.0, 191.0, 191, 191, 191.0, 191.0, 191.0, 191.0, 5.235602094240838, 2.6689299738219896, 0.6391115837696335], "isController": false}, {"data": ["electrical-cadRequest-1", 1, 0, 0.0, 195.0, 195, 195, 195.0, 195.0, 195.0, 195.0, 5.128205128205129, 114.97896634615384, 0.7762419871794871], "isController": false}, {"data": ["aboutRequest-1", 1, 0, 0.0, 202.0, 202, 202, 202.0, 202.0, 202.0, 202.0, 4.9504950495049505, 334.4533183787128, 0.6043084777227722], "isController": false}, {"data": ["control-panelRequest-0", 1, 0, 0.0, 218.0, 218, 218, 218.0, 218.0, 218.0, 218.0, 4.587155963302752, 2.5981938073394497, 0.689865252293578], "isController": false}, {"data": ["control-panelRequest-1", 1, 0, 0.0, 217.0, 217, 217, 217.0, 217.0, 217.0, 217.0, 4.608294930875576, 101.40949020737327, 0.6930443548387096], "isController": false}, {"data": ["case-studyRequest", 1, 0, 0.0, 391.0, 391, 391, 391.0, 391.0, 391.0, 391.0, 2.557544757033248, 151.46958919437338, 0.7043238491048593], "isController": false}, {"data": ["contactRequest-0", 1, 0, 0.0, 191.0, 191, 191, 191.0, 191.0, 191.0, 191.0, 5.235602094240838, 2.6893815445026177, 0.6493373691099477], "isController": false}, {"data": ["contactRequest-1", 1, 0, 0.0, 202.0, 202, 202, 202.0, 202.0, 202.0, 202.0, 4.9504950495049505, 227.73244121287127, 0.6139774133663366], "isController": false}, {"data": ["webinar-Request", 1, 0, 0.0, 415.0, 415, 415, 415.0, 415.0, 415.0, 415.0, 2.4096385542168677, 103.2214796686747, 0.6494728915662651], "isController": false}, {"data": ["electrical-cadRequest", 1, 0, 0.0, 414.0, 414, 414, 414.0, 414.0, 414.0, 414.0, 2.4154589371980677, 55.529608242753625, 0.7312424516908212], "isController": false}, {"data": ["consumer-productsRequest-1", 1, 0, 0.0, 210.0, 210, 210, 210.0, 210.0, 210.0, 210.0, 4.761904761904763, 179.00390625, 0.7347470238095238], "isController": false}, {"data": ["intelligent-automationRequest", 1, 0, 0.0, 395.0, 395, 395, 395.0, 395.0, 395.0, 395.0, 2.5316455696202533, 181.13132911392404, 0.7515822784810127], "isController": false}, {"data": ["case-studyRequest-1", 1, 0, 0.0, 199.0, 199, 199, 199.0, 199.0, 199.0, 199.0, 5.025125628140704, 294.8924309045226, 0.691936243718593], "isController": false}, {"data": ["case-studyRequest-0", 1, 0, 0.0, 192.0, 192, 192, 192.0, 192.0, 192.0, 192.0, 5.208333333333333, 2.8177897135416665, 0.7171630859375], "isController": false}, {"data": ["GetRequest-1", 1, 0, 0.0, 2322.0, 2322, 2322, 2322.0, 2322.0, 2322.0, 2322.0, 0.4306632213608958, 24.909493432385872, 0.050468346253229976], "isController": false}, {"data": ["design-automationRequest", 1, 0, 0.0, 396.0, 396, 396, 396.0, 396.0, 396.0, 396.0, 2.5252525252525255, 59.851444128787875, 0.7792771464646464], "isController": false}, {"data": ["aboutRequest", 1, 0, 0.0, 393.0, 393, 393, 393.0, 393.0, 393.0, 393.0, 2.544529262086514, 173.2044171437659, 0.6212229643765903], "isController": false}, {"data": ["GetRequest-0", 1, 0, 0.0, 543.0, 543, 543, 543.0, 543.0, 543.0, 543.0, 1.8416206261510129, 0.922608770718232, 0.21581491712707182], "isController": false}, {"data": ["consumer-productsRequest-0", 1, 0, 0.0, 188.0, 188, 188, 188.0, 188.0, 188.0, 188.0, 5.319148936170213, 3.054355053191489, 0.8207280585106383], "isController": false}, {"data": ["value-analysisRequest", 1, 0, 0.0, 438.0, 438, 438, 438.0, 438.0, 438.0, 438.0, 2.28310502283105, 55.36529680365297, 0.6911743721461188], "isController": false}, {"data": ["digital-assuranceRequest-0", 1, 0, 0.0, 189.0, 189, 189, 189.0, 189.0, 189.0, 189.0, 5.291005291005291, 2.924520502645503, 0.7595486111111112], "isController": false}, {"data": ["digital-assuranceRequest-1", 1, 0, 0.0, 200.0, 200, 200, 200.0, 200.0, 200.0, 200.0, 5.0, 274.5068359375, 0.7177734375], "isController": false}, {"data": ["intelligent-automationRequest-1", 1, 0, 0.0, 204.0, 204, 204, 204.0, 204.0, 204.0, 204.0, 4.901960784313726, 347.9626225490196, 0.7276348039215687], "isController": false}, {"data": ["intelligent-automationRequest-0", 1, 0, 0.0, 191.0, 191, 191, 191.0, 191.0, 191.0, 191.0, 5.235602094240838, 2.945026178010471, 0.7771596858638743], "isController": false}, {"data": ["digital-customer-experienceRequest", 1, 0, 0.0, 460.0, 460, 460, 460.0, 460.0, 460.0, 460.0, 2.1739130434782608, 178.64300271739128, 0.666610054347826], "isController": false}, {"data": ["engineering-data-managementRequest-1", 1, 0, 0.0, 196.0, 196, 196, 196.0, 196.0, 196.0, 196.0, 5.1020408163265305, 141.81082589285714, 0.8370535714285714], "isController": false}, {"data": ["engineering-data-managementRequest-0", 1, 0, 0.0, 183.0, 183, 183, 183.0, 183.0, 183.0, 183.0, 5.46448087431694, 3.2445355191256833, 0.896516393442623], "isController": false}, {"data": ["value-analysisRequest-0", 1, 0, 0.0, 222.0, 222, 222, 222.0, 222.0, 222.0, 222.0, 4.504504504504505, 2.560177364864865, 0.6818341779279279], "isController": false}, {"data": ["plc-based-systemRequest", 1, 0, 0.0, 389.0, 389, 389, 389.0, 389.0, 389.0, 389.0, 2.5706940874035986, 59.57282294344473, 0.7882792416452442], "isController": false}, {"data": ["heavy-engineeringRequest", 1, 0, 0.0, 437.0, 437, 437, 437.0, 437.0, 437.0, 437.0, 2.288329519450801, 88.32639087528604, 0.7061641876430206], "isController": false}, {"data": ["value-analysisRequest-1", 1, 0, 0.0, 215.0, 215, 215, 215.0, 215.0, 215.0, 215.0, 4.651162790697675, 110.14716569767442, 0.7040334302325582], "isController": false}, {"data": ["digital-customer-experienceRequest-1", 1, 0, 0.0, 232.0, 232, 232, 232.0, 232.0, 232.0, 232.0, 4.310344827586206, 351.73929148706895, 0.6608634159482758], "isController": false}, {"data": ["product-designRequest-0", 1, 0, 0.0, 201.0, 201, 201, 201.0, 201.0, 201.0, 201.0, 4.975124378109452, 2.827658582089552, 0.7530705845771144], "isController": false}, {"data": ["digital-customer-experienceRequest-0", 1, 0, 0.0, 227.0, 227, 227, 227.0, 227.0, 227.0, 227.0, 4.405286343612335, 2.5209939427312773, 0.6754198788546255], "isController": false}, {"data": ["product-designRequest-1", 1, 0, 0.0, 196.0, 196, 196, 196.0, 196.0, 196.0, 196.0, 5.1020408163265305, 123.99852519132652, 0.772281568877551], "isController": false}, {"data": ["industrial-machinery-equipmentRequest", 1, 0, 0.0, 389.0, 389, 389, 389.0, 389.0, 389.0, 389.0, 2.5706940874035986, 92.30398457583547, 0.8585716580976863], "isController": false}, {"data": ["plc-based-systemRequest-1", 1, 0, 0.0, 197.0, 197, 197, 197.0, 197.0, 197.0, 197.0, 5.076142131979695, 114.72874365482232, 0.7782756979695431], "isController": false}, {"data": ["plc-based-systemRequest-0", 1, 0, 0.0, 192.0, 192, 192, 192.0, 192.0, 192.0, 192.0, 5.208333333333333, 2.9805501302083335, 0.7985432942708334], "isController": false}, {"data": ["digital-assuranceRequest", 1, 0, 0.0, 389.0, 389, 389, 389.0, 389.0, 389.0, 389.0, 2.5706940874035986, 142.55553100899743, 0.7380703727506427], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.MalformedURLException/Non HTTP response message: Illegal character found in host: ' '", 1, 100.0, 1.639344262295082], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 61, 1, "Non HTTP response code: java.net.MalformedURLException/Non HTTP response message: Illegal character found in host: ' '", 1, "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["", 1, 1, "Non HTTP response code: java.net.MalformedURLException/Non HTTP response message: Illegal character found in host: ' '", 1, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
