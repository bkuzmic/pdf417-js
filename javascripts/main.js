window.onload = function() { 
  var hub3_code = "HRVHUB30\nHRK\n" + 
      "000000000012355\n"+
      "ZELJKO SENEKOVIC\n"+
      "IVANECKA ULICA 125\n"+
      "42000 VARAZDIN\n"+
      "2DBK d.d.\n"+
      "ALKARSKI PROLAZ 13B\n"+
      "21230 SINJ\n"+
      "HR1210010051863000160\n"+
      "HR01\n"+
      "7269-68949637676-00019\n"+
      "COST\n"+
      "Troskovi za 1. mjesec\n";   

  var textToEncode = document.getElementById("textToEncode");
  textToEncode.value = hub3_code;   

  PDF417.init(hub3_code);             

  var barcode = PDF417.getBarcodeArray();

  // block sizes (width and height) in pixels
  var bw = 2;
  var bh = 2;

  // create canvas element based on number of columns and rows in barcode
  var canvas = document.createElement('canvas');
  canvas.width = bw * barcode['num_cols'];
  canvas.height = bh * barcode['num_rows'];
  document.getElementById('barcode').appendChild(canvas);

  var ctx = canvas.getContext('2d');                    

  // graph barcode elements
  var y = 0;
  // for each row
  for (var r = 0; r < barcode['num_rows']; ++r) {
      var x = 0;
      // for each column
      for (var c = 0; c < barcode['num_cols']; ++c) {
          if (barcode['bcode'][r][c] == 1) {                        
              ctx.fillRect(x, y, bw, bh);
          }
          x += bw;
      }
      y += bh;
  }            
}

function generate() {
  var textToEncode = document.getElementById("textToEncode");

  PDF417.init(textToEncode.value);             

  var barcode = PDF417.getBarcodeArray();

  // block sizes (width and height) in pixels
  var bw = 2;
  var bh = 2;

  // create canvas element based on number of columns and rows in barcode
  var container = document.getElementById('barcode');
  container.removeChild(container.firstChild);

  var canvas = document.createElement('canvas');
  canvas.width = bw * barcode['num_cols'];
  canvas.height = bh * barcode['num_rows'];
  container.appendChild(canvas);

  var ctx = canvas.getContext('2d');                    

  // graph barcode elements
  var y = 0;
  // for each row
  for (var r = 0; r < barcode['num_rows']; ++r) {
      var x = 0;
      // for each column
      for (var c = 0; c < barcode['num_cols']; ++c) {
          if (barcode['bcode'][r][c] == 1) {                        
              ctx.fillRect(x, y, bw, bh);
          }
          x += bw;
      }
      y += bh;
  }       
}
