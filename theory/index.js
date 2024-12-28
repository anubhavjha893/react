  // facebook created react 
  
  
  //virtual dom in react - reprint only those thing that was changed do not rerpint the whole page  

  //immuatable vs mutable  , primitive and refernce ,state ,spread operator   



  //spread operator
  var state = {name : harsh,age :18}; //  created a state as state kuch v ho sakta arry obj name number anything 
  var copy = {...state};  //spread operator used here
  copy.age = 33; //fir hmne copy me updation kiya 
  state = copy; //or fir state  ko copy ke barabar bata kr indirectly state ke values me changes kr diye




  // destructing very important topic
  var obj = {name : harsh,age :18}

  const {age} = obj;

  var arr = [12,,43,function name(params) {
    
  }];

  const [fir,,sec] = arr // ,, is used skip 1st index and take 2nd index




//import and export  
// we made components in react such as nav sidebar cart landing second and other pages and these all are included as components and these all componets were stored as different files
