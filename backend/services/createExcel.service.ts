import xl from 'excel4node';
import { tableModel } from '../models/tableModels.model';

function createExcel(excelOptions: tableModel) {
  const workBook = new xl.Workbook()
  const sheet1 = workBook.addWorksheet(excelOptions.sheetName)

  // paint table title
  const titleStyle = workBook.createStyle({
    font: {
      // color: '#FF0800',
      size: 14,
      alignment: {
        horizontal: ['center'],
        vertical: ['center']
      }
    }
  })

  const headerColumns = excelOptions.headeColumns
  sheet1.cell(1,1, 1, headerColumns.length, true).string(excelOptions.title).style(titleStyle)

  // paint table headers
  const headerStyle = workBook.createStyle({
    font: {
      // color: '#FF0800',
      size: 12,
      alignment: {
        horizontal: ['left'],
        vertical: ['center']
      }
    }
  })

  for(let i = 1; i <= headerColumns.length; i++) {
    sheet1.cell(2,i).string(headerColumns[i-1]).style(headerStyle)
  }

  // paint table data
  const tableData = excelOptions.data
  const initialRowData = 3
  const dataStyle = workBook.createStyle({
    font: {
      // color: '#FF0800',
      size: 11,
      alignment: {
        horizontal: ['left'],
        vertical: ['center']
      }
    }
  })

  for(let i = 1; i <= tableData.length; i++) {
    let currentRow = initialRowData + (i - 1)
    for(let j = 1; j <= headerColumns.length; j++) {
      let currentCell = j 

      sheet1.cell(currentRow, currentCell)
      .string(tableData[i-1][headerColumns[j-1]])
      .style(dataStyle)
    }
  }


  // workBook.write('test.xlsx', function(err, stats) {
  //   if (err) {
  //     console.log(err)
  //     logger.error(err)
  //   } else {
  //     console.log(stats)
  //     logger.info(stats)
  //   }
  // })

  return workBook
}

export { createExcel }


