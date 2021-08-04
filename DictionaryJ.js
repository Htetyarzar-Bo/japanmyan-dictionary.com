//let h4=document.querySelector('h4');

     //object တွေမှာ " " အတွင်း space ခြားမရ 
    
    // fill the dictionary with words
    init = function(){
    for(var i=0; i< dictionary.length; i++){
    //document.getElementById('number').innerHTML+="<li>" + i + "</li>";
    document.getElementById('word_list').innerHTML+="<li onclick='show(" + i + ")'>" +
    " " + dictionary[i].word +  "</li>";
    document.getElementById('yomi_list').innerHTML+="<li onclick='show(" + i + ")'>" +
    dictionary[i].yomi + "</li>";
    document.getElementById('means_list').innerHTML+="<li onclick='show(" + i + ")'>" +
    dictionary[i].mean + "</li>";
    }        
    }
    //call the init function when page loads 
    init();

//  ------------for click search and input search -----------------------------------
    show = function(i) {
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('yomi_text').innerHTML = dictionary[i].yomi;
    
    var list = "";
    for(var j=0; j < dictionary[i].mean.length; j++){
    list += "<li>"+ dictionary[i].mean[j]+ "</li>";
   // h4.textContent= "Mean:";
    document.getElementById('means_text').innerHTML= list + dictionary[i].remark ;
    }
   
}
    // show first word in the dictionary when page loads

    show(0);

    document.body.addEventListener('keydown', keyDown);

    function  keyDown(event){
        if (event.keyCode == 13) {
        //13 is enter key
        search();
  }
}
    // search functionality
    function search(){
        
     Appear =document.querySelector('button')
        query = document.getElementById('search').value;
        query.addEventListener('click',()=>{
        if(query == ""){
            Appear.classList.remove('appear')
            return;
        }
        else{
            Appear.classList.add('appear')
        }
        found = -1; // initialize found to false (0 ကနေမစရအောင်  )
    })
    // ------------search for japanese kanji----------------------------------------------------- 
    for (var i = 0; i < dictionary.length; i++){

        if(query == dictionary[i].word) {
            found = i;
            break;
         }else{
            document.getElementById('word_text').innerHTML = "Word not found";
            document.getElementById('yomi_text').innerHTML = " ";
           // h4.textContent="";
            document.getElementById('means_text').innerHTML = "The word you entered is not found in our dictionary";
         }
        }

        if(found>= 0){
            show(found);
    }
    // ------------search for japanese yomi kata-----------------------------------------------------
        for (var i = 0; i < dictionary.length; i++){
            if(query == dictionary[i].yomi) {
                found = i;
                break;
             }else{
                document.getElementById('word_text').innerHTML = "Word not found";
                document.getElementById('yomi_text').innerHTML = " ";
               // h4.textContent="";
                document.getElementById('means_text').innerHTML = "The word you entered is not found in our dictionary";
             }
            }
            if(found>= 0){
                show(found);
            }
        // ------------search for Myanmar words-----------------------------------------------------
        for (var i = 0; i < dictionary.length; i++){
            for(var j =0; j < dictionary[i].mean.length ; j++){

            
            if(query == dictionary[i].mean[j]) {
               
                found = i;
                break;
             }else{
                document.getElementById('word_text').innerHTML = "Word not found";
                document.getElementById('yomi_text').innerHTML = " ";
               // h4.textContent="";
                document.getElementById('means_text').innerHTML = "The word you entered is not found in our dictionary";
             }
            }
            if(found>= 0){
                show(found);
            }
            }
    }
  
    function Crossappear(){
       
           
        }
       

    // for side bar 
    const openMenu= document.querySelector('#show-menu');
    const hideMenuIcon = document.querySelector('#hide-menu');
    const sideMenu = document.querySelector('#nav-menu');
    
    openMenu.addEventListener('click',function(){
        sideMenu.classList.add('active')
    })
    
    hideMenuIcon.addEventListener('click',function(){
        sideMenu.classList.remove('active')
    })