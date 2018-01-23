(function GetLooser(){
    this.applicants = [];
    
    this.init = function(){
        this.addApplicants(); 
        this.getRandomUser();
        this.runAgain();
        this.startOver();
    };
    
 /*Show list*/
    function showList(){
        var parent = document.querySelector('.applicant_list_wrapper');
        var template = '';
        for(var i=0; i<applicants.length; i++){
            template += '<span class="name-tag" data-id="'+ i +'">' + applicants[i] + '</span>'
        }
        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteOne();
    }
    
    /*add applicant*/
    this.addApplicants = function(){
        
        function generateList(input){
            
            var value = input.value.toLowerCase();
            
            if(this.checkValid(value)){
                applicants.push(value);
                input.value = '';
                showList();
                
            }else{
                alert('Something is wrong');
            }
            console.log(applicants)
        }
       
        
        
        var addBtn = document.querySelector('#add_applicant');
        addBtn.addEventListener('click', function(){
            var input = document.querySelector('#applicant_value');
            generateList(input);
        });
    };
    
    this.checkValid = function(value){
        if(applicants.indexOf(value) < 0 && value != ''){
            return true;
        }
        return false;
    };
    
    
    /*delete item*/
    this.deleteOne = function(){
        var item = document.querySelectorAll('.name-tag');
        
        /*call below*/
        function removeIt(element){
            var attr = parseInt(element.getAttribute('data-id'));
            applicants.splice(attr, 1); //splice(postion , amount)   
            showList();
        }
        
        for(var i = 0; i<item.length; i++){
            item[i].addEventListener('click', function(){
                removeIt(this);
            });
        }
    };
    
    
    /*get randam user*/
    this.getRandomUser = function(){
        var resultButton = document.querySelector('#show_results');
        
         function showLooser(){
        var resultsContainer = document.querySelector('.result_container');
        var aplicantContainer = document.querySelector('.applicant_container');
        
        aplicantContainer.className += '  hidden';
        resultsContainer.className  = 'result_container';
        showRandomUser();
         }
        
        resultButton.addEventListener('click', function(){
           if(applicants.length > 1){
               showLooser();
           }else{
               alert('Add More Applicant')     
           }
        });
    };
    this.showRandomUser = function(){
        var resultContainer = document.querySelector('.result');
        var rand = applicants[Math.floor(Math.random()* applicants.length)];
        resultContainer.innerHTML = '';
        resultContainer.insertAdjacentHTML('afterbegin', '<h3>'+ rand +'</h3>');
    }
    
    /*run again*/
    this.runAgain = function(){
      var runAgainBtn = document.querySelector('.run_again');
      runAgainBtn.addEventListener('click', function(){
           showRandomUser();
      });
     
    };
    
    this.startOver = function(){
      var startAgainBtn = document.querySelector('.start_again');
      startAgainBtn.addEventListener('click', function(){ 
          
        var resultsContainer = document.querySelector('.result_container');
        var aplicantContainer = document.querySelector('.applicant_container');
        var aplicantWrapper = document.querySelector('.applicant_list_wrapper');

        
        aplicantContainer.className = 'applicant_container';
        resultsContainer.className  = 'result_container hidden';
        aplicantWrapper.innerHTML   = '';
        
        applicants = [];
        });
    };
    init();
})();