var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {    
    'X-Client-Id': '2796',
    'X-Auth-Token': '177b19305f57cb97866895e328d47769'
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