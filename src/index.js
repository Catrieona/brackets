module.exports = function check(str, bracketsConfig) {
  if(str.length%2 != 0){
    return false
   };
   
   var config = bracketsConfig.map(v => v.join(''));
   
   var count = 0;
   var stop = str.length / 2;
   
   while(str.length > 1 && count < stop){  
        for(i=0;i<config.length;i++){
        str = str.replace(config[i],'')   
        }
    count++;
   }
   
   return str == 0
  
  }  