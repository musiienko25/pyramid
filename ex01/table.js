var _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');


 function buildHtmlTable(arr) {
     var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, table);
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
 }
 

 function addAllColumnHeaders(arr, table)
 {
     var columnSet = [],
         tr = _tr_.cloneNode(false);
     for (var i=0, l=arr.length; i < l; i++) {
         for (var key in arr[i]) {
             if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
                 columnSet.push(key);
                 var th = _th_.cloneNode(false);
                 th.appendChild(document.createTextNode(key));
                 tr.appendChild(th);
             }
         }
     }
     table.appendChild(tr);
     return columnSet;
 }


document.body.appendChild(buildHtmlTable([
        {
            "Infinitive": "to be",
            "Past Simple": "was/were",
            "Past Participle": "been",
            "Translation": "бути"
        },
        {
            "Infinitive": "to become",
            "Past Simple": "became",
            "Past Participle": "become",
            "Translation": "ставати"
        },
        {
            "Infinitive": "to begin",
            "Past Simple": "began",
            "Past Participle": "begun",
            "Translation": "починати"
        },
        {
            "Infinitive": "to brake",
            "Past Simple": "broke",
            "Past Participle": "broken",
            "Translation": "ламати"
        },
        {
            "Infinitive": "to bring",
            "Past Simple": "brought",
            "Past Participle": "brought",
            "Translation": "приносити"
        },
        {
            "Infinitive": "to build",
            "Past Simple": "built",
            "Past Participle": "built",
            "Translation": "будувати"
        },
        {
            "Infinitive": "to buy",
            "Past Simple": "bought",
            "Past Participle": "bought",
            "Translation": "купувати"
        },
        {
            "Infinitive": "can",
            "Past Simple": "could",
            "Past Participle": "could",
            "Translation": "могти"
        },
        {
            "Infinitive": "to choose",
            "Past Simple": "chose",
            "Past Participle": "chosen",
            "Translation": "вибирати"
        },
        {
            "Infinitive": "to come",
            "Past Simple": "came",
            "Past Participle": "come",
            "Translation": "приходити"
        }
    ]));