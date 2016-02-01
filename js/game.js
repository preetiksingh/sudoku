var Sudoku;

Sudoku = {

    popualateCellCoordinates: function() {
    var colNo, rowNo;
    rowNo = 1;
    colNo = 1;
    $.each($("#board .row"), function(i, row) {
      colNo = 1;
      $.each($(row).children('.cell'), function(j, cell) {
        cell.dataset.rowNo = rowNo;
        cell.dataset.colNo = colNo;
        return colNo++;
      });
      return rowNo++;
    });
    Game.rowsCount = rowNo - 1;
    return Game.columnsCount = colNo - 1;
  },
}