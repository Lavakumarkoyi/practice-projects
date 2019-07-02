var Math={
  round : function(b){
  var c = b.toString();
  var d = c.split('.')
  if(d[1].length > 1){
    var r = parseInt(d[1][0]);
    var e = parseInt(d[0]);
    if(r >= 5){
      console.log(e+1);
    }
    else{
      console.log(e);
    }
  }
  else{
    var f = parseInt(d[1]);
    if(f >= 5){
      console.log(parseInt(d[0]) + 1);
    }
    else{
      console.log(parseInt(d[0]));
    }
  }
}
}

Math.round(4.2);



