var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {    
    'X-Client-Id': '2774',
    'X-Auth-Token': '316bc05c6d413df5629cacf61bd3e3a2'
};

$.ajaxSetup({ 
    headers: myHeaders
});

$.ajax({    
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {      
      setupColumns(response.columns);    
    }
});

function setupColumns(columns) { 
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) { 
    cards.forEach(function(e) { 
        var card = new Card(e.id, e.name, e.bootcamp_kanban_column_id);
        col.createCard(card); 
    });
}